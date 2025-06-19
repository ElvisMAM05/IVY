# ─── IMPORTACIONES ─────────────────────────────────────────────────────────────
from rest_framework import generics, status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, SAFE_METHODS, BasePermission

from django.contrib.auth.models import User, Group
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import AccessToken

from .models import Usuario, Categoría, Servicios, Servicios_Categorías, Servicios_Trabajador
from .serializers import (
    UsuarioSerializer, CategoriaSerializer, ServiciosSerializer,
    ServiciosTrabajadorSerializer, ServiciosCategoriasSerializer,
    ServiciosDetailSerializer
)

# ─── ROLES ─────────────────────────────────────────────────────────────────────
"""
Roles posibles:
- Trabajador
- Administrador
- Cliente
"""

# ─── PERMISOS PERSONALIZADOS SEGÚN ROL ────────────────────────────────────────
class PermisosVistas(BasePermission):
    def has_permission(self, request, view):
        usuario = request.user

        if not usuario.is_authenticated:
            return False

        grupos = usuario.groups.values_list("name", flat=True)
        metodo = request.method

        if "Trabajador" in grupos:
            return metodo in ["POST", "GET", "PUT", "PATCH"]

        if "Cliente" in grupos:
            return metodo in SAFE_METHODS  # GET, HEAD u OPTIONS

        if "Administrador" in grupos:
            return True  # Acceso completo

        return False

# ─── REGISTRO DE USUARIOS ─────────────────────────────────────────────────────
class UserAPI(APIView):
   # permission_classes = [IsAuthenticated, PermisosVistas]

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        correo = request.data.get("correo")
        identificacion = request.data.get("identificacion")
        edad = request.data.get("edad")

        # Validaciones previas
        if User.objects.filter(username=username).exists():
            return Response({"error": "El nombre de usuario ya existe"}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(email=correo).exists():
            return Response({"error": "El correo ya está registrado"}, status=status.HTTP_400_BAD_REQUEST)

        if len(password) < 8:
            return Response({"error": "La contraseña debe tener al menos 8 caracteres"}, status=status.HTTP_400_BAD_REQUEST)

        if not identificacion.isdigit() or len(identificacion) != 9:
            return Response({"error": "La identificación debe ser un número de 9 dígitos"}, status=status.HTTP_400_BAD_REQUEST)

        # Creación del usuario
        usuario = User.objects.create_user(username=username, password=password, email=correo)

        Usuario.objects.create(usuario=usuario, identificacion=identificacion, edad=edad)

        return Response({"exito": "Usuario creado"}, status=status.HTTP_201_CREATED)

# ─── AUTENTICACIÓN ─────────────────────────────────────────────────────────────
class User_validate(APIView):
    permission_classes = [IsAuthenticated, PermisosVistas]

    def post(self, request):
        Username = request.data.get("username")
        Password = request.data.get("password")

        user = authenticate(username=Username, password=Password)
        if user is not None:
            token = AccessToken.for_user(user)
            return Response({"exito": "Usuario encontrado", "token": str(token),"id":user.id},status=201)
        else:
            return Response({"Error": "Usuario no existente"}, status=404)

# ─── ASIGNACIÓN Y CONSULTA DE ROL ─────────────────────────────────────────────
class RolView(APIView):
    permission_classes = [IsAuthenticated, PermisosVistas]

    def post(self, request):
        username = request.data.get("username")
        grupo_nombre = request.data.get("grupo")

        try:
            usuario = User.objects.get(username=username)
            grupo, creado = Group.objects.get(name=grupo_nombre)
            usuario.groups.add(grupo)
            return Response({"mensaje": f"El usuario '{username}' ha sido asignado al grupo '{grupo_nombre}'"}, status=status.HTTP_200_OK)

        except User.DoesNotExist:
            return Response({"error": "Usuario no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        except Group.DoesNotExist:
            return Response({"error": "Este grupo no existe"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        username = request.query_params.get("username")

        if username:
            try:
                usuario = User.objects.get(username=username)
                roles = usuario.groups.values_list("name", flat=True)
                return Response({"username": username, "roles": list(roles)}, status=status.HTTP_200_OK)
            except User.DoesNotExist:
                return Response({"error": "Usuario no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        else:
            # Listado general de usuarios con sus roles
            usuarios = User.objects.all()
            datos = []
            for user in usuarios:
                roles = user.groups.values_list("name", flat=True)
                datos.append({"username": user.username, "roles": list(roles)})
            return Response(datos, status=status.HTTP_200_OK)

# ─── CONSULTA DE SERVICIOS ASIGNADOS A TRABAJADORES ───────────────────────────
class trabajo_api(APIView):
    permission_classes = [IsAuthenticated, PermisosVistas]

    def get(self, request):
        trabajos = Servicios_Trabajador.objects.all()
        serializer = ServiciosTrabajadorSerializer(trabajos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

# ─── LISTADO Y CREACIÓN ───────────────────────────────────────────────────────
class UsuarioListCreate(ListCreateAPIView):
    #permission_classes = [IsAuthenticated, PermisosVistas]
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class CategoriaListCreate(ListCreateAPIView):
    #permission_classes = [IsAuthenticated, PermisosVistas]
    queryset = Categoría.objects.all()
    serializer_class = CategoriaSerializer

class ServiciosListCreate(ListCreateAPIView):
  #permission_classes = [IsAuthenticated, PermisosVistas]
    queryset = Servicios.objects.all()
    serializer_class = ServiciosSerializer

# ─── VISTAS DE DETALLE Y ELIMINACIÓN ──────────────────────────────────────────
class UsuarioRetrieveDestroy(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated, PermisosVistas]
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class CategoriaRetrieveDestroy(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated, PermisosVistas]
    queryset = Categoría.objects.all()
    serializer_class = CategoriaSerializer

class ServiciosRetrieveDestroy(RetrieveUpdateDestroyAPIView):
    #permission_classes = [IsAuthenticated, PermisosVistas]
    queryset = Servicios.objects.all()
    serializer_class = ServiciosSerializer

class ServiciosCategoriasRetrieveDestroy(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated, PermisosVistas]
    queryset = Servicios_Categorías.objects.all()
    serializer_class = ServiciosCategoriasSerializer

class Servicios_Trabajador_RetrieveDestroy(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated, PermisosVistas]
    queryset = Servicios_Trabajador.objects.all()
    serializer_class = ServiciosTrabajadorSerializer


    
# ─── VISTAS DE DETALLES ──────────────────────────────────────────

class ServicioDetailView(generics.RetrieveAPIView):
    queryset = Servicios.objects.all()
    serializer_class = ServiciosDetailSerializer

from rest_framework import generics, status
from .models import Usuario, Categoría, Servicios, Servicios_Categorías, Servicios_Trabajador
from .serializers import (UsuarioSerializer, CategoriaSerializer, ServiciosSerializer,
ServiciosTrabajadorSerializer, ServiciosCategoriasSerializer)
from rest_framework.generics import ListCreateAPIView,  RetrieveUpdateDestroyAPIView
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.contrib.auth import authenticate

# Vistas de creación y listado


class UserAPI(APIView):
    def post(self,request):
        username= request.data.get("username")
        password= request.data.get("password")
        correo=request.data.get("correo")
        identificacion= request.data.get("identificacion")
        edad= request.data.get("edad")

        if User.objects.filter(username=username).exists():
            return Response({"error":"El nombre de usuario ya existe"},status=status.HTTP_400_BAD_REQUEST)
        
        if User.objects.filter(email=correo).exists():
            return Response({"error":"El correo ya está registrado"},status=status.HTTP_400_BAD_REQUEST)
        
        if len(password) < 8:
            return Response({"error":"La contraseña debe tener al menos 8 caracteres"},status=status.HTTP_400_BAD_REQUEST)
        
        if not identificacion.isdigit() or len(identificacion) != 9:
            return Response({"error":"La identificación debe ser un número de 9 dígitos"},status=status.HTTP_400_BAD_REQUEST)

        usuario = User.objects.create_user(
            username=username,
            password=password,
            email=correo
        )
        
        Usuario.objects.create(
            usuario = usuario,
            identificacion = identificacion,
            edad = edad 
        )
        
        return Response({"exito":"Usuario creado"},status=status.HTTP_201_CREATED)  
        
class User_validate(APIView):
    def post (self,request):
        Username = request.data.get("username")
        Password = request.data.get("password") 
        
        user= authenticate(username=Username, password=Password)
        
        if user is not None:
            return Response({"exito":"Usuario encontrado"},status=201)
            
        else: 
            return Response({"Error":"Usuario no existente"},status=404)

class trabajo_api(APIView):
    def get(self,request):
        trabajos = Servicios_Trabajador.objects.all()
        serializer = ServiciosTrabajadorSerializer(trabajos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
from rest_framework.permissions import IsAuthenticated

class UsuarioListCreate(ListCreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    permission_classes = [IsAuthenticated]
    
class CategoriaListCreate(ListCreateAPIView):
    queryset = Categoría.objects.all()
    serializer_class = CategoriaSerializer
    permission_classes = [IsAuthenticated]


#Vistas de detalle y eliminación


class UsuarioRetrieveDestroy(RetrieveUpdateDestroyAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class CategoriaRetrieveDestroy(RetrieveUpdateDestroyAPIView):
    queryset = Categoría.objects.all()
    serializer_class = CategoriaSerializer

class ServiciosRetrieveDestroy(RetrieveUpdateDestroyAPIView):
    queryset = Servicios.objects.all()
    serializer_class = ServiciosSerializer

class ServiciosCategoriasRetrieveDestroy(RetrieveUpdateDestroyAPIView):
    queryset = Servicios_Categorías.objects.all()
    serializer_class = ServiciosCategoriasSerializer

class Servicios_Trabajador_RetrieveDestroy(RetrieveUpdateDestroyAPIView):
    queryset = Servicios_Trabajador.objects.all()
    serializer_class =ServiciosTrabajadorSerializer

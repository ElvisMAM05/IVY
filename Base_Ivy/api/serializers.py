from rest_framework import serializers
from .models import Usuario, Servicios, Categoría, Servicios_Categorías, Servicios_Trabajador, Comentarios 
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User  # Importado de django.contrib.auth.models
        fields = ['id', 'username', 'email', 'first_name', 'last_name','password','identificacion','edad']
        

class UsuarioSerializer(serializers.ModelSerializer):
    #usuario = UserSerializer() # Sí, pero el problema es la contraseña y que me lo deuelve en otro objeto
    username = serializers.CharField(source="usuario.username",read_only=True)
    user_id = serializers.IntegerField(source="usuario.id", read_only=True)
    email = serializers.EmailField(source="usuario.email", read_only=True)  
    class Meta:
        model = Usuario
        fields = ["user_id","username","email", "identificacion", "edad","id"]
        
        
class ServiciosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Servicios
        fields = '__all__'

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoría
        fields = ["id", "nombre_c", "descripcion_c","imagen_c"]

class ServiciosCategoriasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Servicios_Categorías
        fields = '__all__'

class ServiciosTrabajadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Servicios_Trabajador
        fields = '__all__' 
        
class UsuarioListSerializer(serializers.ModelSerializer):
    usuario = UserSerializer()
    class Meta:
        model = Usuario
        fields = ['id', 'usuario', 'identificacion', 'edad']
        
class ServiciosDetailSerializer(serializers.ModelSerializer):
    usuario_trabajador_nombre = serializers.CharField(source="usuario_trabajador.usuario.username", read_only=True)
    Categoria_Servicio = CategoriaSerializer()
    class Meta:
        model = Servicios
        fields = ['id', 'nombre_servicio', 'descripcion_Servicio',
                'descripcion_larga', 'imagen_servicio', 'Categoria_Servicio', 'usuario_trabajador_nombre']
        


class ComentariosSerializer(serializers.ModelSerializer):
    usuario_nombre = serializers.CharField(source='usuario.username', read_only=True)
    servicio_nombre = serializers.CharField(source='servicio.nombre_servicio', read_only=True)

    class Meta:
        model = Comentarios
        fields = ['id', 'comentario', 'fecha', 'usuario_nombre', 'servicio_nombre']
        read_only_fields = ['usuario_nombre', 'servicio_nombre', 'fecha']
 
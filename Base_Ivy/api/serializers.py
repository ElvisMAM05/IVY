from rest_framework import serializers
from .models import Usuario, Servicios, Categoría, Servicios_Categorías, Servicios_Trabajador
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
        fields = '__all__'

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
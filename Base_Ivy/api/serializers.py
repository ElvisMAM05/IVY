from rest_framework import serializers
from .models import Usuario, Servicios, Categoría, Servicios_Categorías, Servicios_Trabajador
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User  # Importado de django.contrib.auth.models
        fields = ['id', 'username', 'email', 'first_name', 'last_name','password']
        

class UsuarioSerializer(serializers.ModelSerializer):
    usuario = UserSerializer()
    
    class Meta:
        model = Usuario
        fields = '__all__'
        


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
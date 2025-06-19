from django.db import models
from django.contrib.auth.models import User

class Usuario(models.Model):
    usuario = models.OneToOneField(User,on_delete=models.CASCADE)
    identificacion = models.CharField(max_length=20)
    edad = models.IntegerField()
    Imagen_U= models.CharField(max_length=255, default="", blank=True, null=True)

class Servicios(models.Model):
    nombre_servicio = models.CharField(max_length=50)
    usuario_trabajador = models.ForeignKey(Usuario, on_delete=models.CASCADE, null=True, blank=True)
    descripcion_Servicio= models.TextField(max_length=250,default="Sin descripción")
    descripcion_larga= models.TextField(max_length=250,default="Sin descripción")
    Categoria_Servicio = models.ForeignKey('Categoría', on_delete=models.CASCADE, null=True, blank=True)
    imagen_servicio = models.CharField(max_length=255, default="", blank=True, null=True)
    
class Categoría(models.Model):
    nombre_c=models.TextField()
    imagen_c = models.CharField(max_length=255, default="", blank=True, null=True)
    descripcion_c = models.CharField(max_length=255, default="Sin descripción")
    
    
    def __str__(self):
        return self.nombre_c

class Servicios_Categorías(models.Model):
    Categoría=models.ForeignKey(Categoría,on_delete=models.CASCADE)
    Servicios=models.ForeignKey(Servicios,on_delete=models.CASCADE)
    
    
class Servicios_Trabajador(models.Model):
    Servicios=models.ForeignKey(Servicios,on_delete=models.CASCADE)
    Trabajador=models.ForeignKey(Usuario,on_delete=models.CASCADE)
    

    
from django.db import models
from django.contrib.auth.models import User

class Usuario(models.Model):
    usuario = models.OneToOneField(User,on_delete=models.CASCADE)
    identificacion = models.CharField(max_length=20)
    edad = models.IntegerField()

class Servicios(models.Model):
    nombre_servicio = models.CharField(max_length=50)
    usuario_trabajador = models.ForeignKey(Usuario,on_delete=models.CASCADE)
    
class Categoría(models.Model):
    nombre_c=models.TextField()
    imagen_c=models.TextField( )
    descripcion_c=models.TextField(null=True, blank=True)
    
    def __str__(self):
        return self.nombre_c

class Servicios_Categorías(models.Model):
    Categoría=models.ForeignKey(Categoría,on_delete=models.CASCADE)
    Servicios=models.ForeignKey(Servicios,on_delete=models.CASCADE)
    
    
class Servicios_Trabajador(models.Model):
    Servicios=models.ForeignKey(Servicios,on_delete=models.CASCADE)
    Trabajador=models.ForeignKey(Usuario,on_delete=models.CASCADE)
    
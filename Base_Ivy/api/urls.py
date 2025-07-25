
from django.urls import path
from .views import (UserAPI,User_validate, CategoriaListCreate, CategoriaRetrieveDestroy,
                    ServiciosListCreate,ServiciosRetrieveDestroy,UsuarioListCreate,
                    UsuarioRetrieveDestroy,RolView, ServicioDetailView,ComentariosListCreate,
                    ComentariosRetrieveDestroy,SolicitudListCreate,ServiciosCategoriasListCreate,
                    ServiciosCategoriasRetrieveDestroy,ServiciosPorCategoria)
# from rest_framework.authtoken.views import ObtainAuthToken
urlpatterns = [
    path('usuario/',UserAPI.as_view()), 
    path('Log-in/',User_validate.as_view()),
    path('Categories/',  CategoriaListCreate.as_view()),
    path("ServiciosCategorias/", ServiciosCategoriasListCreate.as_view()),
    path('ServiciosCategorias/<int:pk>/', ServiciosCategoriasRetrieveDestroy.as_view()),
    path('Categories/<int:pk>/', CategoriaRetrieveDestroy.as_view()),
    path("Servicios/",ServiciosListCreate.as_view()),
    path('ServiciosE/<int:pk>/', ServiciosRetrieveDestroy.as_view()),
    path('Usuarios/', UsuarioListCreate.as_view()),
    path('Usuarios/<int:pk>/', UsuarioRetrieveDestroy.as_view()),
    path('usuarios/rol/', RolView.as_view()),
    path('Servicios/<int:pk>/', ServicioDetailView.as_view()),
    path('comentarios/', ComentariosListCreate.as_view()),
    path('Comentarios/<int:servicio_id>/', ComentariosListCreate.as_view()),
    path('Solicitudes/', SolicitudListCreate.as_view()),
    path('Solicitudes/<int:servicio_id>/', SolicitudListCreate.as_view()),
    
    path('ServiciosPorCategoria/<int:id>/', ServiciosPorCategoria.as_view()),
]   

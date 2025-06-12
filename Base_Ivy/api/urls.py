
from django.urls import path
from .views import UserAPI,User_validate, CategoriaListCreate, CategoriaRetrieveDestroy,ServiciosListCreate,ServiciosRetrieveDestroy,UsuarioListCreate,UsuarioRetrieveDestroy,RolView
# from rest_framework.authtoken.views import ObtainAuthToken
urlpatterns = [
    path('usuario/',UserAPI.as_view()), 
    path('Log-in/',User_validate.as_view()),
    path('Categories/',  CategoriaListCreate.as_view()),
    path('Categories/<int:pk>/', CategoriaRetrieveDestroy.as_view()),
    path("Servicios/",ServiciosListCreate.as_view()),
    path('Servicios/<int:pk>/', ServiciosRetrieveDestroy.as_view()),
    path('Usuarios/', UsuarioListCreate.as_view()),
    path('Usuarios/<int:pk>/', UsuarioRetrieveDestroy.as_view()),
    path('Roles',RolView.as_view())
]   


from django.urls import path
from .views import UserAPI,User_validate
urlpatterns = [
    path('usuario/',UserAPI.as_view()), 
    path('Log-in/',User_validate.as_view()),
    
    
]

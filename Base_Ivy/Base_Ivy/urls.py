
from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt.views import(TokenObtainPairView,TokenRefreshView)



from rest_framework.authtoken.views import ObtainAuthToken

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include("api.urls")), 
    path('api/token/', TokenObtainPairView.as_view(),name='token_obtener_par'),



    
]

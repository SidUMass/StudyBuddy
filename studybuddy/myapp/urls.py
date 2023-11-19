# your_app_name/urls.py
from django.urls import path
from .views import register, login

urlpatterns = [
    path('api/register/', register, name='register'),
    path('api/login', login, name='login'),
    # Add other URL patterns if needed
]

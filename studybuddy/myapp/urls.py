# your_app_name/urls.py
from django.urls import path
from .views import login, register, profile

urlpatterns = [
    path('register', register, name='register'),
    path('login', login, name='login'),
    path('profile', profile, name='profile')
    # Add other URL patterns if needed
]

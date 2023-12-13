# your_app_name/urls.py
from django.urls import path
from .views import login, register, profile, add_course

urlpatterns = [
    path('register', register, name='register'),
    path('login', login, name='login'),
    path('profile', profile, name='profile'),
    path('add_course/', add_course, name='add_course')
    # Add other URL patterns if needed
]

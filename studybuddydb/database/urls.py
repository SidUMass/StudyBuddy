from django.urls import path
from . import views
urlpatterns = [
    path('register/', views.register, name='register'),  # URL pattern for registering users
    path('login/', views.login_view, name='login'),      # URL pattern for user login
    path('profile/', views.user_profile, name='profile'),  # URL pattern for user profile
    # ... more URL patterns for this app ...
]
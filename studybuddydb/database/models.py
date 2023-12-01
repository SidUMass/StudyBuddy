from django.contrib.auth.models import AbstractUser
from django.db import models
class CustomUser(AbstractUser):
    # Add additional fields if needed
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)
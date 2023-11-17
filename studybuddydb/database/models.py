from django.contrib.auth.models import User  # Importing the built-in User model
from django.db import models

class Course(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=10)

    def __str__(self):
        return self.name

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)

<<<<<<< HEAD
    def __str__(self):
        return self.user.username
=======
>>>>>>> ef82b988e6bf949b655e76c98f5da0fb43022d9a

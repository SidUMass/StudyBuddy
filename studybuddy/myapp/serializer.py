from rest_framework import serializers
from django.contrib.auth.hashers import make_password ##instead of bcrypt
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'password']  # Adjust this based on your User model fields

    def create(self, validated_data):
        # Hash the password before saving it to the database
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)

    def update(self, instance, validated_data):
        # Hash the password before updating it in the database
        validated_data['password'] = make_password(validated_data['password'])
        return super().update(instance, validated_data)

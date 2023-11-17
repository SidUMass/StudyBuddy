from django.test import TestCase

# Create your tests here.
from django.test import TestCase
from .models import CustomUser

class CustomUserModelTest(TestCase):
    def setUp(self):
        CustomUser.objects.create_user(username="testuser", email="test@example.com", password="testpassword123")

    def test_user_creation(self):
        user = CustomUser.objects.get(username="testuser")
        self.assertEqual(user.email, "test@example.com")


from django.urls import reverse
from django.test import TestCase, Client

class UserRegistrationTest(TestCase):
    def setUp(self):
        self.client = Client()

    def test_user_registration(self):
        response = self.client.post(reverse('register'), {
            'username': 'newuser',
            'password': 'newpassword123',
            'email': 'newuser@example.com'
        })
        self.assertEqual(response.status_code, 200)
        self.assertTrue(CustomUser.objects.filter(username='newuser').exists())

from django.test import TestCase
from django.urls import reverse
from .models import CustomUser

class UserRegistrationTest(TestCase):
    def test_user_registration(self):
        # Test registration endpoint
        response = self.client.post(reverse('register'), {
            'username': 'newuser',
            'email': 'newuser@example.com',
            'password': 'newpassword123'
        }, content_type='application/json')  # Specify content_type as JSON
        self.assertEqual(response.status_code, 200)
        
        # Check if the user was created in the database
        self.assertTrue(CustomUser.objects.filter(username='newuser').exists())

    def test_user_registration_invalid_data(self):
        # Test registration with missing fields
        response = self.client.post(reverse('register'), {}, content_type='application/json')  # Specify content_type as JSON
        self.assertEqual(response.status_code, 200)
        self.assertFalse(CustomUser.objects.exists())  # No user should be created

class UserLoginTest(TestCase):
    def setUp(self):
        # Create a user for testing login
        self.user = CustomUser.objects.create_user(username='testuser', email='testuser@example.com', password='testpassword123')

    def test_user_login(self):
        # Test login endpoint
        response = self.client.post(reverse('login'), {
            'username': 'testuser',
            'password': 'testpassword123',
        }, content_type='application/json')  # Specify content_type as JSON
        self.assertEqual(response.status_code, 200)
        
        # Check if login was successful
        self.assertContains(response, 'Login successful.')

    def test_user_login_invalid_credentials(self):
        # Test login with invalid credentials
        response = self.client.post(reverse('login'), {
            'username': 'testuser',
            'password': 'wrongpassword',
        }, content_type='application/json')  # Specify content_type as JSON
        self.assertEqual(response.status_code, 200)
        
        # Check if login failed
        self.assertContains(response, 'Invalid credentials.')

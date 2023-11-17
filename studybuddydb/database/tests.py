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

# class UserRegistrationTest(TestCase):
#     def setUp(self):
#         self.client = Client()

#     def test_user_registration(self):
#         response = self.client.post(reverse('register'), {
#             'username': 'newuser',
#             'password': 'newpassword123',
#             'email': 'newuser@example.com'
#         })
#         self.assertEqual(response.status_code, 200)
#         self.assertTrue(CustomUser.objects.filter(username='newuser').exists())

class UserRegistrationTest(TestCase):
    def test_user_registration(self):
        response = self.client.post(reverse('register'), {
            'username': 'newuser',
            'email': 'newuser@example.com',
            'password': 'newpassword123'
        })
        self.assertEqual(response.status_code, 200)  # Or appropriate status code
        self.assertTrue(CustomUser.objects.filter(username='newuser').exists())

        
class CustomUserModelMethodTest(TestCase):
    def setUp(self):
        self.user = CustomUser.objects.create_user(username="testuser", email="test@example.com", password="testpassword123")

    def test_some_custom_method(self):
        # Assuming you have a custom method in CustomUser model
        result = self.user.some_custom_method()
        self.assertEqual(result, expected_result)

class UserAPITest(TestCase):
    def test_user_creation_api(self):
        response = self.client.post('/api/users/', {'username': 'apiuser', 'password': 'testpass123', 'email': 'apiuser@example.com'})
        self.assertEqual(response.status_code, 201)
        self.assertTrue(CustomUser.objects.filter(username='apiuser').exists())

class UserAuthenticationTest(TestCase):
    def setUp(self):
        self.user = CustomUser.objects.create_user(username='testuser', password='testpass123')

    def test_login(self):
        self.client.login(username='testuser', password='testpass123')
        response = self.client.get('/some-protected-view/')
        self.assertEqual(response.status_code, 200)


#from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth.hashers import make_password, check_password
from .models import CustomUser  # Import CustomUser model

from django.contrib.auth.decorators import login_required

# Create your views here.
@csrf_exempt ##protects against unauthorized actions 
def register(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        username = data.get('username')
        password = data.get('password')
        email = data.get('email')

        if not username or not password or not email:
            return JsonResponse({'success': False, 'message': 'Please provide all required fields.'})

        if CustomUser.objects.filter(username=username).exists():
            return JsonResponse({'success': False, 'message': 'Username already exists.'})

        hashed_password = make_password(password)
        CustomUser.objects.create(username=username, email=email, password=hashed_password)

        return JsonResponse({'success': True, 'message': 'Registration successful.'})

@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        username = data.get('username')
        password = data.get('password')

        if not username or not password:
            return JsonResponse({'success': False, 'message': 'Please provide all required fields.'})

        user = CustomUser.objects.filter(username=username).first()

        if not user or not check_password(password, user.password):
            return JsonResponse({'success': False, 'message': 'Invalid credentials.'})

        return JsonResponse({'success': True, 'message': 'Login successful.'})


# this is because login will be required to access profile
# this also makes the profile data come in the form of jSON objects as shown below.
@login_required
def profile(request):
    if request.method == 'GET':
        user = request.user
        profile_data = {
            'first_name': user.first_name,
            'last_name': user.last_name,
            'email': user.email,
            'courses': list(user.courses.values('name'))  # List of courses
        }
        return JsonResponse(profile_data)



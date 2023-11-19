#from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth.hashers import make_password, check_password
from .models import CustomUser  # Import CustomUser model

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



# yourappname/views.py
from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.hashers import make_password, check_password
from .models import CustomUser

def register(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')

        if not (username and email and password):
            return JsonResponse({'success': False, 'message': 'Please provide all required fields.'})

        if CustomUser.objects.filter(username=username).exists():
            return JsonResponse({'success': False, 'message': 'Username already exists.'})

        hashed_password = make_password(password)
        CustomUser.objects.create(username=username, email=email, password=hashed_password)

        return JsonResponse({'success': True, 'message': 'Registration successful.'})
    else:
        return JsonResponse({'success': False, 'message': 'Invalid request method.'})

def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        if not (username and password):
            return JsonResponse({'success': False, 'message': 'Please provide all required fields.'})

        user = CustomUser.objects.filter(username=username).first()

        if not user or not check_password(password, user.password):
            return JsonResponse({'success': False, 'message': 'Invalid credentials.'})

        return JsonResponse({'success': True, 'message': 'Login successful.'})
    else:
        return JsonResponse({'success': False, 'message': 'Invalid request method.'})

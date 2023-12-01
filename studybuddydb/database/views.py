from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from .forms import CustomUserCreationForm, ProfileForm
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import CustomUser  # Import your CustomUser model

@require_http_methods(["POST"])
def register(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    email = request.POST.get('email')
    
    if not all([username, password, email]):
        return JsonResponse({'success': False, 'message': 'Please provide all required fields.'})

    if CustomUser.objects.filter(username=username).exists():
        return JsonResponse({'success': False, 'message': 'Username already exists.'})

    user = CustomUser.objects.create_user(username=username, email=email, password=password)
    return JsonResponse({'success': True, 'message': 'Registration successful.'})

@require_http_methods(["GET", "POST"])
def user_profile(request):
    if not request.user.is_authenticated:
        return JsonResponse({'success': False, 'message': 'User is not authenticated.'}, status=401)

    if request.method == 'GET':
        profile, created = UserProfile.objects.get_or_create(user=request.user)
        return JsonResponse({
            'success': True,
            'username': request.user.username,
            'email': request.user.email,
            'bio': profile.bio,
            'avatar': profile.avatar.url if profile.avatar else None
        })

    if request.method == 'POST':
        profile, created = UserProfile.objects.get_or_create(user=request.user)
        bio = request.POST.get('bio')
        avatar = request.FILES.get('avatar')

        if bio is not None:
            profile.bio = bio
        if avatar is not None:
            profile.avatar = avatar

        profile.save()
        return JsonResponse({'success': True, 'message': 'Profile updated successfully.'})


def login_view(request):
    username = request.POST.get('username')
    password = request.POST.get('password')

    if not all([username, password]):
        return JsonResponse({'success': False, 'message': 'Please provide all required fields.'})

    user = authenticate(username=username, password=password)
    if user is not None:
        login(request, user)
        return JsonResponse({'success': True, 'message': 'Login successful.'})
    else:
        return JsonResponse({'success': False, 'message': 'Invalid credentials.'})
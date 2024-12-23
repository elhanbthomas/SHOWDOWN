from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

from .models import Profile
@api_view(['POST'])
def edit_profile(request):
    user = request.user
    try:
        profile = Profile.objects.get(user = user)
        profile.name = request.data.get('name')
        profile.email = request.data.get('email')
        profile.phone = request.data.get('phone')
        profile.blood_group = request.data.get('blood_group')
        profile.address1 = request.data.get('address1')
        profile.address2 = request.data.get('address2')
        profile.city = request.data.get('city')
        profile.state = request.data.get('state')
        profile.pincode = request.data.get('pincode')
        profile.save()
        return Response({'message':'Profile updated'})
    except Profile.DoesNotExist:
        return Response({'error':'user does not exist'}, status=404)
    

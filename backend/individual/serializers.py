from rest_framework import serializers

from .models import Profile, User

class IndividualRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        exclude = ['user']
    
class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True)
    profile = IndividualRegistrationSerializer()
    class Meta:
        model = User
        fields = ['username','password', 'profile']

    def create(self, validated_data):
        pwd = validated_data.pop('password')
        user = User.objects.create_user(
            username=validated_data['username'],
            password=pwd
        )
        data =  validated_data['profile']
        if user:
            Profile.objects.create(user=user, **data)
        
        return user
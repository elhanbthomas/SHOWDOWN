from django.urls import path
from .views import registerIndividual, edit_profile
urlpatterns = [
    path('individual/register', registerIndividual, name='individual_registration'),
    path('profile/edit', edit_profile, name='edit_profile'),
]

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse
from profiles.models import UserProfile

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def update_account_profile(request):
  user_profile = UserProfile.objects.get(user=request.user)

  # username = request.data.get('username', user_profile.username)
  # email = request.data.get('email', user_profile.email)
  avatar_url = request.data.get('avatar_url', user_profile.avatar_url)

  user_profile.avatar_url = avatar_url

  user_profile.save()

  return JsonResponse({'message': 'Account updated successfully!'})

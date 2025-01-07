from django.urls import path
from .views import get_notes, CustomTokenObtainPairView, CustomRefreshTokenView, logout, is_authenticated

urlpatterns = [
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', CustomRefreshTokenView.as_view(), name='token_refresh'),
    path('notes/', get_notes),
    path('logout/', logout),
    path('authenticated/', is_authenticated)
]

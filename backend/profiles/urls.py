from django.urls import path
from .views import update_account_profile

urlpatterns = [
  path('', update_account_profile),
]

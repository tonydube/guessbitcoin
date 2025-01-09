from django.urls import path
from .views import submit_prediction, get_predictions

urlpatterns = [
  path('', get_predictions),
  path('submit/', submit_prediction),
]

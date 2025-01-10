from django.urls import path
from .views import submit_prediction, get_predictions, get_leaderboard

urlpatterns = [
  path('', get_predictions),
  path('submit/', submit_prediction),
  path('leaderboard/', get_leaderboard)
]

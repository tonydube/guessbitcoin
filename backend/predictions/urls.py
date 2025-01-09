from django.urls import path
from .views import SubmitPredictionView, CalendarPredictionsView

urlpatterns = [
  path('submit/', SubmitPredictionView.as_view(), name='submit_prediction'),
  path('calendar/', CalendarPredictionsView.as_view(), name='calendar_predictions'),
]

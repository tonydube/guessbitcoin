from django.urls import path
from . import views

urlpatterns = [
    path('predictions/last-seven-days/', views.last_seven_days_predictions, name='last_seven_days_predictions'),
]

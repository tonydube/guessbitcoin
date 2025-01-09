from django.contrib import admin
from .models import Prediction

@admin.register(Prediction)
class PredictionAdmin(admin.ModelAdmin):
    list_display = ('user', 'prediction_date', 'predicted_price', 'locked', 'created_at', 'modified_date')
    list_filter = ('prediction_date', 'locked')

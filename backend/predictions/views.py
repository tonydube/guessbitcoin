from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from .models import Prediction

class SubmitPredictionView(View):
  def post(self, request):
    user = request.user
    prediction_date = request.POST.get('prediction_date')
    predicted_price = request.POST.get('predicted_price')

    # Validation logic
    if Prediction.objects.filter(user=user, prediction_date=prediction_date).exists():
      return JsonResponse({'error': 'You already made a prediction for this date.'}, status=400)

    # Create prediction
    prediction = Prediction.objects.create(
      user=user,
      prediction_date=prediction_date,
      predicted_price=predicted_price
    )
    return JsonResponse({'message': 'Prediction submitted successfully!', 'id': prediction.id})

class CalendarPredictionsView(View):
  def get(self, request):
    predictions = Prediction.objects.all()
    data = [{'user': p.user.username, 'date': p.prediction_date, 'price': p.predicted_price} for p in predictions]
    return JsonResponse(data, safe=False)

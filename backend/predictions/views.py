from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from .models import Prediction
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def submit_prediction(request):
  user = request.user
  prediction_date = request.data.get('prediction_date')
  predicted_price = request.data.get('predicted_price')

  if Prediction.objects.filter(user=user, prediction_date=prediction_date).exists():
    return JsonResponse({'error': 'You already made a prediction for this date.'}, status=400)

  prediction = Prediction.objects.create(
    user=user,
    prediction_date=prediction_date,
    predicted_price=predicted_price
  )
  return JsonResponse({'message': 'Prediction submitted successfully!', 'id': prediction.id})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_predictions(request):
  predictions = Prediction.objects.all()
  data = [{'user': p.user.username, 'date': p.prediction_date, 'price': p.predicted_price} for p in predictions]
  return JsonResponse(data, safe=False)
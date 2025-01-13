from django.http import JsonResponse
from django.utils.timezone import now, timedelta
from django.db.models import Count
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from predictions.models import Prediction

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def last_seven_days_predictions(request):
    today = now().date()
    six_days_ago = today - timedelta(days=6)  # Adjusted range to include today as the last day

    # Query predictions created within the last 7 days (including today)
    data = (
        Prediction.objects.filter(created_at__date__range=[six_days_ago, today])
        .values('created_at__date')
        .annotate(count=Count('id'))
        .order_by('created_at__date')
    )

    # Prepare a dictionary of results
    data_dict = {entry['created_at__date']: entry['count'] for entry in data}

    # Generate the last 7 days as a range (today included as the last day)
    date_range = [six_days_ago + timedelta(days=i) for i in range(7)]

    # Build the chart data with zeros for missing days
    chart_data = {
        'labels': [date.strftime('%Y-%m-%d') for date in date_range],
        'values': [data_dict.get(date, 0) for date in date_range],
    }

    return JsonResponse(chart_data)

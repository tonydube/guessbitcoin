from django.db import models
from django.utils.timezone import now
from django.conf import settings

class Prediction(models.Model):
  user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
  prediction_date = models.DateField()
  predicted_price = models.DecimalField(max_digits=15, decimal_places=2)
  created_at = models.DateTimeField(auto_now_add=True)
  modified_date = models.DateTimeField(auto_now=True)
  locked = models.BooleanField(default=False)

  def __str__(self):
    return f"{self.user.username} - {self.prediction_date} - {self.predicted_price}"

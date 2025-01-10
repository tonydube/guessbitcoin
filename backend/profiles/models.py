from django.db import models
from django.conf import settings

class UserProfile(models.Model):
  user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
  tier = models.CharField(max_length=10, choices=[('free', 'Free'), ('premium', 'Premium')], default='free')
  points = models.IntegerField(default=0)
  avatar_url = models.URLField(blank=True, null=True)

  def __str__(self):
    return f"{self.user.username} - {self.tier} - {self.points}"

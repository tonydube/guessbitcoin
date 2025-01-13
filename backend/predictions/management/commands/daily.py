import requests
from datetime import datetime, timedelta
from django.core.management.base import BaseCommand
from django.utils.timezone import make_aware
from predictions.models import Prediction
from django.db import connection
from django.db import transaction

# Configuration variables
EXACT_MATCH_POINTS = 100
CLOSE_MATCH_POINTS = 50
FAR_MATCH_POINTS = 25
TIME_MULTIPLIER = 0.1  # Multiply points by this for each day between guess and result
CLOSE_RANGE = 50  # $50 range for close match
FAR_RANGE = 100  # $100 range for far match
CRYPTOCOMPARE_API = "https://min-api.cryptocompare.com/data/v2/histoday"
API_SYMBOL = "BTC"
CURRENCY = "USD"
LIMIT = 1  # Fetch data for the last 1 day

class Command(BaseCommand):
    help = "Processes daily predictions and awards points"

    def handle(self, *args, **kwargs):
        self.stdout.write("Fetching Bitcoin price data...")
        price_data = self.get_price_data()

        if not price_data:
            self.stderr.write("Failed to fetch price data. Exiting.")
            return

        self.stdout.write("Processing predictions...")
        self.process_predictions(price_data)
        self.stdout.write("Daily predictions processing complete.")

    def get_price_data(self):
        """
        Fetch the latest Bitcoin price data from CryptoCompare API.
        """
        try:
            response = requests.get(
                CRYPTOCOMPARE_API,
                params={"fsym": API_SYMBOL, "tsym": CURRENCY, "limit": LIMIT},
            )
            response.raise_for_status()
            data = response.json()
            if data.get("Response") == "Success":
                return data["Data"]["Data"]  # List of daily data points
            else:
                self.stderr.write(f"API error: {data.get('Message', 'Unknown error')}")
                return None
        except requests.RequestException as e:
            self.stderr.write(f"Error fetching price data: {e}")
            return None


    def process_predictions(self, price_data):
        """
        Process user predictions and calculate points based on the fetched price data.
        """
        for day_data in price_data:
            # Extract relevant data
            date = datetime.utcfromtimestamp(day_data["time"]).date()
            close_price = day_data["close"]
            print(date)

            # Fetch predictions for this date
            predictions = Prediction.objects.filter(prediction_date=date, locked=False)
            if not predictions.exists():
                self.stdout.write(f"No predictions for {date}. Skipping.")
                continue

            self.stdout.write(f"Processing predictions for {date}...")

            for prediction in predictions:
                days_since_guess = (date - prediction.created_at.date()).days
                time_bonus = 1 + (days_since_guess * TIME_MULTIPLIER)

                # Calculate points
                price_difference = abs(float(prediction.predicted_price) - close_price)
                if price_difference == 0:
                    points = EXACT_MATCH_POINTS
                elif price_difference <= CLOSE_RANGE:
                    points = CLOSE_MATCH_POINTS
                elif price_difference <= FAR_RANGE:
                    points = FAR_MATCH_POINTS
                else:
                    points = 0

                # Apply time bonus
                points = int(points * time_bonus)

                # Update user's profile points
                try:
                    with transaction.atomic():
                        user_profile = prediction.user.userprofile
                        user_profile.points += points
                        user_profile.save()

                        self.stdout.write(
                            f"User: {prediction.user.username}, "
                            f"Date: {prediction.prediction_date}, "
                            f"Guess: {prediction.predicted_price}, "
                            f"Actual: {close_price}, "
                            f"Points: {points}, "
                            f"Total Points: {user_profile.points}"
                        )
                except UserProfile.DoesNotExist:
                    self.stderr.write(f"UserProfile not found for user {prediction.user.username}. Skipping.")

            # Mark predictions as locked after processing
            predictions.update(locked=True)

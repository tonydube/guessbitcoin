import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { get_predictions } from "../endpoints/api";

interface Prediction {
  date: string;
  price: string;
  user: string;
}

const Predictions = () => {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [dates, setDates] = useState<string[]>([]);
  const theme = useTheme();

  useEffect(() => {
    const fetchPredictions = async () => {
      try {
        const data: Prediction[] = await get_predictions();

        // Generate dates starting from yesterday
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);

        const rangeEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0); // Last day of the current month

        const allDates: string[] = [];
        for (
          let date = new Date(yesterday);
          date <= rangeEnd;
          date.setDate(date.getDate() + 1)
        ) {
          allDates.push(new Date(date).toLocaleDateString());
        }

        setDates(allDates);
        setPredictions(data);
      } catch (error) {
        console.error("Error fetching predictions:", error);
      }
    };
    fetchPredictions();
  }, []);

  // Group predictions by date
  const groupedPredictions = predictions.reduce<Record<string, Prediction[]>>(
    (acc, pred) => {
      const date = new Date(pred.date).toLocaleDateString(); // Normalize date for grouping
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(pred);
      return acc;
    },
    {}
  );

  return (
    <Box sx={{ width: "100%", margin: "auto" }}>
      {dates.map((date) => {
        const dayPredictions = groupedPredictions[date] || [];
        const minPrice = dayPredictions.length
          ? Math.min(...dayPredictions.map((pred) => parseFloat(pred.price)))
          : null;
        const maxPrice = dayPredictions.length
          ? Math.max(...dayPredictions.map((pred) => parseFloat(pred.price)))
          : null;
        const uniqueUsers = [
          ...new Set(dayPredictions.map((pred) => pred.user)),
        ];
        const dateObj = new Date(date);
        const dayOfWeek = dateObj.toLocaleDateString("en-US", {
          weekday: "short",
        });
        const dayNumber = dateObj.getDate();

        return (
          <Card
            key={date}
            sx={{
              marginBottom: 3,
              borderRadius: 2,
              border: `1px solid ${theme.palette.divider}`,
              boxShadow: 0,
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* Date */}
                <Box>
                  <Typography variant="body1">{dayOfWeek}</Typography>
                  <Typography variant="h4">{dayNumber}</Typography>
                </Box>

                {/* Range of guesses */}
                <Typography variant="h6" sx={{ textAlign: "right" }}>
                  {minPrice !== null && maxPrice !== null
                    ? `$${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}`
                    : "No guesses yet"}
                </Typography>
                <Box>
                  {uniqueUsers.length > 0 ? (
                    uniqueUsers.map((user, index) => (
                      <Avatar
                        key={index}
                        sx={{
                          display: "inline-flex",
                          marginRight: 1,
                          width: 40,
                          height: 40,
                          fontSize: "2rem",
                        }}
                      >
                        {user[0].toUpperCase()}
                      </Avatar>
                    ))
                  ) : (
                    <Typography>No participants</Typography>
                  )}
                </Box>

                {/* Actions */}
                <Box>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ marginRight: 1 }}
                    onClick={() => alert(`Make a guess for ${date}`)}
                  >
                    Guess
                  </Button>
                  {dayPredictions.length > 0 && (
                    <Button
                      variant="outlined"
                      color="secondary"
                      size="small"
                      onClick={() => alert(`Edit your guess for ${date}`)}
                    >
                      Edit
                    </Button>
                  )}
                </Box>
              </Box>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};

export default Predictions;

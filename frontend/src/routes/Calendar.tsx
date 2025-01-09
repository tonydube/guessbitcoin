import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { get_predictions } from "../endpoints/api";

const PredictionsTable = () => {
  const [predictions, setPredictions] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const fetchPredictions = async () => {
      try {
        const data = await get_predictions();

        // Generate dates starting from yesterday
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);

        const rangeEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0); // Last day of the current month

        const allDates = [];
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
  const groupedPredictions = predictions.reduce((acc, pred) => {
    const date = new Date(pred.date).toLocaleDateString(); // Normalize date for grouping
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(pred);
    return acc;
  }, {});

  return (
    <TableContainer
      component={Paper}
      sx={{ width: "100%", margin: "auto", boxShadow: 2 }}
    >
      <Typography variant="h4" sx={{ margin: 2, textAlign: "center" }}>
        Predictions
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "20%" }}>Date</TableCell>
            <TableCell align="center">Range of Guesses</TableCell>
            <TableCell align="center">Participants</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dates.map((date) => {
            const dayPredictions = groupedPredictions[date] || [];
            const minPrice = dayPredictions.length
              ? Math.min(
                  ...dayPredictions.map((pred) => parseFloat(pred.price))
                )
              : null;
            const maxPrice = dayPredictions.length
              ? Math.max(
                  ...dayPredictions.map((pred) => parseFloat(pred.price))
                )
              : null;
            const uniqueUsers = [
              ...new Set(dayPredictions.map((pred) => pred.user)),
            ];
            const dateObj = new Date(date);
            const dayOfWeek = dateObj
              .toLocaleDateString("en-US", { weekday: "short" })
              .toUpperCase();
            const dayNumber = dateObj.getDate();

            return (
              <TableRow key={date}>
                {/* Date */}
                <TableCell
                  align="center"
                  sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                >
                  <Typography variant="h6" component="div">
                    {dayOfWeek}
                  </Typography>
                  <Typography variant="h4" component="div">
                    {dayNumber}
                  </Typography>
                </TableCell>

                {/* Range of guesses */}
                <TableCell align="center" sx={{ fontSize: "1rem" }}>
                  {minPrice !== null && maxPrice !== null
                    ? `$${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}`
                    : "No guesses yet"}
                </TableCell>

                {/* User avatars */}
                <TableCell align="center">
                  {uniqueUsers.length > 0
                    ? uniqueUsers.map((user, index) => (
                        <Avatar
                          key={index}
                          sx={{
                            display: "inline-block",
                            marginRight: 0.5,
                            width: 40,
                            height: 40,
                            fontSize: "1rem",
                          }}
                        >
                          {user[0].toUpperCase()}
                        </Avatar>
                      ))
                    : "No participants"}
                </TableCell>

                {/* Actions */}
                <TableCell align="center">
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
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PredictionsTable;

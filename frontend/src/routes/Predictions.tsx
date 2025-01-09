import { useState } from "react";
import { prediction_submit } from "../endpoints/api";
import { useAlert } from "../contexts/useAlerts";
import { Box, Button, Typography } from "@mui/material";

const Predictions = () => {
  const [guessDate, setGuessDate] = useState("");
  const [predictedPrice, setPredictedPrice] = useState("");
  const { showAlert } = useAlert();

  const handleSubmitPrediction = async (e: React.FormEvent) => {
    e.preventDefault();
    const message = await prediction_submit(guessDate, predictedPrice);
    const isSuccess = message === "Prediction submitted successfully!";
    showAlert(message, isSuccess ? "success" : "error");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmitPrediction}
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 400,
        margin: "auto",
        padding: 2,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Make a Prediction
      </Typography>
      <input
        type="date"
        value={guessDate}
        onChange={(e) => setGuessDate(e.target.value)}
      />
      <input
        type="number"
        step="0.01"
        placeholder="Predicted Price"
        value={predictedPrice}
        onChange={(e) => setPredictedPrice(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Predictions;

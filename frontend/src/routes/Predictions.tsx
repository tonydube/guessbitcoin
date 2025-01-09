import { useState } from "react";
import { prediction_submit } from "../endpoints/api";
import { useAlert } from "../contexts/useAlerts";
import { Box, Button, Typography, TextField } from "@mui/material";

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

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Regular expression to allow only up to two decimal places
    const validValue = value.match(/^\d+(\.\d{0,2})?$/);

    if (validValue) {
      setPredictedPrice(value);
    }
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
      <TextField
        label="Prediction Date"
        type="date"
        value={guessDate}
        onChange={(e) => setGuessDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Predicted Price"
        type="number"
        value={predictedPrice}
        onChange={handlePriceChange}
        sx={{ marginBottom: 2 }}
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

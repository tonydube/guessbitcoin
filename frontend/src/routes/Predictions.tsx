import { useState } from "react";
import { prediction_submit } from "../endpoints/api";

const Predictions = () => {
  const [guessDate, setGuessDate] = useState("");
  const [predictedPrice, setPredictedPrice] = useState("");
  const [message, setMessage] = useState("");

  const submitPrediction = async () => {
    prediction_submit(guessDate, predictedPrice);
  };

  return (
    <div>
      <h2>Make a Prediction</h2>
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
      <button onClick={submitPrediction}>Submit</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Predictions;

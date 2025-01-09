import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "../contexts/useAuth";
import { AlertProvider } from "../contexts/useAlerts";

import Login from "../routes/Login";
import Menu from "../routes/Menu";
import PrivateRoute from "../components/PrivateRoute";
import Register from "../routes/Register";
import Predictions from "../routes/Predictions";
import Leaderboard from "../routes/Leaderboard";
import PredictionsCalendar from "../routes/Calendar";

function App() {
  return (
    <Router>
      <AlertProvider>
        <AuthProvider>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Menu />
                </PrivateRoute>
              }
            />
            <Route
              path="/predictions"
              element={
                <PrivateRoute>
                  <Predictions />
                </PrivateRoute>
              }
            />
            <Route
              path="/calendar"
              element={
                <PrivateRoute>
                  <PredictionsCalendar />
                </PrivateRoute>
              }
            />
            <Route
              path="/leaderboard"
              element={
                <PrivateRoute>
                  <Leaderboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </AlertProvider>
    </Router>
  );
}

export default App;

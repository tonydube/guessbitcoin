import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "../contexts/useAuth";
import { AlertProvider } from "../contexts/useAlerts";

import Login from "../routes/Login";
import Menu from "../routes/Menu";
import PrivateRoute from "../components/PrivateRoute";
import Register from "../routes/Register";
import Leaderboard from "../routes/Leaderboard";

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

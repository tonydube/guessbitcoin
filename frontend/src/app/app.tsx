import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "../contexts/useAuth";
import { AlertProvider } from "../contexts/useAlerts";

import Login from "../routes/Login";
import Menu from "../routes/Menu";
import PrivateRoute from "../components/PrivateRoute";
import Register from "../routes/Register";

function App() {
  return (
    <Router>
      <AlertProvider>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Menu />
                </PrivateRoute>
              }
            />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthProvider>
      </AlertProvider>
    </Router>
  );
}

export default App;

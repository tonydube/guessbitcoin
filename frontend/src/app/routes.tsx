import { Routes, Route } from "react-router-dom";

import Login from "../routes/Login";
import Logout from "../routes/Logout";
import Menu from "../routes/Menu";
import PrivateRoute from "../components/PrivateRoute";
import Register from "../routes/Register";
import Predictions from "../routes/Predictions";
import Leaderboard from "../routes/Leaderboard";
import PredictionsCalendar from "../routes/Calendar";
import MainLayout from "../components/MainLayout";

const routes = () => (
  <Routes>
    {/* Auth routes */}
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/logout" element={<Logout />} />

    {/* Main app routes wrapped in layout */}
    <Route
      path="/"
      element={
        <PrivateRoute>
          <MainLayout />
        </PrivateRoute>
      }
    >
      <Route index element={<Menu />} />
      <Route path="predictions" element={<Predictions />} />
      <Route path="calendar" element={<PredictionsCalendar />} />
      <Route path="leaderboard" element={<Leaderboard />} />
    </Route>
  </Routes>
);

export default routes;

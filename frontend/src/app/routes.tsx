import { Routes, Route } from "react-router-dom";

import Login from "../routes/Login";
import Logout from "../routes/Logout";
import Register from "../routes/Register";

import PrivateRoute from "../components/PrivateRoute";
import MainLayout from "../components/MainLayout";

import Dashboard from "../routes/Dashboard";
import Predictions from "../routes/Predictions";
import Prediction from "../routes/Prediction";
import Leaderboard from "../routes/Leaderboard";
import Settings from "../routes/Settings";
import Help from "../routes/Help";
import Account from "../routes/Account";

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
      <Route index element={<Dashboard />} />
      <Route path="predictions" element={<Predictions />} />
      <Route path="prediction" element={<Prediction />} />
      <Route path="leaderboard" element={<Leaderboard />} />
      <Route path="account" element={<Account />} />
      <Route path="settings" element={<Settings />} />
      <Route path="help" element={<Help />} />
    </Route>
  </Routes>
);

export default routes;

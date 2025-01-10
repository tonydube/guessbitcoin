import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "../contexts/useAuth";
import { AlertProvider } from "../contexts/useAlerts";

import AppRoutes from "./routes";

function App() {
  return (
    <Router>
      <AlertProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </AlertProvider>
    </Router>
  );
}

export default App;

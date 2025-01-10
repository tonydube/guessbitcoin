import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "../contexts/useAuth";
import { AlertProvider } from "../contexts/useAlerts";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../theme";

import AppRoutes from "./routes";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AlertProvider>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </AlertProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;

import { useState } from "react";
import { useAuth } from "../contexts/useAuth";
import { useAlert } from "../contexts/useAlerts";
import { TextField, Button, Box, Typography, Link } from "@mui/material";
import predictionIllustration from "../assets/prediction.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { showAlert } = useAlert();
  const { login_user } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login_user(username, password);
    if (success) {
      showAlert("Login successful!", "success");
    } else {
      showAlert("Login failed. Please check your credentials.", "error");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f6f8f7",
        flexDirection: { xs: "column", md: "row" }, // Stack vertically on mobile, horizontally on desktop
      }}
    >
      {/* Right section (Sign in form) */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: 3, md: 4 },
          backgroundColor: "white",
          order: { xs: 1, md: 0 }, // Place form at the top on mobile
        }}
      >
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{
            width: "100%",
            maxWidth: 360,
            px: 2,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Sign in to GuessBitcoin
          </Typography>

          <TextField
            label="Username or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <TextField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ marginBottom: 2 }}
          >
            <Typography variant="caption">Forgot password?</Typography>
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
            sx={{
              marginBottom: 2,
              backgroundColor: "#2c846d",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#1a5a49",
              },
            }}
          >
            Sign in
          </Button>

          <Typography align="center">
            Are you new?{" "}
            <Link href="/register" underline="hover">
              Create an Account
            </Link>
          </Typography>
        </Box>
      </Box>

      {/* Left section (Illustration) */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#eaf4ec",
          padding: { xs: 3, md: 0 },
          textAlign: "center",
          order: { xs: 2, md: 1 }, // Place illustration below the form on mobile
        }}
      >
        <Box sx={{ maxWidth: 400, px: 2 }}>
          <img
            src={predictionIllustration}
            alt="Illustration"
            style={{ width: "100%", marginBottom: "1rem" }}
          />
          {/* Hide text below the image on mobile */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Typography variant="h4" gutterBottom>
              Predict Bitcoin's Future
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Guess Bitcoin's closing price, compete with others, and earn
              points for accurate predictions!
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;

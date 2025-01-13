import { useState } from "react";
import { useAuth } from "../contexts/useAuth";
import { TextField, Button, Box, Typography, Link } from "@mui/material";
import predictionIllustration from "../assets/prediction.svg";

const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const { register_user } = useAuth();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    register_user(username, email, password, confirmPassword);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f6f8f7",
      }}
    >
      {/* Left section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#eaf4ec",
        }}
      >
        <Box textAlign="center" sx={{ maxWidth: 400, px: 2 }}>
          <img
            src={predictionIllustration}
            alt="Illustration"
            style={{ width: "100%", marginBottom: "1rem" }}
          />
          <Typography variant="h4" gutterBottom>
            Join GuessBitcoin
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Register to predict Bitcoin's future, compete with others, and earn
            rewards for accurate predictions!
          </Typography>
        </Box>
      </Box>

      {/* Right section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
          backgroundColor: "white",
        }}
      >
        <Box
          component="form"
          onSubmit={handleRegister}
          sx={{
            width: "100%",
            maxWidth: 360,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Create Your Account
          </Typography>

          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />

          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
            required
            type="email"
          />

          <TextField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
            required
            type="password"
          />

          <TextField
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
            required
            type="password"
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
            sx={{
              marginBottom: 2,
              marginTop: 2,
              backgroundColor: "#2c846d",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#1a5a49",
              },
            }}
          >
            Register
          </Button>

          <Typography align="center">
            Already have an account?{" "}
            <Link href="/login" underline="hover">
              Sign in
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;

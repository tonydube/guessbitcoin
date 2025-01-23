import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Avatar,
  IconButton,
} from "@mui/material";
import { useAuth } from "../contexts/useAuth";
import { CameraAlt } from "@mui/icons-material";

const Account = () => {
  const { user, isAuthenticated } = useAuth();
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [points, setPoints] = useState(user?.points || 0);
  const [avatarUrl, setAvatarUrl] = useState(user?.avatar_url || "");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // Logic to save updated information, e.g., update username, email, avatar, etc.
    console.log("Saved: ", { username, email, avatarUrl, points });
    setIsEditing(false);
  };

  const handleAvatarChange = () => {
    // Handle avatar change logic, like opening a file picker or uploading an image
    console.log("Change Avatar");
    setPoints(0);
    setAvatarUrl("");
  };

  if (!isAuthenticated) {
    return (
      <Typography variant="h6" color="error">
        Please log in to view your account.
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: 600,
        padding: 3,
      }}
    >
      <Grid container spacing={3}>
        {/* Avatar Section */}
        <Grid item xs={12} sx={{ display: "flex" }}>
          <Box sx={{ position: "relative", display: "inline-block" }}>
            <Avatar
              alt={user?.username}
              src={avatarUrl}
              sx={{ width: 100, height: 100 }}
            />
            <IconButton
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                bgcolor: "primary.main",
              }}
              onClick={handleAvatarChange}
            >
              <CameraAlt sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Grid>

        {/* Username Field */}
        <Grid item xs={12}>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            disabled={!isEditing}
          />
        </Grid>

        {/* Email Field */}
        <Grid item xs={12}>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            disabled={!isEditing}
          />
        </Grid>

        {/* Points Section */}
        <Grid item xs={12}>
          <Typography variant="h6" color="text.secondary">
            Points: {points}
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", gap: 2, marginTop: 3 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Cancel" : "Edit"}
        </Button>
        {isEditing && (
          <Button variant="contained" color="secondary" onClick={handleSave}>
            Save
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Account;

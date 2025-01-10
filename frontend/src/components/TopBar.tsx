import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  IconButton,
  Tooltip,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShareIcon from "@mui/icons-material/Share";
import { useTheme } from "@mui/material/styles";

const TopBar: React.FC = () => {
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        boxShadow: "none",
        borderLeft: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", paddingX: 2 }}>
        <Typography variant="h5" component="div" sx={{ fontWeight: "light" }}>
          Home
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Tooltip title="Share">
            <IconButton color="inherit">
              <ShareIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Notifications">
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
          </Tooltip>

          {/* Avatar and User Info */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar>U</Avatar>
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="body1" fontWeight="bold">
                Username
              </Typography>
              <Typography variant="caption" color="text.secondary">
                username@gmail.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;

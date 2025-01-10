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
import { useAuth } from "../contexts/useAuth";
import { useLocation } from "react-router-dom";

const TopBar: React.FC = () => {
  const theme = useTheme();
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  const pageName =
    location.pathname.split("/").filter(Boolean).pop()?.replace(/-/g, " ") ||
    "Home";

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
          {pageName.charAt(0).toUpperCase() + pageName.slice(1)}
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
            <Avatar>{user ? user.username[0] : "U"}</Avatar>
            <Box sx={{ textAlign: "left" }}>
              {isAuthenticated ? (
                <>
                  <Typography variant="body1" fontWeight="bold">
                    {user?.username}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {user?.email}
                  </Typography>
                </>
              ) : (
                <Typography variant="body1">Not logged in</Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;

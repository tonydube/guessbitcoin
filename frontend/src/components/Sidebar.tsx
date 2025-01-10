import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListSubheader,
  Typography,
  useTheme,
} from "@mui/material";
import { lighten } from "@mui/system";
import { Link as RouterLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../assets/gb.svg";

const Sidebar = () => {
  const theme = useTheme();
  return (
    <Box
      component="nav"
      sx={{
        width: 175,
        borderRight: `1px solid ${theme.palette.divider}`,
        height: "100vh",
        overflowY: "auto",
        backgroundColor: lighten(theme.palette.divider, 0.9),
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Logo Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 32,
          borderBottom: `1px solid ${theme.palette.divider}`,
          padding: 2,
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            maxHeight: "80%",
            maxWidth: "80%",
            objectFit: "contain",
            paddingRight: 8,
          }}
        />
        <Typography variant="body1" sx={{ fontWeight: "light" }}>
          guessbitcoin
        </Typography>
      </Box>

      {/* Main Menu Section */}
      <List
        subheader={
          <ListSubheader sx={{ backgroundColor: "unset", fontSize: "0.75rem" }}>
            MAIN MENU
          </ListSubheader>
        }
        sx={{ flexGrow: 1 }}
      >
        <ListItem
          component={RouterLink}
          to="/"
          sx={{
            "&:hover": {
              backgroundColor: "#fff",
            },
            textDecoration: "none",
            color: "inherit",
            "&:visited": {
              color: "inherit",
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                sx={{ fontWeight: 300, "&:hover": { fontWeight: 500 } }}
              >
                Home
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          component={RouterLink}
          to="/predictions"
          sx={{
            "&:hover": {
              backgroundColor: "#fff",
            },
            textDecoration: "none",
            color: "inherit",
            "&:visited": {
              color: "inherit",
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <CalendarTodayIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                sx={{ fontWeight: 300, "&:hover": { fontWeight: 500 } }}
              >
                Predictions
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          component={RouterLink}
          to="/prediction"
          sx={{
            "&:hover": {
              backgroundColor: "#fff",
            },
            textDecoration: "none",
            color: "inherit",
            "&:visited": {
              color: "inherit",
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <PsychologyAltIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                sx={{ fontWeight: 300, "&:hover": { fontWeight: 500 } }}
              >
                Create New
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          component={RouterLink}
          to="/leaderboard"
          sx={{
            "&:hover": {
              backgroundColor: "#fff",
            },
            textDecoration: "none",
            color: "inherit",
            "&:visited": {
              color: "inherit",
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <LeaderboardIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                sx={{ fontWeight: 300, "&:hover": { fontWeight: 500 } }}
              >
                Leaderboard
              </Typography>
            }
          />
        </ListItem>
      </List>

      {/* Others Section */}
      <List
        subheader={
          <ListSubheader sx={{ backgroundColor: "unset", fontSize: "0.75rem" }}>
            OTHER
          </ListSubheader>
        }
      >
        <ListItem
          component={RouterLink}
          to="/settings"
          sx={{
            "&:hover": {
              backgroundColor: "#fff",
            },
            textDecoration: "none",
            color: "inherit",
            "&:visited": {
              color: "inherit",
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                sx={{ fontWeight: 300, "&:hover": { fontWeight: 500 } }}
              >
                Settings
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          component={RouterLink}
          to="/help"
          sx={{
            "&:hover": {
              backgroundColor: "#fff",
            },
            textDecoration: "none",
            color: "inherit",
            "&:visited": {
              color: "inherit",
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                sx={{ fontWeight: 300, "&:hover": { fontWeight: 500 } }}
              >
                Help
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          component={RouterLink}
          to="/logout"
          sx={{
            "&:hover": {
              backgroundColor: "#fff",
            },
            textDecoration: "none",
            color: "inherit",
            "&:visited": {
              color: "inherit",
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: "40px" }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                sx={{ fontWeight: 300, "&:hover": { fontWeight: 500 } }}
              >
                Logout
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;

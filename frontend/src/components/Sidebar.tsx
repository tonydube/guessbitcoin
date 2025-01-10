import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListSubheader,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../assets/gb.svg";

const Sidebar = () => {
  return (
    <Box
      component="nav"
      sx={{
        width: 200,
        borderRight: "1px solid #ddd",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      {/* Logo Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 32,
          borderBottom: "1px solid #ddd",
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
        <Typography variant="body1">guessbitcoin</Typography>
      </Box>

      {/* Main Menu Section */}
      <List subheader={<ListSubheader>Main Menu</ListSubheader>}>
        <ListItem
          component={RouterLink}
          to="/"
          sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          component={RouterLink}
          to="/predictions"
          sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}
        >
          <ListItemIcon>
            <TrendingUpIcon />
          </ListItemIcon>
          <ListItemText primary="Predictions" />
        </ListItem>
        <ListItem
          component={RouterLink}
          to="/calendar"
          sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}
        >
          <ListItemIcon>
            <CalendarTodayIcon />
          </ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItem>
        <ListItem
          component={RouterLink}
          to="/leaderboard"
          sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}
        >
          <ListItemIcon>
            <LeaderboardIcon />
          </ListItemIcon>
          <ListItemText primary="Leaderboard" />
        </ListItem>
      </List>

      {/* Others Section */}
      <List subheader={<ListSubheader>Others</ListSubheader>}>
        <ListItem
          component={RouterLink}
          to="/settings"
          sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem
          component={RouterLink}
          to="/help"
          sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}
        >
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="Help" />
        </ListItem>
        <ListItem
          component={RouterLink}
          to="/logout"
          sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;

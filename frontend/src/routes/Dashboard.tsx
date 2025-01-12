import { Box, Typography } from "@mui/material";
import { useAuth } from "../contexts/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <Box
      sx={{
        maxWidth: 600,
        padding: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome back, {user ? user.username : ""}!
      </Typography>
    </Box>
  );
};

export default Dashboard;

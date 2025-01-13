import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const MainLayout = () => {
  return (
    <Box display="flex" maxHeight="100vh" overflow="hidden">
      <Box
        component="nav"
        sx={{
          width: 175,
          flexShrink: 0,
        }}
      >
        <Sidebar />
      </Box>

      <Box display="flex" flexDirection="column" flex={1}>
        <TopBar />

        <Box
          component="main"
          flex={1}
          p={2}
          sx={{
            overflowX: "hidden",
            overflowY: "auto",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;

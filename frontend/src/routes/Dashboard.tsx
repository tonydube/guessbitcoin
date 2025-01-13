import { Box, Button, Grid2, Paper, Typography, useTheme } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DataGrid } from "@mui/x-data-grid";
import LastSevenDays from "../components/dashboard/LastSevenDays";

const Dashboard = () => {
  const theme = useTheme();

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "guess", headerName: "Guess", width: 150 },
    { field: "accuracy", headerName: "Accuracy (%)", width: 130 },
    { field: "timestamp", headerName: "Timestamp", width: 200 },
  ];

  const recentGuessRows = [
    {
      id: 1,
      name: "John Doe",
      guess: "42",
      accuracy: 95.4,
      timestamp: "2025-01-11 14:35:22",
    },
    {
      id: 2,
      name: "Jane Smith",
      guess: "36",
      accuracy: 88.9,
      timestamp: "2025-01-11 13:22:10",
    },
    {
      id: 3,
      name: "Alice Johnson",
      guess: "50",
      accuracy: 92.7,
      timestamp: "2025-01-10 19:15:03",
    },
    {
      id: 4,
      name: "Bob Brown",
      guess: "47",
      accuracy: 78.2,
      timestamp: "2025-01-10 17:03:45",
    },
    {
      id: 5,
      name: "Charlie Davis",
      guess: "38",
      accuracy: 84.1,
      timestamp: "2025-01-09 20:11:55",
    },
  ];

  return (
    <Box
      sx={{
        padding: 1,
        borderRadius: 2,
      }}
    >
      <Grid2 container spacing={3}>
        <Grid2 size={{ xs: 12, sm: 9, md: 4 }} sx={{ display: "flex" }}>
          <Paper
            elevation={0}
            sx={{
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 2,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                sx={{
                  width: "100%",
                }}
              />
            </LocalizationProvider>
          </Paper>
        </Grid2>
        <Grid2 size={4}>
          <Box
            sx={{
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 2,
              p: 0,
            }}
          >
            <Paper elevation={0} sx={{ p: 2 }}>
              {/* Header with Title and Details */}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <Typography variant="body2" fontWeight="bold">
                  Pro Version
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Details
                </Typography>
              </Box>

              {/* Description */}
              <Typography variant="body1" mb={2}>
                More with Premium
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Our premium subscription elevates your experience and unlocks
                benefits.
              </Typography>

              {/* Pricing */}
              <Typography variant="h5" fontWeight="bold" mb={2}>
                $0.99 / month
              </Typography>

              {/* Learn More Button */}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  borderRadius: 2,
                }}
              >
                Learn More
              </Button>
            </Paper>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 12, md: 8 }} sx={{ display: "flex" }}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 2,
              width: "100%",
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Box
              sx={{
                width: "100%",
              }}
            >
              {/* Title */}
              <Typography variant="h6" gutterBottom sx={{ px: 1, pt: 1 }}>
                Recent Guesses
              </Typography>
              {/* DataGrid */}
              <DataGrid
                rows={recentGuessRows}
                columns={columns}
                initialState={{
                  columns: {
                    columnVisibilityModel: {
                      id: false,
                    },
                  },
                }}
                autoHeight
                disableRowSelectionOnClick
                hideFooter
              />
            </Box>
          </Paper>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 12, md: 8 }} sx={{ display: "flex" }}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 2,
              width: "100%",
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Box
              sx={{
                width: "100%",
              }}
            >
              <LastSevenDays />
            </Box>
          </Paper>
        </Grid2>
        <Grid2 size={4}>
          <Box
            sx={{
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 2,
              p: 0,
            }}
          >
            <Paper elevation={0} sx={{ p: 2 }}>
              {/* Header with Title and Details */}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <Typography variant="body2" fontWeight="bold">
                  Pro Version
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Details
                </Typography>
              </Box>

              {/* Description */}
              <Typography variant="body1" mb={2}>
                More with Premium
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Our premium subscription elevates your experience and unlocks
                benefits.
              </Typography>

              {/* Pricing */}
              <Typography variant="h5" fontWeight="bold" mb={2}>
                $0.99 / month
              </Typography>

              {/* Learn More Button */}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  borderRadius: 2,
                }}
              >
                Learn More
              </Button>
            </Paper>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Dashboard;

import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";

interface LeaderboardEntry {
  id: number;
  rank: number;
  username: string;
  score: number;
}

const leaderboardData: LeaderboardEntry[] = [
  { id: 1, rank: 1, username: "Alice", score: 1500 },
  { id: 2, rank: 2, username: "Bob", score: 1200 },
  { id: 3, rank: 3, username: "Charlie", score: 900 },
  { id: 4, rank: 4, username: "Diana", score: 800 },
  { id: 5, rank: 5, username: "Eve", score: 700 },
];

const columns: GridColDef[] = [
  { field: "rank", headerName: "Rank", width: 100 },
  { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
  { field: "score", headerName: "Score", width: 120 },
];

const Leaderboard: React.FC = () => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Typography variant="h4" gutterBottom>
        Leaderboard
      </Typography>
      <DataGrid
        rows={leaderboardData}
        columns={columns}
        pageSizeOptions={[5, 10, 25, 100]}
      />
    </Box>
  );
};

export default Leaderboard;

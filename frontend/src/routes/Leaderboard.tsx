import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { get_leaderboard } from "../endpoints/api";

interface LeaderboardEntry {
  id: number;
  rank: number;
  user: string;
  points: number;
}

const columns: GridColDef[] = [
  { field: "rank", headerName: "Rank", width: 100 },
  { field: "user", headerName: "User", flex: 1, minWidth: 150 },
  { field: "points", headerName: "Points", width: 120 },
];

const Leaderboard: React.FC = () => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>(
    []
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data = await get_leaderboard();
        const transformedData = data.map(
          (entry: { user: string; points: number }, index: number) => ({
            id: index + 1,
            rank: index + 1,
            user: entry.user,
            points: entry.points,
          })
        );
        setLeaderboardData(transformedData);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, []);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={leaderboardData}
        columns={columns}
        loading={loading}
        pageSizeOptions={[5, 10, 25, 100]}
      />
    </Box>
  );
};

export default Leaderboard;

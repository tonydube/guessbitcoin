import { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts";
import { Box, Typography, CircularProgress } from "@mui/material";
import { get_last_seven_days_predictions } from "../../endpoints/api";

interface ChartData {
  labels: string[];
  values: number[];
}

const LastSevenDays = () => {
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLastSevenDaysChartData = async () => {
      try {
        const data = await get_last_seven_days_predictions();
        setChartData(data);
      } catch (error) {
        console.error("Error fetching last seven days chart data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLastSevenDaysChartData();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!chartData) {
    return <Typography variant="h6">Failed to load chart data.</Typography>;
  }

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Predictions Made (Last 7 Days)
      </Typography>
      <LineChart
        xAxis={[
          {
            data: chartData.labels,
            scaleType: "band", // categorical data (dates)
          },
        ]}
        series={[
          {
            data: chartData.values,
            label: "Predictions",
            color: "blue", // Optional: set the color of the line
          },
        ]}
        height={300}
        width={800}
      />
    </Box>
  );
};

export default LastSevenDays;

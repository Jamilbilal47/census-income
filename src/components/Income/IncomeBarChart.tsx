import { Box, Typography } from "@mui/material";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface IncomeBarChartProps {
  userIncome: number;
  regionalIncome: number;
}

export default function IncomeBarChart({
  userIncome,
  regionalIncome,
}: IncomeBarChartProps) {
  // Data for the bar chart
  const data = [
    {
      name: "Income",
      YourIncome: userIncome,
      RegionalAverage: regionalIncome,
    },
  ];

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Income Comparison Chart
      </Typography>
      <Box sx={{ width: "100%", height: 300, mt: 2 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="YourIncome" fill="#8884d8" name="Your Income" />
            <Bar
              dataKey="RegionalAverage"
              fill="#82ca9d"
              name="Regional Average"
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}

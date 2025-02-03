import { Box, Typography } from "@mui/material";

interface IncomeComparisonProps {
  userIncome: number;
  regionalIncome: number;
}

export default function IncomeComparison({
  userIncome,
  regionalIncome,
}: IncomeComparisonProps) {
  const calculatePercentage = (userIncome: number, regionalIncome: number) => {
    if (regionalIncome === 0) return 0; // Avoid division by zero
    return ((userIncome / regionalIncome) * 100).toFixed(2);
  };

  const percentage = calculatePercentage(userIncome, regionalIncome);

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Income Comparison
      </Typography>
      <Typography variant="body1" component="div">
        Your income is <strong>{percentage}%</strong> of the regional average.
      </Typography>
    </Box>
  );
}

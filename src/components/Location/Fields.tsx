import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";

interface LocationInputProps {
  onLocationSubmit: (location: string, userIncome: Number) => void;
  locationProps: string;
}

export default function Fields({
  onLocationSubmit,
  locationProps = "",
}: LocationInputProps) {
  const [location, setLocation] = useState("");
  const [userIncome, setUserIncome] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const isValidLocation = (location: string) => location.trim() !== "";
  const isIncomeValid = (userIncome: number | null) => userIncome !== null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidLocation(location) && isIncomeValid(userIncome)) {
      onLocationSubmit(location, userIncome);
      setError(null);
    } else {
      setError("Please enter a valid state and Income.");
    }
  };

  useEffect(() => {
    setLocation(locationProps);
  }, [locationProps]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        label="Enter your state"
        variant="outlined"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        fullWidth
        error={!!error}
        helperText={error}
      />
      <TextField
        label="Enter your Income"
        variant="outlined"
        value={userIncome}
        onChange={(e) => setUserIncome(Number(e.target.value))}
        fullWidth
        error={!!error}
        helperText={error}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!isValidLocation(location) || !isIncomeValid(userIncome)}
        sx={{ alignSelf: "flex-start" }}
      >
        Submit
      </Button>
    </Box>
  );
}

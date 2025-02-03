// pages/index.tsx
import { Box, Container, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { useState } from "react";
import IncomeBarChart from "../components/Income/IncomeBarChart";
import IncomeComparison from "../components/Income/IncomeComparison";
import ErrorMessage from "../components/UI/ErrorMessage";
import Loader from "../components/UI/Loader";
import { fetchIncomeData } from "../services/censusAPI";

// Lazy-load client-only components
const Fields = dynamic(() => import("../components/Location/Fields"), {
  ssr: false,
});

const LocationAutoDetect = dynamic(
  () => import("../components/Location/LocationAutoDetect"),
  { ssr: false }
);

export default function HomePage() {
  const [userIncome, setUserIncome] = useState<number | null>(null);
  const [location, setLocation] = useState<string>("");
  const [regionalIncome, setRegionalIncome] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLocationSubmit = async (location: string, income: number) => {
    setLoading(true);
    setError(null);
    try {
      const regionalIncome = await fetchIncomeData(location);
      setUserIncome(income);
      setRegionalIncome(regionalIncome);
    } catch (err) {
      setError("Failed to fetch income data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Income Comparison Tool
      </Typography>

      {/* Location Input Section */}
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Enter Your Location
        </Typography>
        <Fields
          onLocationSubmit={handleLocationSubmit}
          locationProps={location}
        />
        <Typography variant="body1" align="center" sx={{ my: 2 }}>
          OR
        </Typography>
        <LocationAutoDetect
          onLocationDetected={setLocation}
          onError={setError}
        />
      </Box>

      {loading && <Loader message="Fetching income data..." />}
      {error && <ErrorMessage errorText={error} />}

      {userIncome !== null && regionalIncome !== null && (
        <Box sx={{ mt: 4 }}>
          <IncomeComparison
            userIncome={userIncome}
            regionalIncome={regionalIncome}
          />
          <IncomeBarChart
            userIncome={userIncome}
            regionalIncome={regionalIncome}
          />
        </Box>
      )}
    </Container>
  );
}

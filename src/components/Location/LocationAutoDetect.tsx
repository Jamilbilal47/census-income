import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";

interface LocationAutoDetectProps {
  onLocationDetected: (location: string) => void;
  onError: (error: string) => void;
}

export default function LocationAutoDetect({
  onLocationDetected,
  onError,
}: LocationAutoDetectProps) {
  const [loading, setLoading] = useState(false);
  const isGeolocationSupported = !!navigator.geolocation;

  const reverseGeocode = async (lat: number, lng: number) => {
    const ACCESS_TOKEN = "pk.ef9fd7b541219048ff24b490e9cf3fb5";
    const url = `https://us1.locationiq.com/v1/reverse?lat=${lat}&lon=${lng}&format=json&zoom=5&normalizeaddress=1&key=${ACCESS_TOKEN}`;
    const options = { method: "GET", headers: { accept: "application/json" } };

    let response: any = await fetch(url, options);
    response = await response.json();

    return response?.address?.state || "Unknown location";
  };

  const handleDetectLocation = async () => {
    setLoading(true);
    try {
      if (!navigator.geolocation) {
        onError("Geolocation is not supported by your browser.");
        setLoading(false);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const detectedLocation = await reverseGeocode(latitude, longitude);
          onLocationDetected(detectedLocation);
        },
        (error) => {
          onError(`Failed to detect location: ${error.message}`);
        }
      );
    } catch (err) {
      onError("An unexpected error occurred during location detection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Button
        onClick={handleDetectLocation}
        variant="contained"
        color="success"
        disabled={loading || !isGeolocationSupported}
        startIcon={loading ? <CircularProgress size={20} /> : null}
      >
        {loading ? "Detecting..." : "Auto-Detect Location"}
      </Button>
      {!isGeolocationSupported && (
        <Typography color="error" variant="body2">
          Your browser does not support geolocation.
        </Typography>
      )}
    </Box>
  );
}

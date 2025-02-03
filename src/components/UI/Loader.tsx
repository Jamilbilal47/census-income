import { Box, CircularProgress, Typography } from "@mui/material";

interface LoaderProps {
  message?: string;
}

export default function Loader({ message }: LoaderProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        mt: 4,
      }}
    >
      <CircularProgress />
      {message && <Typography variant="body1">{message}</Typography>}
    </Box>
  );
}

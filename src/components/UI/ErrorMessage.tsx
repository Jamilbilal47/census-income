import { Alert, AlertTitle } from "@mui/material";

interface ErrorMessageProps {
  errorText: string;
}

export default function ErrorMessage({ errorText }: ErrorMessageProps) {
  return (
    <Alert severity="error" sx={{ mt: 2 }}>
      <AlertTitle>Error</AlertTitle>
      {errorText}
    </Alert>
  );
}

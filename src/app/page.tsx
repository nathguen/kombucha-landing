"use client";

import UpperFold from "@/components/UpperFold";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(162, 28, 175)",
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <UpperFold />
    </ThemeProvider>
  );
}

"use client";

import UpperFold from "@/components/UpperFold";
import { theme } from "@/theme";
import { ThemeProvider } from "@mui/material";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <UpperFold />
    </ThemeProvider>
  );
}

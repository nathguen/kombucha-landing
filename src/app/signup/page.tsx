"use client";

import Container from "@/components/Container";
import { theme } from "@/theme";
import { Button, ThemeProvider, Typography } from "@mui/material";
import { amatic } from "../fonts";

export default function SignupPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div className="flex flex-col gap-4 flex-1 justify-center items-center mx-4">
          <h3
            className={`text-center text-6xl lg:text-6xl ${amatic.className} my-6 text-black`}
          >
            Get Notified
          </h3>
          <Typography variant="body1" textAlign="center" color="black">
            Sorry, it looks like Salt Spring Kombucha is not in your area yet.
          </Typography>
          <Typography variant="body1" textAlign="center" color="black">
            Sign up to be notified when Salt Spring Kombucha arrives near you!
          </Typography>

          <div className="max-w-md mx-auto mt-4">
            <Button
              fullWidth
              variant="contained"
              size="large"
              href="https://forms.gle/vXixcKg8n82aQuAw6"
              target="_blank"
            >
              Get Notified
            </Button>
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
}

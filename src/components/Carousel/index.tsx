"use client";

import { amatic } from "@/app/fonts";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface CarouselItem {
  src: string;
  alt: string;
}

const items: CarouselItem[] = [
  {
    src: "/SS_Kombucha_bottles/Blue Algae_duo.png",
    alt: "Blue Algae",
  },
  {
    src: "/SS_Kombucha_bottles/Chaga Chai_duo.png",
    alt: "Chaga Chai",
  },
  {
    src: "/SS_Kombucha_bottles/Elderflower Ginger_duo.png",
    alt: "Elderflower Ginger",
  },
  {
    src: "/SS_Kombucha_bottles/Hibiscus Lemon Balm_duo.png",
    alt: "Hibiscus Lemon Balm",
  },
  {
    src: "/SS_Kombucha_bottles/Lavender Mint_duo.png",
    alt: "Lavender Mint",
  },
  {
    src: "/SS_Kombucha_bottles/Strawberry Mint_duo.png",
    alt: "Strawberry Mint",
  },
  {
    src: "/SS_Kombucha_bottles/Wild Rose_duo.png",
    alt: "Wild Rose",
  },
];
function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = items.length;

  const pageWidth = React.useMemo(() => {
    if (typeof window === "undefined") {
      return 0;
    }

    return window.innerWidth;
  }, []);

  const pageHeight = React.useMemo(() => {
    return window.innerHeight;
  }, []);

  const carouselRatio = 3840 / 1543;

  const isMobile = pageWidth < 768;

  const carouselHeight = React.useMemo(() => {
    if (isMobile) {
      return pageHeight * 0.5;
    }

    return pageHeight / carouselRatio;
  }, [carouselRatio, isMobile, pageHeight]);

  const carouselWidth = React.useMemo(() => {
    if (!carouselHeight || !pageWidth) return 0;

    if (isMobile) {
      return carouselHeight * carouselRatio;
    }

    return pageWidth * carouselRatio;
  }, [carouselRatio, carouselHeight, isMobile, pageWidth]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  if (typeof window === undefined) return null;

  return (
    <div className="w-full my-12">
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {items.map((step, index) => (
          <div key={step.alt}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div className="block w-full overflow-hidden h-full">
                <div>
                  <h3
                    className={`text-center text-4xl lg:text-6xl ${amatic.className}`}
                  >
                    {step.alt}
                  </h3>
                </div>
                <Image
                  width={carouselWidth}
                  height={carouselHeight}
                  className="block w-full"
                  src={step.src}
                  alt={step.alt}
                />
              </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        className="!bg-transparent"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default Carousel;

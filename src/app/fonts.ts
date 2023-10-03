import { Amatic_SC, Roboto } from "next/font/google";

export const roboto = Roboto({
  weight: ["100", "300", "400", "700"],
  display: "swap",
  subsets: ["latin"],
});

export const amatic = Amatic_SC({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

import type { Metadata } from "next";
import "tw-elements/dist/css/tw-elements.min.css";
import { roboto } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salt Spring Island Kombucha",
  description:
    "We are a small family owned and operated business located in beautiful Salt Spring Island, B.C.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="flex w-full h-full flex-col bg-gradient-to-br from-white to-primary-50"
    >
      <body
        className={[roboto.className, "flex", "flex-col", "h-full"].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Wallpoet } from "next/font/google";
import "./globals.css";

const wallpoet = Wallpoet({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-wallpoet",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DeskAway — Leave your desk. Not your work.",
  description:
    "DeskAway runs tasks on your Windows laptop while you're away, and brings every step that can't be undone to your phone first.",
};

export const viewport: Viewport = {
  colorScheme: "dark light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={wallpoet.variable}>
      <body>{children}</body>
    </html>
  );
}

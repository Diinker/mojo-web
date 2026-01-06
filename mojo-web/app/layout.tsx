import type { Metadata } from "next";
import { 
  beyonders, 
  coolvetica, 
  nature, 
  natureLight 
} from "../lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mojo: Habit & Task Tracker",
  description: "Transform your daily habits with Mojo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontClasses = [
    beyonders.variable,
    coolvetica.variable,
    nature.variable,
    natureLight.variable,
    "antialiased"
  ].join(" ");

  return (
  <html lang="en">
    <body className={fontClasses} suppressHydrationWarning>
      {children}
    </body>
  </html>
);
}
import type { Metadata } from "next";
import { nature, natureLight } from "../lib/fonts";
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
  return (
    <html lang="en" className={`${nature.variable} ${natureLight.variable}`}>
      <body className={`${nature.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FinSight AI",
  description: "AI-powered personal finance advisor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
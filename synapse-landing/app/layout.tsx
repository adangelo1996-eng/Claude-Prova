import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Synapse — Biology lags. AI Catch up.",
  description:
    "Synapse implements AI-powered BI dashboards, a slim management layer, and full-spectrum HR automation through Promethys and Payday.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

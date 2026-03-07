import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RevenueWolf | Full-Service B2B Marketing & Sales Support",
  description:
    "Full-service marketing and sales support without the full-service price tag. Strategy, execution, and automation for B2B companies ready to grow.",
  openGraph: {
    title: "RevenueWolf | Full-Service B2B Marketing & Sales Support",
    description:
      "Full-service marketing and sales support without the full-service price tag. From first touch to lifetime value.",
    type: "website",
    locale: "en_US",
    siteName: "RevenueWolf",
  },
  twitter: {
    card: "summary_large_image",
    title: "RevenueWolf | Full-Service B2B Marketing & Sales Support",
    description:
      "Full-service marketing and sales support without the full-service price tag.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

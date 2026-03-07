import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
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
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}

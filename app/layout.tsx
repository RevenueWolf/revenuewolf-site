import type { Metadata } from "next";
import { Barlow_Condensed, Outfit } from "next/font/google";
import "./globals.css";
import "./gtm-framework.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://revenuewolf.com"),
  title: "RevenueWolf | Modern Marketing Agency — Smarter, Faster, Proven",
  description:
    "Marketing has changed. Your agency should too. RevenueWolf is a modern marketing agency powered by AI and 20+ years of experience. We help businesses grow — and prove it with real numbers.",
  openGraph: {
    title: "RevenueWolf | Modern Marketing Agency — Smarter, Faster, Proven",
    description:
      "Marketing has changed. Your agency should too. RevenueWolf is a modern marketing agency powered by AI and 20+ years of experience. We help businesses grow — and prove it with real numbers.",
    type: "website",
    locale: "en_US",
    siteName: "RevenueWolf",
  },
  twitter: {
    card: "summary_large_image",
    title: "RevenueWolf | Modern Marketing Agency — Smarter, Faster, Proven",
    description:
      "Marketing has changed. Your agency should too. RevenueWolf is a modern marketing agency powered by AI and 20+ years of experience. We help businesses grow — and prove it with real numbers.",
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
      <body className={`${barlowCondensed.variable} ${outfit.variable} font-body antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://revenuewolf.com",
              name: "RevenueWolf",
              description:
                "A modern marketing agency powered by AI and 20+ years of experience. We help businesses grow — and prove it with real numbers.",
              url: "https://revenuewolf.com",
              founder: {
                "@type": "Person",
                name: "Chris Cleland",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Birmingham",
                addressRegion: "AL",
                addressCountry: "US",
              },
              areaServed: "US",
              priceRange: "$$",
              image: "https://revenuewolf.com/opengraph-image.png",
              sameAs: ["https://www.linkedin.com/in/chriscleland/"],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "House of Sonika — Jaipur's Finest Home & Fashion",
  description: "Where the warmth of Jaipur's artisan heritage meets the elegance of everyday living — curated with love, delivered to your home.",
};

export const viewport: Viewport = {
  themeColor: "#FAF5EE",
};

import SonikaBot from "../components/SonikaBot";
import Preloader from "../components/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "House of Sonika",
              "image": "https://houseofsonika.com/images/New%20images/Bedsheet.jpg",
              "description": "Where the warmth of Jaipur's artisan heritage meets the elegance of everyday living. Authentic block prints, home furnishings and ethnic fashion.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "C107, Akashganga, Civil Lines",
                "addressLocality": "Jaipur",
                "postalCode": "302006",
                "addressRegion": "RJ",
                "addressCountry": "IN"
              },
              "telephone": "+918188000001",
              "url": "https://houseofsonika.com"
            })
          }}
        />
      </head>
      <body className="font-sans antialiased selection:bg-rose/20 selection:text-deep transition-colors duration-500">
          <Preloader />
          {children}
          <SonikaBot />
        </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wearesibbs.com"),
  title: {
    default: "SIBBS Real Estate — Building Residencies, Building Legacies",
    template: "%s | SIBBS Real Estate"
  },
  description:
    "SIBBS is a trusted real estate company in Kenya providing affordable, high-quality residential housing. Explore maisonettes in Thika, bungalows in Kitengela, and investment opportunities in the Kenyan real estate market.",
  keywords: [
    "Kenya real estate",
    "residential housing Kenya",
    "affordable homes Kenya",
    "Thika properties",
    "Kitengela bungalows",
    "SIBBS real estate",
    "property development Kenya",
    "homes for sale Kenya",
    "real estate investment Kenya",
    "buy house in Kenya from abroad"
  ],
  authors: [{ name: "SIBBS Real Estate" }],
  creator: "SIBBS Real Estate",
  publisher: "SIBBS Real Estate",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://wearesibbs.com",
    title: "SIBBS Real Estate — Building Residencies, Building Legacies",
    description: "Your trusted partner for high-quality, affordable residential housing in Kenya. Discover your dream home today.",
    siteName: "SIBBS Real Estate",
    images: [
      {
        url: "/sibbs-logo-blue.jpg",
        width: 1200,
        height: 630,
        alt: "SIBBS Real Estate Properties",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SIBBS Real Estate — Building Residencies, Building Legacies",
    description: "Affordable, high-quality residential housing in Kenya.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

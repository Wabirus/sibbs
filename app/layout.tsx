import type { Metadata } from "next";
import { Raleway, Nunito, Montserrat } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SIBBS Real Estate — Premium Properties in Kenya",
  description:
    "Your trusted partner in real estate investment in Kenya. Discover premium properties, smart land investments, and expert consultancy.",
  keywords: [
    "Kenya real estate",
    "property investment",
    "land for sale Kenya",
    "SIBBS",
    "Nairobi properties",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${nunito.variable} ${montserrat.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}

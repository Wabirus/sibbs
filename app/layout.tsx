import type { Metadata } from "next";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

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
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}

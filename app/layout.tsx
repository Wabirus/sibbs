import type { Metadata } from "next";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIBBS Real Estate — Building Residencies, Building Legacies",
  description:
    "SIBBS is a trusted real estate company in Kenya providing suitable residential housing solutions that are affordable and of high-quality standards. Whether you are a first-time homeowner, upgrading to your dream home, or investing in property, SIBBS provides solutions tailored to your needs.",
  keywords: [
    "Kenya real estate",
    "residential housing Kenya",
    "affordable homes Kenya",
    "Thika properties",
    "SIBBS real estate",
    "property development Kenya",
    "homes for sale Kenya",
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

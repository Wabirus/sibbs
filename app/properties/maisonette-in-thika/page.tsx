import type { Metadata } from "next";
import PropertyDetailClient from "./PropertyDetailClient";

export const metadata: Metadata = {
    title: "4 Bedroom + DSQ Maisonette in Thika — SIBBS Real Estate",
    description:
        "4 bedroom + DSQ maisonette for sale in Thika Landless. Features 333 sqm plinth area, all ensuite bedrooms with balconies, spacious parking for 6 cars, large rooftop, borehole water supply. KES 20M (negotiable).",
    keywords: [
        "maisonette Thika",
        "4 bedroom DSQ Thika",
        "house for sale Thika Landless",
        "Thika property",
        "SIBBS real estate Thika",
    ],
};

export default function MaisonetteInThika() {
    return <PropertyDetailClient />;
}

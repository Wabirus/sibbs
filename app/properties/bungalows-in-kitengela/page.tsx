import type { Metadata } from "next";
import PropertyDetailClient from "./PropertyDetailClient";

export const metadata: Metadata = {
    title: "3 Bedroom + DSQ in Kitengela — SIBBS Real Estate",
    description:
        "3 bedroom + DSQ in a gated community in Kitengela. All ensuite bedrooms, 179 sqm plinth area, electric fence, individual title deed, green spaces, and cabro internal access roads.",
    keywords: [
        "3 bedroom Kitengela",
        "house for sale Kitengela",
        "Kitengela gated community",
        "DSQ Kitengela property",
        "SIBBS real estate Kitengela",
    ],
};

export default function BungalowsInKitengela() {
    return <PropertyDetailClient />;
}

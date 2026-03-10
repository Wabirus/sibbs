import type { Metadata } from "next";
import PropertyDetailClient from "./PropertyDetailClient";

export const metadata: Metadata = {
    title: "The KNOX Residence 1 — SIBBS Real Estate",
    description:
        "4 bedroom bungalow in Thika Landless. This property features beautiful yards, ample parking, and borehole water supply. Sold.",
    keywords: [
        "bungalow Thika",
        "4 bedroom Thika",
        "house for sale Thika Landless",
        "Thika property",
        "SIBBS real estate Thika",
    ],
};

export default function BungalowInThika() {
    return <PropertyDetailClient />;
}

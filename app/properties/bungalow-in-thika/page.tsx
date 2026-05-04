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
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "RealEstateListing",
                        "name": "The KNOX Residence 1 — 4 Bedroom Bungalow in Thika",
                        "description": "4-bedroom bungalow for sale in Thika Landless. Features beautiful yards, ample parking, and borehole water supply. Now sold.",
                        "url": "https://wearesibbs.com/properties/bungalow-in-thika",
                        "image": "https://wearesibbs.com/properties/bungalow-in-thika/5872941386271755598.jpg",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Thika",
                            "addressRegion": "Kiambu",
                            "addressCountry": "KE"
                        }
                    }),
                }}
            />
            <PropertyDetailClient />
        </>
    );
}

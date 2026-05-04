import type { Metadata } from "next";
import PropertyDetailClient from "./PropertyDetailClient";

export const metadata: Metadata = {
    title: "The KNOX Residence 2 — SIBBS Real Estate",
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
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "RealEstateListing",
                        "name": "The KNOX Residence 2 — 4 Bedroom Maisonette in Thika",
                        "description": "Premium 4-bedroom + DSQ maisonette for sale in Thika Landless. Features 333 sqm plinth area, all ensuite bedrooms, borehole water, and KCB financing.",
                        "url": "https://wearesibbs.com/properties/maisonette-in-thika",
                        "image": "https://wearesibbs.com/properties/maisonette-in-thika/knox2-1.webp",
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

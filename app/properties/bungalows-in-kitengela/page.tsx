import type { Metadata } from "next";
import PropertyDetailClient from "./PropertyDetailClient";

export const metadata: Metadata = {
    title: "Ivanna Residence — SIBBS Real Estate",
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
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "RealEstateListing",
                        "name": "Ivanna Residence — 3 Bedroom Bungalow in Kitengela",
                        "description": "Luxurious 3-bedroom + DSQ bungalow for sale in a gated community in Kitengela. Features all ensuite bedrooms, 179 sqm plinth area, and KCB financing.",
                        "url": "https://wearesibbs.com/properties/bungalows-in-kitengela",
                        "image": "https://wearesibbs.com/properties/bungalows-in-kitengela/ivanna-render-1.webp",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Kitengela",
                            "addressRegion": "Kajiado",
                            "addressCountry": "KE"
                        }
                    }),
                }}
            />
            <PropertyDetailClient />
        </>
    );
}

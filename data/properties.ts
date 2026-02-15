import type { Property, Agent, InvestmentStat } from "@/types/property";

// ─── Main Grid Properties (6 cards) ────────────────────────
export const properties: Property[] = [
    {
        id: "1",
        name: "Serenity Tower",
        location: { country: "USA", region: "California", city: "Los Angeles" },
        price: 340000,
        currency: "$",
        specs: { areaSqM: 300, floors: 1, beds: 6, baths: 2 },
        // New luxury modern house image
        image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
        type: "sale",
        isNew: true,
    },
    {
        id: "2",
        name: "Island Retreat",
        location: {
            country: "Caribbean",
            region: "Bahamas",
            city: "Exuma",
        },
        price: 220000,
        currency: "$",
        specs: { areaSqM: 250, floors: 1, beds: 4, baths: 1 },
        image:
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
        type: "sale",
        isNew: true,
    },
    {
        id: "3",
        name: "Mountain Lodge",
        location: { country: "USA", region: "Colorado", city: "Aspen" },
        price: 500000,
        currency: "$",
        specs: { areaSqM: 400, floors: 3, beds: 6, baths: 3 },
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
        type: "sale",
        isNew: true,
    },
    {
        id: "4",
        name: "Comporta Beach Lux",
        location: {
            country: "Portugal",
            region: "Lisbon Coast",
            city: "Comporta",
        },
        price: 296000,
        currency: "$",
        specs: { areaSqM: 230, floors: 1, beds: 6, baths: 3 },
        image:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
        type: "sale",
        isNew: true,
    },
    {
        id: "5",
        name: "Tulum Eco Retreat",
        location: { country: "Mexico", region: "Yucatan", city: "Tulum" },
        price: 450000,
        currency: "$",
        specs: { areaSqM: 150, floors: 1, beds: 3, baths: 1 },
        image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
        type: "sale",
        isNew: true,
    },
    {
        id: "6",
        name: "Azura Villa",
        location: { country: "Greece", region: "Cyclades", city: "Mykonos" },
        price: 470000,
        currency: "$",
        specs: { areaSqM: 400, floors: 2, beds: 6, baths: 2 },
        image:
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop",
        type: "sale",
        isNew: true,
    },
];

// ─── Sidebar Properties ────────────────────────────────────
export const sidebarProperties: Property[] = [
    {
        id: "s1",
        name: "Azura Villa",
        location: { country: "Greece", region: "Cyclades", city: "Mykonos" },
        price: 470000,
        currency: "$",
        specs: { areaSqM: 400, floors: 2, beds: 6, baths: 2 },
        image:
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop",
        type: "sale",
        isFeatured: true,
    },
];

// ─── Agent Data ────────────────────────────────────────────
export const agent: Agent = {
    name: "Marcus Lee",
    role: "Real estate agent",
    avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    rating: 4.5,
    reviewCount: 70,
    phone: "+1 (917) 555-...",
};

// ─── Investment Stats ──────────────────────────────────────
export const investmentStats: InvestmentStat[] = [
    {
        label: "Portfolio BVI",
        roi: "14%",
        price: "$7,000",
        description:
            "Our assets are not just square meters, it's an opportunity for your capital to work for you.",
    },
    {
        label: "ROI",
        roi: "10%",
        price: "$11,275",
        description: "Enjoy private apartments for daily life.",
    },
    {
        label: "Annual",
        roi: "12%",
        price: "$9,500",
        description: "Gardens, a pool, and events.",
    },
    {
        label: "ROI",
        roi: "15%",
        price: "$22,000",
        description: "A sole retreat.",
    },
];

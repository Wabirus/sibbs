import type { Metadata } from "next";
import Header from "@/components/Header";
import SearchFilters from "@/components/SearchFilters";
import PropertyGrid from "@/components/PropertyGrid";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Our Properties — Maisonettes & Bungalows for Sale in Kenya",
    description: "Browse our premium selection of residential properties in Kenya, including 4-bedroom maisonettes in Thika and 3-bedroom bungalows in Kitengela.",
    keywords: ["properties for sale Kenya", "houses in Thika", "bungalows in Kitengela", "Kenyan real estate listings"],
};

export default function PropertiesPage() {
    return (
        <main className="bg-white min-h-screen">
            <Header />

            {/* ── Page Header ──────────────────────────────── */}
            <section className="pt-32 pb-12 px-4 bg-gray-900 text-white text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold font-raleway mb-4">
                    Our Properties
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Explore our exclusive collection of luxury homes and investment opportunities.
                </p>
            </section>

            <SearchFilters />

            {/* ── Properties + Sidebar layout ──────────────── */}
            <section className="py-16 px-4 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
                    <PropertyGrid />
                    <Sidebar />
                </div>
            </section>

            <Footer />
        </main>
    );
}

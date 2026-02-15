import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { properties } from "@/data/properties";

export default async function PropertyDetail({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const property = properties.find((p) => p.id === id);

    if (!property) {
        notFound();
    }

    // Gallery images (simulated by repeating/varying the main image URL params for demo)
    // In a real app, `property.images` would be an array.
    const galleryImages = [
        property.image,
        property.image.replace("Crop", "Crop2") + "&q=80", // slightly different request to avoid cache if needed, but here just placeholder
        property.image.replace("fit=crop", "fit=crop&flip=h"),
    ];

    return (
        <main className="bg-white min-h-screen font-nunito text-gray-900">
            <Header />

            {/* ── Masonry Hero Gallery ──────────────────────── */}
            <section className="pt-32 pb-10 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[60vh] min-h-[500px] mb-8">
                    {/* Main Large Image */}
                    <div className="md:col-span-2 relative h-full rounded-2xl overflow-hidden shadow-sm group">
                        <Image
                            src={galleryImages[0]}
                            alt={property.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-gray-900 uppercase tracking-wider shadow-sm">
                            {property.type === "rent" ? "For Rent" : "For Sale"}
                        </div>
                    </div>

                    {/* Side Stack */}
                    <div className="hidden md:grid grid-rows-2 gap-4 h-full">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm group">
                            <Image
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
                                alt="Detail view 1"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm group">
                            <Image
                                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop"
                                alt="Detail view 2"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                <button className="bg-white/20 backdrop-blur-md border border-white/40 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-white hover:text-gray-900 transition-all">
                                    View All Photos
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Title & Price Row ─────────────────────── */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-gray-100 pb-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs mb-2">
                            <i className="fas fa-map-marker-alt" />
                            {property.location.city}, {property.location.country}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold font-raleway text-gray-900 leading-tight">
                            {property.name}
                        </h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">
                                Guide Price
                            </p>
                            <p className="text-4xl font-extrabold text-primary">
                                {property.currency}{property.price.toLocaleString()}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Main Content Grid ──────────────────────── */}
            <section className="px-4 pb-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column (Content) */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Specs Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                            {[
                                { label: "Bedrooms", val: property.specs.beds, icon: "bed" },
                                { label: "Bathrooms", val: property.specs.baths, icon: "bath" },
                                { label: "Area", val: `${property.specs.areaSqM} m²`, icon: "ruler-combined" },
                                { label: "Floors", val: property.specs.floors, icon: "layer-group" },
                            ].map((spec) => (
                                <div key={spec.label} className="text-center p-2">
                                    <div className="w-10 h-10 mx-auto bg-white rounded-full flex items-center justify-center text-primary mb-3 shadow-sm text-lg">
                                        <i className={`fas fa-${spec.icon}`} />
                                    </div>
                                    <p className="font-bold text-xl text-gray-900 leading-none mb-1">{spec.val}</p>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{spec.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Description */}
                        <div className="prose prose-lg max-w-none text-gray-600">
                            <h2 className="text-2xl font-bold font-raleway text-gray-900 mb-4">About this property</h2>
                            <p className="leading-relaxed">
                                Step into a world of refined elegance with this architectural masterpiece in {property.location.city}.
                                Every detail has been carefully curated to offer the ultimate in luxury living. The expansive open-plan
                                design floods the interiors with natural light, creating a seamless connection between indoor and outdoor spaces.
                            </p>
                            <p className="leading-relaxed mt-4">
                                The gourmet kitchen features top-of-the-line appliances and custom cabinetry, perfect for culinary enthusiasts.
                                Retreat to the master suite, a sanctuary of peace with a spa-inspired bathroom and walk-in closets.
                                Outside, the landscaped gardens and private pool provide a resort-like atmosphere right at home.
                            </p>
                        </div>

                        {/* Features */}
                        <div>
                            <h2 className="text-2xl font-bold font-raleway text-gray-900 mb-6">Amenities & Features</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
                                {[
                                    "Smart Home System", "Private Pool", "Home Cinema", "Wine Cellar",
                                    "Gym & Spa", "3-Car Garage", "Guest House", "Solar Power", "Security System"
                                ].map((feature) => (
                                    <div key={feature} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <i className="fas fa-check-circle text-primary/40" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column (Sticky Sidebar) */}
                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-28 space-y-6">

                            {/* Agent Card */}
                            <div className="bg-white p-6 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100">
                                        <Image
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                                            alt="Agent"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg">Marcus Lee</h3>
                                        <p className="text-sm text-gray-500 mb-1">Senior Property Consultant</p>
                                        <div className="flex items-center gap-1 text-xs font-bold text-gray-900">
                                            <i className="fas fa-star text-gold" />
                                            4.9 (120 reviews)
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full bg-gray-900 text-white font-bold py-3.5 rounded-xl hover:bg-gray-800 transition-colors mb-3 flex items-center justify-center gap-2">
                                    <i className="fas fa-phone-alt text-xs" />
                                    Show Phone Number
                                </button>
                                <button className="w-full bg-white border border-gray-200 text-gray-700 font-bold py-3.5 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                    <i className="fab fa-whatsapp text-lg" />
                                    Chat on WhatsApp
                                </button>
                            </div>

                            {/* Inquiry Form */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-4">Request a Viewing</h3>
                                <form className="space-y-4">
                                    <input type="text" placeholder="Your Name" className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm" />
                                    <input type="email" placeholder="Email Address" className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm" />
                                    <textarea rows={3} placeholder="I'm interested in this property..." className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm resize-none"></textarea>
                                    <button className="w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 mt-2">
                                        Send Inquiry
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}

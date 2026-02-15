import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { companyStats, companyValues, teamMembers } from "@/data/company";

export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen">
            <Header />

            {/* ── Hero Section ────────────────────────────── */}
            <section className="relative pt-32 pb-20 px-4 bg-gray-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold font-raleway text-gray-900 mb-6">
                        We Don&apos;t Just Sell Homes,<br />
                        We Build <span className="text-primary">Legacies</span>.
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 font-nunito">
                        SIBBS Real Estate is Kenya&apos;s premier property consultancy, dedicated to connecting
                        discerning buyers with exceptional investment opportunities.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {companyStats.map((stat) => (
                            <div key={stat.label} className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Our Story ───────────────────────────────── */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10">
                            <Image
                                src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=800&h=1000&fit=crop"
                                alt="Modern office interior"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:block">
                            <div className="relative w-full h-full rounded-xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop"
                                    alt="Team meeting"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/5 rounded-full blur-3xl -z-10"></div>
                    </div>
                    <div>
                        <span className="text-primary font-bold tracking-wider uppercase mb-2 block">Our Story</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-raleway text-gray-900 mb-6">
                            Redefining Real Estate in East Africa
                        </h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed font-nunito">
                            <p>
                                Founded in 2010, SIBBS started with a simple belief: real estate services should be as
                                exceptional as the properties they represent. What began as a boutique agency in Nairobi
                                has grown into a regional powerhouse, serving clients across East Africa and beyond.
                            </p>
                            <p>
                                We specialize in luxury residential properties, prime commercial real estate, and strategic
                                land investments. Our approach combines deep local market knowledge with international
                                standards of service and transparency.
                            </p>
                            <p>
                                Today, we are proud to have facilitated over $1.8 billion in real estate transactions,
                                helping thousands of families find their dream homes and investors build generational wealth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Values ──────────────────────────────────── */}
            <section className="py-24 px-4 bg-primary text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#D4AF37 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-gold font-bold tracking-wider uppercase mb-2 block">Our Values</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-raleway">The Principles That Guide Us</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {companyValues.map((value) => (
                            <div key={value.title} className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/20 transition-all duration-300">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary text-xl mb-6">
                                    <i className={`fas fa-${value.icon}`}></i>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Team ────────────────────────────────────── */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase mb-2 block">Our Team</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-raleway text-gray-900">Leadership</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className="relative h-80 overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <div className="text-white">
                                            <p className="font-bold">{member.name}</p>
                                            <p className="text-sm text-gray-300">{member.role}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                                    <p className="text-primary text-sm font-semibold mb-3">{member.role}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ─────────────────────────────────────── */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto bg-gray-900 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to work with the best?</h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                            Whether you&apos;re buying, selling, or investing, our team of experts is here to guide you every step of the way.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact" className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-colors">
                                Contact Us
                            </a>
                            <a href="/properties" className="px-8 py-4 bg-transparent border border-gray-700 text-white rounded-full font-bold hover:bg-gray-800 transition-colors">
                                Browse Properties
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

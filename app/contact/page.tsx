import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
    return (
        <main className="bg-white min-h-screen">
            <Header />

            {/* ── Hero ───────────────────────────────────── */}
            <section className="pt-32 pb-20 px-4 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold font-raleway mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Have questions about buying, selling, or investing? Our team is here
                        to help you navigate the real estate market.
                    </p>
                </div>
            </section>

            {/* ── Contact Content ────────────────────────── */}
            <section className="py-20 px-4 relative -mt-10">
                <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* ── Info Panel ───────────────────────────── */}
                        <div className="bg-primary p-10 md:p-16 text-white flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold font-raleway mb-8">Contact Information</h3>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                            <i className="fas fa-map-marker-alt text-gold text-xl"></i>
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg mb-1">Headquarters</p>
                                            <p className="text-gray-300 leading-relaxed">
                                                123 Luxury Lane, Westlands<br />
                                                Nairobi, Kenya
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                            <i className="fas fa-phone-alt text-gold text-xl"></i>
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg mb-1">Phone</p>
                                            <p className="text-gray-300">+254 700 000 000</p>
                                            <p className="text-gray-300 text-sm mt-1">Mon-Fri from 8am to 5pm</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                            <i className="fas fa-envelope text-gold text-xl"></i>
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg mb-1">Email</p>
                                            <p className="text-gray-300">hello@sibbs-realestate.com</p>
                                            <p className="text-gray-300">support@sibbs-realestate.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10 mt-12 flex gap-4">
                                {['twitter', 'linkedin-in', 'instagram', 'facebook-f'].map((icon) => (
                                    <a key={icon} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                                        <i className={`fab fa-${icon}`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* ── Form Panel ───────────────────────────── */}
                        <div className="p-10 md:p-16 bg-white">
                            <h3 className="text-2xl font-bold font-raleway text-gray-900 mb-2">Send us a Message</h3>
                            <p className="text-gray-500 mb-8">We usually respond within 24 hours.</p>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
                                        <option>General Inquiry</option>
                                        <option>Buying a Property</option>
                                        <option>Selling a Property</option>
                                        <option>Investment Advice</option>
                                        <option>Careers</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"></textarea>
                                </div>

                                <button className="w-full bg-gray-900 text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/10">
                                    Send Message
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Map (Image Placeholder) ────────────────── */}
            <section className="h-96 w-full relative grayscale opacity-80 hover:grayscale-0 transition-all duration-700">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 font-bold text-xl">
                    <Image
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&h=600&fit=crop"
                        alt="Map location"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white px-8 py-4 rounded-full shadow-xl flex items-center gap-3">
                            <i className="fas fa-map-marker-alt text-primary text-2xl"></i>
                            <span className="font-bold text-gray-900">Visit our Office</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

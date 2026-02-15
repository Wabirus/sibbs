import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { careers, companyValues } from "@/data/company";

export default function CareersPage() {
    return (
        <main className="bg-white min-h-screen">
            <Header />

            {/* ── Hero ───────────────────────────────────── */}
            <section className="pt-32 pb-20 px-4 bg-gray-50 text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <span className="text-primary font-bold tracking-wider uppercase mb-2 block">Join Our Team</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold font-raleway text-gray-900 mb-6">
                        Build the Future of Real Estate
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        We&apos;re looking for passionate individuals who want to redefine how
                        people buy, sell, and invest in properties.
                    </p>
                    <a href="#positions" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-gray-800 transition-colors">
                        View Open Positions <i className="fas fa-arrow-down"></i>
                    </a>
                </div>
            </section>

            {/* ── Benefits ───────────────────────────────── */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold font-raleway text-center mb-16">Why Work With Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Competitive Pay", desc: "Top-tier salaries, commission structures, and equity options.", icon: "money-bill-wave" },
                            { title: "Remote Friendly", desc: "Work from where you're most productive. We support hybrid and remote roles.", icon: "laptop-house" },
                            { title: "Growth & Learning", desc: "Annual budget for conferences, courses, and professional development.", icon: "chart-line" },
                            { title: "Health & Wellness", desc: "Premium health insurance, gym stipends, and mental health support.", icon: "heartbeat" },
                            { title: "Top Equipment", desc: "Latest MacBook Pros and home office setup allowance.", icon: "desktop" },
                            { title: "Team Retreats", desc: "Annual company-wide retreats to amazing destinations.", icon: "plane-departure" }
                        ].map((benefit) => (
                            <div key={benefit.title} className="flex gap-4 p-6 rounded-xl hover:bg-gray-50 transition-colors">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl shrink-0">
                                    <i className={`fas fa-${benefit.icon}`}></i>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Jobs List ──────────────────────────────── */}
            <section id="positions" className="py-20 px-4 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold font-raleway text-center mb-12">Open Positions</h2>
                    <div className="space-y-4">
                        {careers.map((job) => (
                            <div key={job.id} className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-primary/30 transition-all">
                                <div>
                                    <div className="flex items-center gap-3 text-sm font-semibold text-gray-500 mb-2">
                                        <span className="text-primary">{job.department}</span>
                                        <span>•</span>
                                        <span>{job.location}</span>
                                        <span>•</span>
                                        <span>{job.type}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                                    <p className="text-gray-500 text-sm max-w-2xl line-clamp-2">{job.description}</p>
                                </div>
                                <div className="shrink-0 flex items-center gap-4">
                                    <button className="px-6 py-2.5 bg-white border border-gray-200 text-gray-900 font-bold rounded-lg hover:border-gray-400 transition-colors whitespace-nowrap">
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

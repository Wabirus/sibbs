import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";

export default function BlogIndx() {
    return (
        <main className="bg-white min-h-screen">
            <Header />

            {/* ── Header ────────────────────────────────────── */}
            <section className="pt-32 pb-16 px-4 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-raleway text-gray-900 mb-4">
                        Insights & News
                    </h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Market trends, investment guides, and expert advice for the modern
                        real estate investor.
                    </p>
                </div>
            </section>

            {/* ── Categories ────────────────────────────────── */}
            <section className="py-8 px-4 border-b border-gray-100 sticky top-[72px] bg-white z-30">
                <div className="max-w-7xl mx-auto overflow-x-auto">
                    <div className="flex gap-2 min-w-max">
                        {["All", "Investment", "Guides", "Trends", "Finance", "Selling"].map(
                            (cat, i) => (
                                <button
                                    key={cat}
                                    className={`px-5 py-2 rounded-full text-sm font-bold transition-colors ${i === 0
                                            ? "bg-gray-900 text-white"
                                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                        }`}
                                >
                                    {cat}
                                </button>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* ── Blog Grid ─────────────────────────────────── */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Link
                            href={`/blog/${post.slug}`}
                            key={post.slug}
                            className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="relative h-60 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide">
                                    {post.category}
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 p-6">
                                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                                    <span>{post.date}</span>
                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h2 className="text-xl font-bold font-raleway text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto flex items-center gap-3 pt-4 border-t border-gray-50">
                                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                        <Image
                                            src={post.author.avatar}
                                            alt={post.author.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <span className="text-sm font-semibold text-gray-700">
                                        {post.author.name}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ── Newsletter ────────────────────────────────── */}
            <section className="py-24 px-4 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold font-raleway mb-4">
                        Stay Ahead of the Market
                    </h2>
                    <p className="text-gray-400 mb-8">
                        Join 10,000+ subscribers getting weekly real estate insights delivered
                        to their inbox.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-5 py-3.5 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white/20 transition-all"
                        />
                        <button className="px-8 py-3.5 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition-colors">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}

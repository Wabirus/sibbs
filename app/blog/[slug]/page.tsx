import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    // Find related posts (exclude current)
    const relatedPosts = blogPosts
        .filter((p) => p.slug !== slug)
        .slice(0, 3);

    return (
        <main className="bg-white min-h-screen">
            <Header />

            {/* ── Hero Image ──────────────────────────────── */}
            <section className="relative h-[50vh] min-h-[400px] w-full mt-[72px]">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent pt-32 pb-10 px-4">
                    <div className="max-w-4xl mx-auto text-white text-center">
                        <div className="flex items-center justify-center gap-3 text-sm font-semibold mb-4 text-gray-300">
                            <span className="bg-primary px-3 py-1 rounded-full text-white">
                                {post.category}
                            </span>
                            <span>{post.date}</span>
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                            <span>{post.readTime}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold font-raleway mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center justify-center gap-3">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                                <Image
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-sm font-bold text-white">
                                By {post.author.name}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Content ─────────────────────────────────── */}
            <article className="max-w-3xl mx-auto py-16 px-4">
                <div className="prose prose-lg prose-gray max-w-none prose-headings:font-raleway prose-headings:font-bold prose-headings:text-gray-900 prose-p:font-nunito prose-p:text-gray-600 prose-p:leading-loose prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-lg">
                    {/* Render markdown content simply by splitting lines for this demo */}
                    {post.content.split("\n\n").map((paragraph, idx) => {
                        if (paragraph.startsWith("## ")) {
                            return (
                                <h2 key={idx} className="mt-8 mb-4">
                                    {paragraph.replace("## ", "")}
                                </h2>
                            );
                        }
                        if (paragraph.startsWith("- ")) {
                            return (
                                <ul key={idx} className="list-disc pl-5 space-y-2 mb-6">
                                    {paragraph.split("\n").map((item, i) => (
                                        <li key={i}>{item.replace("- ", "").replace(/\*\*/g, "")}</li>
                                    ))}
                                </ul>
                            );
                        }
                        return (
                            <p key={idx} className="mb-6">
                                {paragraph.replace(/\*\*/g, "")}
                            </p>
                        );
                    })}
                </div>
            </article>

            {/* ── Related Posts ───────────────────────────── */}
            <section className="py-16 px-4 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-2xl font-bold font-raleway text-gray-900 mb-8">Related Articles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedPosts.map((related) => (
                            <Link href={`/blog/${related.slug}`} key={related.slug} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={related.image}
                                        alt={related.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-5">
                                    <p className="text-xs text-primary font-bold uppercase mb-2">{related.category}</p>
                                    <h4 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">{related.title}</h4>
                                    <p className="text-xs text-gray-500">{related.date}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

// Generate static params for all posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

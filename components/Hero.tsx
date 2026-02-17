"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* ── Background Image ───────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&h=900&fit=crop"
          alt="Luxury Villa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* ── Content ────────────────────────────────────── */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          {/* Property of the Month Card */}
          <motion.div
            variants={fadeUp}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl max-w-lg"
          >
            <span className="inline-block bg-gold text-primary-dark text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Property of the Month
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
              The Oceanview <br />
              <span className="text-gold">Penthouse</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Experience the pinnacle of luxury living with panoramic views of the
              coastline. A sanctuary where elegance meets nature.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/properties/2" // Linking to Island Retreat (similar vibe)
                className="bg-white text-primary-dark px-8 py-3.5 rounded-lg font-bold hover:bg-gold hover:text-white transition-colors text-center"
              >
                View Details
              </Link>
              <Link
                href="#contact"
                className="border border-white text-white px-8 py-3.5 rounded-lg font-bold hover:bg-white/10 transition-colors text-center"
              >
                Book a Viewing
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Trust Indicators ───────────────────────────── */}
      <div className="absolute bottom-10 left-0 w-full z-10 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-8">
            {[
              { label: "Years of Experience", value: "15+" },
              { label: "Properties Sold", value: "350+" },
              { label: "Happy Clients", value: "450+" },
              { label: "Awards Won", value: "12" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-xs text-gray-300 uppercase tracking-wider font-bold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

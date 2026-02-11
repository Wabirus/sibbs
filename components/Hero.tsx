"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  fadeUp,
  scaleUp,
  slideLeft,
  slideRight,
  staggerContainer,
  staggerItem,
  springGentle,
  viewportConfig,
} from "@/lib/animations";

const trustIndicators = [
  { icon: "fas fa-shield-alt", label: "Licensed & Registered" },
  { icon: "fas fa-handshake", label: "500+ Happy Clients" },
  { icon: "fas fa-map-marked-alt", label: "Properties Across Kenya" },
  { icon: "fas fa-clock", label: "10+ Years Experience" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-28 pb-16 flex items-center text-white overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(20, 28, 90, 0.92), rgba(30, 42, 120, 0.8), rgba(44, 56, 146, 0.7)), url('https://images.unsplash.com/photo-1622130944926-6e57d833a9d5?w=2000&h=1000')",
      }}
    >
      {/* Decorative orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gold/8 rounded-full blur-[100px]" />
        <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-primary-light/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* ─── Left — Text Content ────────────────────────── */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.span
              variants={fadeUp}
              transition={springGentle}
              className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-gold px-5 py-2 rounded-full text-sm font-semibold tracking-wide mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              Kenya&apos;s Premier Real Estate Partner
            </motion.span>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              transition={{ ...springGentle, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold mb-6 font-raleway leading-[1.1] tracking-tight"
            >
              Find Your Perfect
              <br />
              <span className="text-gold">Property</span> in Kenya
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              transition={{ ...springGentle, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200/90 font-nunito mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Discover premium properties, smart land investments, and expert
              consultancy with Kenya&apos;s most trusted real estate partner.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              transition={{ ...springGentle, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#properties"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold to-gold-light text-gray-900 px-8 py-3.5 rounded-full font-bold text-base hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <i className="fas fa-building text-sm" /> Explore Properties
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 bg-white/8 border border-white/25 text-white px-8 py-3.5 rounded-full font-semibold text-base hover:bg-white/15 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
              >
                <i className="fas fa-phone-alt text-sm" /> Get in Touch
              </a>
            </motion.div>
          </motion.div>

          {/* ─── Right — Property of the Month Card ─────────── */}
          <motion.div
            className="flex-1 w-full max-w-md lg:max-w-lg"
            variants={slideRight}
            initial="hidden"
            animate="visible"
            transition={{ ...springGentle, delay: 0.35 }}
          >
            <div className="relative">
              {/* Featured badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ ...springGentle, delay: 0.6 }}
                  className="inline-flex items-center gap-1.5 bg-gradient-to-r from-gold to-gold-light text-gray-900 px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg"
                >
                  <i className="fas fa-star text-[10px]" /> Property of the Month
                </motion.span>
              </div>

              {/* Card */}
              <div className="bg-white/8 backdrop-blur-xl border border-white/15 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-1 group">
                {/* Image */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <Image
                    src="/property-of-month.png"
                    alt="Property of the Month – Luxury Villa in Karen"
                    width={800}
                    height={500}
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-3 right-3 bg-gradient-to-r from-gold to-gold-light text-gray-900 px-4 py-1.5 rounded-full font-bold text-lg shadow-lg">
                    KES 45M
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-1.5 font-raleway">
                    Luxury Villa in Karen
                  </h3>
                  <div className="text-sm text-gray-300 mb-3 flex items-center gap-1.5">
                    <i className="fas fa-map-marker-alt text-gold text-xs" /> Karen,
                    Nairobi
                  </div>

                  <div className="flex gap-5 text-sm text-gray-300 mb-5">
                    {[
                      { icon: "fas fa-bed", label: "5 Beds" },
                      { icon: "fas fa-bath", label: "4 Baths" },
                      { icon: "fas fa-ruler-combined", label: "8,000 sqft" },
                    ].map((feature) => (
                      <span
                        key={feature.label}
                        className="flex items-center gap-1.5"
                      >
                        <i className={`${feature.icon} text-gold/70 text-xs`} />{" "}
                        {feature.label}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#properties"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-light text-gray-900 px-5 py-2 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
                  >
                    View Details{" "}
                    <i className="fas fa-arrow-right text-xs" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ─── Trust indicators ───────────────────────────── */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 text-sm text-gray-300">
            {trustIndicators.map((item) => (
              <motion.div
                key={item.label}
                variants={staggerItem}
                className="flex items-center gap-2.5"
              >
                <i className={`${item.icon} text-gold`} />
                <span className="font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "motion/react";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  sectionReveal,
  viewportConfig,
} from "@/lib/animations";

interface Service {
  title: string;
  description: string;
  icon: string;
  accent: string;
}

const services: Service[] = [
  {
    title: "Property Sales",
    description:
      "Find your dream property from our extensive portfolio of prime real estate opportunities across Kenya.",
    icon: "fas fa-home",
    accent: "from-gold/20 to-gold/5",
  },
  {
    title: "Land Investment",
    description:
      "Secure your future with high-return land investment opportunities in premium, fast-growing locations.",
    icon: "fas fa-chart-line",
    accent: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    title: "Rental Management",
    description:
      "Hassle-free property management services to maximize your rental income with zero stress.",
    icon: "fas fa-building",
    accent: "from-blue-400/20 to-blue-400/5",
  },
  {
    title: "Consultancy",
    description:
      "Expert advice and guidance on real estate investments, market trends, and property valuation.",
    icon: "fas fa-handshake",
    accent: "from-purple-400/20 to-purple-400/5",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 px-4 flex items-center justify-center overflow-hidden"
    >
      {/* ── Parallax Background ────────────────────────── */}
      <div
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat bg-fixed bg-opacity-50"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-primary backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section heading (Glass Card) */}
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-3xl text-center shadow-2xl max-w-4xl mx-auto mb-16"
        >
          <motion.h2
            className="text-3xl md:text-5xl lg:text-5xl font-extrabold mb-6 leading-tight text-white"
          >
            Find a place you<br />
            will call <span className="text-gold">home</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            With us you will find not just accommodation, but a place where
            your new life begins, full of coziness and possibilities.
          </motion.p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={staggerItem}
              className="group relative bg-white/10 backdrop-blur-md border border-white/20 p-7 rounded-2xl hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:bg-white/20"
            >
              {/* Accent gradient */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-primary-dark text-xl mb-5 shadow-lg shadow-gold/20 group-hover:scale-110 transition-transform duration-300">
                  <i className={service.icon} />
                </div>

                <h3 className="text-lg font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-100 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

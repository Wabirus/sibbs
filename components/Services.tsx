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
    <section id="services" className="py-24 px-4 bg-primary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/3 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="inline-block text-gold text-sm font-bold uppercase tracking-[0.2em] mb-3">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-raleway mb-4 tracking-tight">
            Our Services
          </h2>
          <div className="section-divider" />
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
              className="group relative bg-white/6 backdrop-blur-sm border border-white/10 p-7 rounded-xl hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:bg-white/10"
            >
              {/* Accent gradient */}
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-primary-dark text-xl mb-5 shadow-lg shadow-gold/20 group-hover:scale-110 transition-transform duration-300">
                  <i className={service.icon} />
                </div>

                <h3 className="text-lg font-bold font-raleway text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed font-nunito">
                  {service.description}
                </p>
              </div>

              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

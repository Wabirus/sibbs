"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  springGentle,
} from "@/lib/animations";

interface PortfolioColumn {
  image: string;
  title: string;
  description: string;
  href: string;
}

const portfolioColumns: PortfolioColumn[] = [
  {
    image: "/properties/maisonette-in-thika/front-view.jpg",
    title: "Thika | Maisonnete",
    description:
      "Explore our premium 4-bedroom + DSQ maisonettes in Thika, designed for modern family living with spacious layouts and quality finishes.",
    href: "/properties/maisonette-in-thika",
  },
  {
    image: "/properties/bungalows-in-kitengela/kitengela-bungalow.png",
    title: "Kitengela | Bungalow",
    description:
      "Discover our 3-bedroom + DSQ bungalows in Kitengela, offering comfortable and affordable homes in a fast-growing area.",
    href: "/properties/bungalows-in-kitengela",
  },
  {
    image: "/properties/maisonette-in-thika/aerial-view.jpg",
    title: "Thika | Bungalow",
    description:
      "Get started on building your dream home with our upcoming developments. Register your interest today for early access.",
    href: "#contact",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-white pt-28 pb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* ─── Centered Tagline ─────────────────────────── */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeUp}
            transition={springGentle}
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-georgia leading-tight tracking-tight whitespace-nowrap"
          >
            <span className="text-primary">Building</span>{" "}
            <span className="text-gold">Residencies,</span>{" "}
            <span className="text-primary">Building</span>{" "}
            <span className="text-gold">Legacies</span>
          </motion.h1>
        </motion.div>

        {/* ─── Portfolio Columns ────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {portfolioColumns.map((col) => (
            <motion.div
              key={col.title}
              variants={staggerItem}
              className="group flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg mb-6">
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Title */}
              <h2 className="text-xl md:text-2xl font-extrabold font-raleway text-gray-900 mb-3 tracking-wide">
                {col.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-500 font-nunito leading-relaxed max-w-xs mx-auto mb-6">
                {col.description}
              </p>

              {/* CTA Button */}
              <Link
                href={col.href}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-gray-900 text-gray-900 text-sm font-bold tracking-wider uppercase rounded-none hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
              >
                TAKE ME THERE
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

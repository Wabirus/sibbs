"use client";

import { motion } from "motion/react";
import {
  staggerContainer,
  staggerItem,
  sectionReveal,
  viewportConfig,
} from "@/lib/animations";

interface Property {
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
  tag: string;
  image: string;
}

const properties: Property[] = [
  {
    title: "Executive Bungalows in Kitengela",
    price: "KES 12M",
    location: "Kitengela, Kenya",
    beds: 3,
    baths: 2,
    sqft: "1,800",
    tag: "For Sale",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
  },
  {
    title: "Spacious Maissonette in Thika",
    price: "KES 35M",
    location: "Thika, Kenya",
    beds: 5,
    baths: 4,
    sqft: "6,200",
    tag: "Premium",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
  },
  {
    title: "Bungalow in Thika",
    price: "KES 8M",
    location: "Thika, Kenya",
    beds: 0,
    baths: 2,
    sqft: "3,500",
    tag: "Commercial",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
  },
  {
    title: "Upcoming project",
    price: "KES 5M",
    location: "Nairobi South",
    beds: 0,
    baths: 0,
    sqft: "10,000",
    tag: "Land",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop",
  },
];

export default function Properties() {
  return (
    <section id="properties" className="py-24 px-4 bg-surface-dim">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="inline-block text-gold text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Browse Our Listings
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
            Featured Properties
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Property cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {properties.map((property) => (
            <motion.div
              key={property.title}
              variants={staggerItem}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Tag badge */}
                <span className="absolute top-3 left-3 bg-gradient-to-r from-gold to-gold-light text-primary-dark text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {property.tag}
                </span>

                {/* Price */}
                <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-primary font-bold text-lg px-3 py-1 rounded-lg shadow-md">
                  {property.price}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-base text-gray-900 mb-2 leading-snug">
                  {property.title}
                </h3>

                <p className="text-sm text-gray-500 mb-3 flex items-center gap-1.5">
                  <i className="fas fa-map-marker-alt text-gold text-xs" />
                  {property.location}
                </p>

                {/* Meta details */}
                <div className="flex gap-4 text-xs text-gray-400 mb-4 pt-3 border-t border-gray-100">
                  {property.beds > 0 && (
                    <span className="flex items-center gap-1">
                      <i className="fas fa-bed text-primary" />
                      {property.beds} Beds
                    </span>
                  )}
                  {property.baths > 0 && (
                    <span className="flex items-center gap-1">
                      <i className="fas fa-bath text-primary" />
                      {property.baths} Baths
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <i className="fas fa-ruler-combined text-primary" />
                    {property.sqft} sqft
                  </span>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold transition-colors duration-200 group/link"
                >
                  View Details
                  <i className="fas fa-arrow-right text-xs group-hover/link:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

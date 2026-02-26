"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  staggerContainer,
  staggerItem,
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
  slug?: string;
}

const properties: Property[] = [
  {
    title: "4 Bedroom + DSQ Maisonette in Thika",
    price: "KES 20M",
    location: "Thika Landless, Kiambu",
    beds: 4,
    baths: 4,
    sqft: "333 m²",
    tag: "For Sale",
    image:
      "/properties/maisonette-in-thika/aerial-view.jpg",
    slug: "maisonette-in-thika",
  },
  {
    title: "3 Bedroom + DSQ in Kitengela",
    price: "Contact Us",
    location: "Kitengela, Kajiado",
    beds: 3,
    baths: 3,
    sqft: "179 m²",
    tag: "For Sale",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
    slug: "bungalows-in-kitengela",
  },
  {
    title: "4 Bedroom Bungalow in Thika",
    price: "SOLD",
    location: "Thika Landless, Kiambu",
    beds: 4,
    baths: 2,
    sqft: "—",
    tag: "Sold",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop",
  },
  {
    title: "Upcoming Project",
    price: "Starting KES 4M",
    location: "Kenya",
    beds: 0,
    baths: 0,
    sqft: "TBA",
    tag: "Coming Soon",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
  },
];

export default function Properties() {
  return (
    <section id="properties" className="py-24 px-4 bg-surface-dim">
      <div className="max-w-7xl mx-auto">
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
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
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
                <h3 className="font-bold text-base font-raleway text-gray-900 mb-2 leading-snug">
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
                      <i className="fas fa-bed text-primary/40" />
                      {property.beds} Beds
                    </span>
                  )}
                  {property.baths > 0 && (
                    <span className="flex items-center gap-1">
                      <i className="fas fa-bath text-primary/40" />
                      {property.baths} Baths
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <i className="fas fa-ruler-combined text-primary/40" />
                    {property.sqft} sqft
                  </span>
                </div>

                {property.slug ? (
                  <Link
                    href={`/properties/${property.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold transition-colors duration-200 group/link"
                  >
                    View Details
                    <i className="fas fa-arrow-right text-xs group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                ) : (
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold transition-colors duration-200 group/link"
                  >
                    {property.tag === "Coming Soon" ? "Get Notified" : property.tag === "Sold" ? "Contact Us" : "View Details"}
                    <i className="fas fa-arrow-right text-xs group-hover/link:translate-x-1 transition-transform duration-200" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

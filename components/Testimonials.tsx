"use client";

import { motion } from "motion/react";
import {
  staggerContainer,
  staggerItem,
  sectionReveal,
  viewportConfig,
} from "@/lib/animations";

interface Testimonial {
  name: string;
  role: string;
  message: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John Kipchoge",
    role: "Property Buyer",
    message:
      "SIBBS helped me find the perfect property. Their team was professional and transparent throughout the process. Highly recommended!",
    initials: "JK",
  },
  {
    name: "Sarah Mwangi",
    role: "Investor",
    message:
      "I invested in a land plot through SIBBS and it has appreciated significantly. Great investment opportunity and excellent service!",
    initials: "SM",
  },
  {
    name: "Peter Okonkwo",
    role: "Business Owner",
    message:
      "Their rental management service is excellent. I trust them completely with my properties. Returns have exceeded expectations.",
    initials: "PO",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #2c3892 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
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
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Testimonial cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={staggerItem}
              className="group relative bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-gold to-gold-light rounded-full text-primary-dark text-xs shadow-md">
                  <i className="fas fa-quote-left" />
                </span>
              </div>

              {/* Message */}
              <p className="text-gray-600 leading-relaxed mb-6 mt-2">
                &quot;{testimonial.message}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white text-sm font-bold shadow-md">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-base font-bold text-primary leading-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs font-semibold text-gold uppercase tracking-wide">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  fadeUp,
  slideLeft,
  slideRight,
  staggerContainer,
  sectionReveal,
  springGentle,
  viewportConfig,
} from "@/lib/animations";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const contactInfo = [
  {
    icon: "fas fa-phone-alt",
    label: "Call Us",
    value: "+254 700 000 000",
    href: "tel:+254700000000",
  },
  {
    icon: "fas fa-envelope",
    label: "Email Us",
    value: "info@sibbs.co.ke",
    href: "mailto:info@sibbs.co.ke",
  },
  {
    icon: "fas fa-map-marker-alt",
    label: "Visit Us",
    value: "Nairobi, Kenya",
    href: "#",
  },
  {
    icon: "fas fa-clock",
    label: "Working Hours",
    value: "Mon – Fri, 8am – 6pm",
    href: "#",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
    alert("Thank you! We will get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 px-4 bg-primary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/3 rounded-full blur-[80px]" />
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
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-raleway mb-4 tracking-tight">
            Get in Touch
          </h2>
          <div className="section-divider" />
          <p className="text-lg text-gray-200/80 mt-4 max-w-xl mx-auto">
            Have questions? We&apos;re here to help you find the perfect property.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact info sidebar */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            transition={springGentle}
          >
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-start gap-4 group p-4 rounded-xl hover:bg-white/5 transition-colors duration-200"
              >
                <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-primary-dark shadow-lg shadow-gold/15">
                  <i className={`${item.icon} text-sm`} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-base font-semibold text-white group-hover:text-gold transition-colors duration-200">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Social links */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 px-4">
                Follow Us
              </p>
              <div className="flex gap-3 px-4">
                {[
                  { icon: "fab fa-facebook-f", href: "#" },
                  { icon: "fab fa-instagram", href: "#" },
                  { icon: "fab fa-twitter", href: "#" },
                  { icon: "fab fa-linkedin-in", href: "#" },
                ].map((social) => (
                  <a
                    key={social.icon}
                    href={social.href}
                    className="w-9 h-9 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-gold hover:text-primary-dark hover:border-gold transition-all duration-200 text-sm"
                  >
                    <i className={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-2xl"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            transition={springGentle}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200 text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200 text-sm"
                />
              </div>
            </div>

            <div className="mb-5">
              <label
                htmlFor="phone"
                className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+254 xxx xxx xxx"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200 text-sm"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell us about your property needs..."
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all duration-200 text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-gradient-to-r from-gold to-gold-light text-primary-dark px-8 py-3 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 hover:-translate-y-px"
            >
              Send Message <i className="fas fa-paper-plane ml-2 text-xs" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

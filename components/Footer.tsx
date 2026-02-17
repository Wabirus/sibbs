"use client";

import { motion } from "motion/react";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "@/lib/animations";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#properties", label: "Properties" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { icon: "fab fa-facebook-f", href: "#", label: "Facebook" },
  { icon: "fab fa-instagram", href: "#", label: "Instagram" },
  { icon: "fab fa-twitter", href: "#", label: "Twitter" },
  { icon: "fab fa-linkedin-in", href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-primary text-white py-16 px-4"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Brand */}
          <motion.div variants={staggerItem} className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-32 h-10 relative">
                <img
                  src="/images/sibbs-logo.png"
                  alt="SIBBS Real Estate"
                  className="object-contain w-full h-full invert grayscale brightness-150 mix-blend-screen"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Your trusted partner in Kenyan real estate investment.
              Premium properties, smart investments, expert advice.
            </p>
            {/* Social icons */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/6 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-primary-dark hover:border-gold transition-all duration-200 text-sm"
                >
                  <i className={social.icon} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={staggerItem}>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors duration-200 text-sm flex items-center gap-2"
                  >
                    <i className="fas fa-chevron-right text-[8px] text-gold/40" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={staggerItem}>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {[
                "Property Sales",
                "Land Investment",
                "Rental Management",
                "Consultancy",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-gold transition-colors duration-200 text-sm flex items-center gap-2"
                  >
                    <i className="fas fa-chevron-right text-[8px] text-gold/40" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={staggerItem}>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold mb-5">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+254700000000"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  <i className="fas fa-phone-alt text-gold/60 text-xs" />
                  +254 700 000 000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@sibbs.co.ke"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  <i className="fas fa-envelope text-gold/60 text-xs" />
                  info@sibbs.co.ke
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-400 text-sm">
                <i className="fas fa-map-marker-alt text-gold/60 text-xs" />
                Nairobi, Kenya
              </li>
              <li className="flex items-center gap-2.5 text-gray-400 text-sm">
                <i className="fas fa-clock text-gold/60 text-xs" />
                Mon – Fri, 8am – 6pm
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {currentYear} SIBBS Real Estate. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

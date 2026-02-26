"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { fadeIn, springSnappy } from "@/lib/animations";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#properties", label: "Properties" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize past breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* ── Top Contact Bar ─────────────────────────────────── */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 bg-gradient-to-r from-primary-dark via-primary to-primary-light border-b border-gold/30 text-white py-2 px-4"
      >
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-8 text-sm">
          <a
            href="tel:+254700000000"
            className="flex items-center gap-2 hover:text-gold transition-colors duration-200"
          >
            <span className="flex items-center justify-center w-5 h-5 bg-white/10 rounded-full text-[10px]">
              <i className="fas fa-phone-alt" />
            </span>
            +254 700 000 000
          </a>
          <div className="w-px h-4 bg-white/20" />
          <a
            href="mailto:info@sibbs.co.ke"
            className="flex items-center gap-2 hover:text-gold transition-colors duration-200"
          >
            <span className="flex items-center justify-center w-5 h-5 bg-white/10 rounded-full text-[10px]">
              <i className="fas fa-envelope" />
            </span>
            info@sibbs.co.ke
          </a>
        </div>
      </motion.div>

      {/* ── Main Navigation ─────────────────────────────────── */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        className={`fixed top-[36px] w-full z-40 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-primary/5"
          : "bg-white shadow-sm"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <Link href="#home" className="flex items-center group">
              <Image
                src="/logo.png"
                alt="SIBBS Real Estate"
                width={120}
                height={40}
                className="h-10 w-auto group-hover:opacity-90 transition-opacity duration-200"
                priority
              />
            </Link>

            {/* Desktop nav links */}
            <ul className="hidden md:flex list-none gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="relative px-4 py-2 text-[15px] font-semibold text-gray-600 hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-light text-primary-dark px-5 py-2 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 hover:-translate-y-px"
            >
              <i className="fas fa-phone-alt text-xs" />
              Get a Quote
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg hover:bg-primary/5 transition-colors"
              aria-label="Toggle navigation"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-0.5 bg-primary mb-1.5 origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="block w-5 h-0.5 bg-primary mb-1.5"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-0.5 bg-primary origin-center"
              />
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={springSnappy}
              className="md:hidden bg-white border-t border-gray-100 shadow-lg"
            >
              <ul className="px-4 py-4 space-y-1">
                {navItems.map((item, idx) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-2.5 text-gray-700 font-semibold rounded-lg hover:bg-primary/5 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
                <li className="pt-2">
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="block text-center bg-gradient-to-r from-gold to-gold-light text-primary-dark px-5 py-2.5 rounded-full font-bold text-sm"
                  >
                    Get a Quote
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

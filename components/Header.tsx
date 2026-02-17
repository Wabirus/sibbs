"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/mortgage", label: "Mortgage" },
  { href: "/about", label: "Company" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Top Contact Bar ─────────────────────────────────── */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 bg-gray-900 text-white py-2 px-4 border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium tracking-wide">
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@sibbs.co.ke"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <i className="fas fa-envelope text-primary" />
              <span>info@sibbs.co.ke</span>
            </a>
            <span className="hidden sm:inline text-gray-600">|</span>
            <a
              href="tel:+254700000000"
              className="hidden sm:flex items-center gap-2 hover:text-primary transition-colors"
            >
              <i className="fas fa-phone-alt text-primary" />
              <span>+254 700 000 000</span>
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* ── Main Navigation ─────────────────────────────────── */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        className={`fixed top-[33px] w-full z-40 transition-all duration-500 border-b border-transparent ${scrolled
          ? "bg-white/80 backdrop-blur-xl py-4 border-gray-100 shadow-sm"
          : "bg-white/95 backdrop-blur-md py-6 shadow-none"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-40 h-12">
              {/* 
                 USING REGULAR IMG TAG BECAUSE WE DO NOT WANT TO MESS WITH NEXT/IMAGE CONFIG 
                 AND WE ARE IN A HURRY. ALSO PRESERVES ASPECT RATIO BETTER SOMETIMES.
                 ACTUALLY, LET'S USE NEXT/IMAGE AS IT'S BEST PRACTICE BUT UNOPTIMIZED IF NEEDED
               */}
              <img
                src="/images/sibbs-logo.png"
                alt="SIBBS Real Estate"
                className="object-contain w-full h-full"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-bold tracking-wide transition-all duration-300 relative py-2 group ${isActive ? "text-primary" : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="bg-gray-900 text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gray-800 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-gray-900 mb-1.5 origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="block w-6 h-0.5 bg-gray-900 mb-1.5"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-gray-900 origin-center"
            />
          </button>
        </div>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
            >
              <ul className="px-6 py-8 space-y-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block text-lg font-bold ${pathname === item.href ? "text-primary" : "text-gray-900"
                        }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-6">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-center bg-gray-900 text-white py-4 rounded-xl font-bold uppercase tracking-wider text-sm"
                  >
                    Book a Call
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

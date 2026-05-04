"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isLive, setIsLive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Target: 23 May of the current year (or next year if already passed)
    const now = new Date();
    let targetYear = now.getFullYear();
    let targetDate = new Date(`May 23, ${targetYear} 09:00:00`).getTime();
    
    if (now.getTime() > targetDate) {
      targetYear++;
      targetDate = new Date(`May 23, ${targetYear} 09:00:00`).getTime();
    }

    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const distance = targetDate - currentTime;

      if (distance < 0) {
        clearInterval(interval);
        setIsLive(true);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <section className="relative w-full py-6 my-2 overflow-hidden border-y border-gray-200/50">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/properties/maisonette-in-thika/knox2-1.webp"
          alt="Luxury Home Background"
          fill
          className="object-cover opacity-[0.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white to-white/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Header */}
          <div className="text-center lg:text-left">
            <motion.h2 
              variants={fadeUp}
              className="text-2xl md:text-3xl font-extrabold text-primary mb-1 font-raleway tracking-tight"
            >
              Ground Breaking Countdown
            </motion.h2>
            <motion.p 
              variants={fadeUp}
              className="text-gray-500 font-nunito text-base md:text-lg"
            >
              Join us on <strong className="font-extrabold text-gold tracking-wider">23RD MAY</strong>.
            </motion.p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Countdown / Live State */}
            <AnimatePresence mode="wait">
              {isLive ? (
                <motion.div
                  key="live"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="py-4"
                >
                  <h3 className="text-2xl font-bold text-gold">Event Started</h3>
                </motion.div>
              ) : (
                <motion.div 
                  key="countdown"
                  variants={staggerItem}
                  className="flex justify-center gap-3 md:gap-4"
                >
                  <TimeUnit value={timeLeft.days} label="Days" />
                  <TimeUnit value={timeLeft.hours} label="Hrs" />
                  <TimeUnit value={timeLeft.minutes} label="Min" />
                  <TimeUnit value={timeLeft.seconds} label="Sec" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* CTA Button */}
            <motion.div variants={fadeUp} className="shrink-0">
              <Link
                href="#contact"
                className="inline-block bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-primary-dark font-bold text-xs tracking-wider uppercase px-8 py-3.5 rounded-full shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Your Visit
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center group">
      <div className="relative w-12 h-12 md:w-14 md:h-14 bg-white/60 backdrop-blur-md rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-1.5 group-hover:border-gold/40 group-hover:shadow-gold/20 transition-all duration-300">
        <span className="text-xl md:text-2xl font-extrabold text-primary group-hover:text-gold transition-colors duration-300">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-[10px] md:text-xs font-semibold tracking-widest text-gray-400 uppercase">
        {label}
      </span>
    </div>
  );
}

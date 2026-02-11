import type { Variants, Transition } from "motion/react";

// ─── Shared transition presets ────────────────────────────────
export const springGentle: Transition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 0.8,
};

export const springSnappy: Transition = {
    type: "spring",
    stiffness: 200,
    damping: 25,
    mass: 0.6,
};

export const easeOut: Transition = {
    duration: 0.6,
    ease: [0.25, 0.46, 0.45, 0.94],
};

// ─── Fade-up entrance (hero text, section headings) ──────────
export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

// ─── Fade-in (general purpose) ─────────────────────────────
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

// ─── Scale-up entrance (cards, badges) ──────────────────────
export const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
};

// ─── Slide from left ────────────────────────────────────────
export const slideLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
};

// ─── Slide from right ───────────────────────────────────────
export const slideRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
};

// ─── Stagger container ─────────────────────────────────────
export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

// ─── Stagger item (for cards in grids) ──────────────────────
export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: springGentle,
    },
};

// ─── Section heading reveal ─────────────────────────────────
export const sectionReveal: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { ...easeOut, duration: 0.5 },
    },
};

// ─── Viewport trigger defaults (used with whileInView) ──────
export const viewportConfig = {
    once: true,
    amount: 0.2 as const,
};

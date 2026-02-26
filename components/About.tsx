"use client";

import { motion } from "motion/react";
import {
    fadeUp,
    staggerContainer,
    staggerItem,
    sectionReveal,
    viewportConfig,
} from "@/lib/animations";

const coreValues = [
    {
        icon: "fas fa-balance-scale",
        title: "Integrity",
        description: "We do business with honesty and transparency",
    },
    {
        icon: "fas fa-users",
        title: "Customer Focus",
        description: "Our clients' satisfaction is our priority",
    },
    {
        icon: "fas fa-award",
        title: "Professionalism",
        description:
            "We are committed to high standards in developing and selling our properties",
    },
    {
        icon: "fas fa-lightbulb",
        title: "Innovation",
        description: "We embrace modern construction designs",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="py-24 px-4 bg-white relative overflow-hidden"
        >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 1px 1px, #1e2a78 1px, transparent 0)",
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
                        About Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold font-raleway text-primary mb-4 tracking-tight">
                        Who We Are
                    </h2>
                    <div className="section-divider" />
                    <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed font-nunito">
                        SIBBS is a trusted real estate company in Kenya providing suitable
                        residential housing solutions that are affordable and of
                        high-quality standards. We are keen on client satisfaction and we
                        pride ourselves as the go-to company for home owners who want to
                        turn their dreams into reality.
                    </p>
                </motion.div>

                {/* Vision & Mission */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                >
                    {/* Vision */}
                    <motion.div
                        variants={staggerItem}
                        className="group relative bg-gradient-to-br from-primary to-primary-light p-8 rounded-2xl text-white shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-primary-dark text-lg shadow-lg shadow-gold/20">
                                <i className="fas fa-eye" />
                            </div>
                            <h3 className="text-xl font-bold font-raleway">Our Vision</h3>
                        </div>
                        <p className="text-gray-200 leading-relaxed font-nunito">
                            To be the preferred real estate partner, recognized for quality,
                            integrity, and a proven track record of delivering dream homes
                            with exceptional client satisfaction.
                        </p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        variants={staggerItem}
                        className="group relative bg-gradient-to-br from-primary to-primary-light p-8 rounded-2xl text-white shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-primary-dark text-lg shadow-lg shadow-gold/20">
                                <i className="fas fa-bullseye" />
                            </div>
                            <h3 className="text-xl font-bold font-raleway">Our Mission</h3>
                        </div>
                        <p className="text-gray-200 leading-relaxed font-nunito">
                            To develop modern, affordable, high-value homes that meet diverse
                            lifestyle needs while building lasting client relationships
                            founded on trust.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Core Values */}
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="text-center mb-10"
                >
                    <h3 className="text-2xl md:text-3xl font-extrabold font-raleway text-primary tracking-tight">
                        Our Core Values
                    </h3>
                    <div className="section-divider" />
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                >
                    {coreValues.map((value) => (
                        <motion.div
                            key={value.title}
                            variants={staggerItem}
                            className="group relative bg-white border border-gray-100 p-7 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-center"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-primary-dark text-xl mb-5 mx-auto shadow-lg shadow-gold/20 group-hover:scale-110 transition-transform duration-300">
                                <i className={value.icon} />
                            </div>

                            <h4 className="text-base font-bold font-raleway text-primary mb-2">
                                {value.title}
                            </h4>
                            <p className="text-gray-500 text-sm leading-relaxed font-nunito">
                                {value.description}
                            </p>

                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

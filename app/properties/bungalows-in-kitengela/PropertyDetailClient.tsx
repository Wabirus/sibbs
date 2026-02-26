"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeUp, sectionReveal, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import styles from "@/components/PropertyDetail.module.css";

const images = [
    { src: "/properties/bungalows-in-kitengela/kitengela-bungalow.png", alt: "Kitengela Bungalow front view" },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop", alt: "Living room interior" },
    { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c0?w=800&h=500&fit=crop", alt: "Kitchen area" },
    { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop", alt: "Master bedroom" },
];

const amenities = [
    { icon: "fas fa-bed", label: "Bedrooms", value: "3 Ensuite" },
    { icon: "fas fa-ruler-combined", label: "Plinth Area", value: "179 m²" },
    { icon: "fas fa-car", label: "Parking", value: "Large" },
    { icon: "fas fa-home", label: "DSQ", value: "Included" },
    { icon: "fas fa-shield-alt", label: "Community", value: "Gated" },
    { icon: "fas fa-bolt", label: "Fence", value: "Electric" },
];

const highlights = [
    "3 bedrooms all ensuite",
    "Master bedroom with double vanities",
    "Open kitchen with large pantry",
    "Guest cloakroom",
    "Provision for harnessing rain water",
    "Large windows for natural lighting",
    "Spacious laundry room",
    "Large parking area",
    "Electric fence for security",
    "Individual title deed",
    "Green spaces within the gated community",
    "Cabro internal access road",
    "179 sqm plinth area",
];

export default function PropertyDetailClient() {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const closeLightbox = useCallback(() => setLightboxIndex(null), []);
    const prevImage = useCallback(() => setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null)), []);
    const nextImage = useCallback(() => setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null)), []);

    useEffect(() => {
        if (lightboxIndex === null) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "ArrowRight") nextImage();
        };
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKey);
        };
    }, [lightboxIndex, closeLightbox, prevImage, nextImage]);

    return (
        <main className={styles.main}>
            {/* Navigation */}
            <nav className={styles.breadcrumb}>
                <Link href="/" className={styles.breadcrumbLink}>
                    <i className="fas fa-home" /> Home
                </Link>
                <span className={styles.breadcrumbSep}>/</span>
                <Link href="/#properties" className={styles.breadcrumbLink}>
                    Properties
                </Link>
                <span className={styles.breadcrumbSep}>/</span>
                <span className={styles.breadcrumbCurrent}>3 Bedroom + DSQ in Kitengela</span>
            </nav>

            {/* Hero Section */}
            <motion.section
                className={styles.heroSection}
                variants={sectionReveal}
                initial="hidden"
                animate="visible"
            >
                <div className={styles.heroContent}>
                    <span className={styles.tag}>For Sale</span>
                    <h1 className={styles.title}>3 Bedroom + DSQ in Gated Community</h1>
                    <p className={styles.location}>
                        <i className="fas fa-map-marker-alt" /> Kitengela, Kajiado County
                    </p>
                    <p className={styles.price}>Contact Us for Pricing</p>
                </div>
            </motion.section>

            {/* Image Gallery */}
            <motion.section
                className={styles.gallerySection}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
            >
                <div className={styles.galleryGrid}>
                    {images.map((img, i) => (
                        <motion.div
                            key={img.alt}
                            variants={staggerItem}
                            className={`${styles.galleryItem} ${i === 0 ? styles.galleryMain : ""}`}
                            onClick={() => setLightboxIndex(i)}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes={i === 0 ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 50vw, 20vw"}
                                className={styles.galleryImage}
                                priority={i === 0}
                            />
                            <div className={styles.galleryOverlay}>
                                <i className="fas fa-expand" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Amenities */}
            <motion.section
                className={styles.amenitiesSection}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
            >
                <h2 className={styles.sectionTitle}>Property Amenities</h2>
                <div className={styles.amenitiesGrid}>
                    {amenities.map((a) => (
                        <motion.div key={a.label} variants={staggerItem} className={styles.amenityCard}>
                            <div className={styles.amenityIcon}>
                                <i className={a.icon} />
                            </div>
                            <span className={styles.amenityValue}>{a.value}</span>
                            <span className={styles.amenityLabel}>{a.label}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Property Highlights */}
            <motion.section
                className={styles.highlightsSection}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
            >
                <h2 className={styles.sectionTitle}>Property Highlights</h2>
                <ul className={styles.highlightsList}>
                    {highlights.map((h) => (
                        <li key={h} className={styles.highlightItem}>
                            <i className="fas fa-check-circle" />
                            {h}
                        </li>
                    ))}
                </ul>
            </motion.section>

            {/* Google Maps */}
            <motion.section
                className={styles.mapSection}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
            >
                <h2 className={styles.sectionTitle}>Location</h2>
                <div className={styles.mapContainer}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63821.76074498056!2d36.93!3d-1.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0e9ca3b3e4c3%3A0x9b4e2b0f4a4e3a5d!2sKitengela!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                        width="100%"
                        height="450"
                        style={{ border: 0, borderRadius: "16px" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Kitengela Location Map"
                    />
                </div>
            </motion.section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <h2 className={styles.ctaTitle}>Interested in this property?</h2>
                <p className={styles.ctaText}>
                    Contact us today for a viewing or more information about this beautiful 3 bedroom + DSQ in a gated community in Kitengela.
                </p>
                <div className={styles.ctaButtons}>
                    <Link href="/#contact" className={styles.ctaPrimary}>
                        <i className="fas fa-phone" /> Contact Us
                    </Link>
                    <Link href="/" className={styles.ctaSecondary}>
                        <i className="fas fa-arrow-left" /> Back to Home
                    </Link>
                </div>
            </section>

            {/* Lightbox Modal */}
            {lightboxIndex !== null && (
                <div className={styles.lightboxOverlay} onClick={closeLightbox}>
                    <button className={styles.lightboxClose} onClick={closeLightbox} aria-label="Close">
                        <i className="fas fa-times" />
                    </button>

                    <button
                        className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        aria-label="Previous image"
                    >
                        <i className="fas fa-chevron-left" />
                    </button>

                    <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        <img
                            src={images[lightboxIndex].src}
                            alt={images[lightboxIndex].alt}
                            className={styles.lightboxImage}
                            key={lightboxIndex}
                        />
                    </div>

                    <button
                        className={`${styles.lightboxNav} ${styles.lightboxNext}`}
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        aria-label="Next image"
                    >
                        <i className="fas fa-chevron-right" />
                    </button>

                    <div className={styles.lightboxCaption}>{images[lightboxIndex].alt}</div>
                    <div className={styles.lightboxCounter}>{lightboxIndex + 1} / {images.length}</div>
                </div>
            )}
        </main>
    );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { fadeUp, sectionReveal, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import styles from "@/components/PropertyDetail.module.css";

const images = [
    { src: "/properties/bungalow-in-thika/5872941386271755598.jpg", alt: "Front view of The KNOX Residence 1" },
    { src: "/properties/bungalow-in-thika/5872941386271755592.jpg", alt: "Spacious living room" },
    { src: "/properties/bungalow-in-thika/5872941386271755596.jpg", alt: "Living space" },
    { src: "/properties/bungalow-in-thika/5872941386271755591.jpg", alt: "Modern kitchen area" },
    { src: "/properties/bungalow-in-thika/5872941386271755593.jpg", alt: "Kitchen counter" },
    { src: "/properties/bungalow-in-thika/5872941386271755594.jpg", alt: "Bedroom with wardrobe" },
    { src: "/properties/bungalow-in-thika/5872941386271755595.jpg", alt: "Bathroom" },
    { src: "/properties/bungalow-in-thika/5872941386271755599.jpg", alt: "Backyard at night" },
    { src: "/properties/bungalow-in-thika/5872941386271755597.jpg", alt: "Exterior side view" },
];

const amenities = [
    { icon: "fas fa-bed", label: "Bedrooms", value: "4 Beds, 2 Baths" },
    { icon: "fas fa-ruler-combined", label: "Plinth Area", value: "260 m²" },
    { icon: "fas fa-car", label: "Parking", value: "Ample" },
    { icon: "fas fa-home", label: "Property", value: "Bungalow" },
    { icon: "fas fa-shield-alt", label: "Security", value: "Gated" },
    { icon: "fas fa-tint", label: "Water", value: "Borehole" },
];

const highlights = [
    "260 m² plinth area",
    "4 bedrooms, 2 bathrooms",
    "Spacious kitchen with modern fittings",
    "Guest cloakroom",
    "Beautifully landscaped front and back yards",
    "Ample parking space",
    "Consistent supply of water from a borehole",
    "Secure environment",
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
                <span className={styles.breadcrumbCurrent}>The KNOX Residence 1</span>
            </nav>

            {/* Hero Section */}
            <motion.section
                className={styles.heroSection}
                variants={sectionReveal}
                initial="hidden"
                animate="visible"
            >
                <div className={styles.heroContent}>
                    <span className={styles.tag}>Sold</span>
                    <h1 className={styles.title}>The KNOX Residence 1</h1>
                    <p className={styles.location}>
                        <i className="fas fa-map-marker-alt" /> Thika Landless, Kiambu County
                    </p>
                    <p className={styles.price}>SOLD</p>
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
                        src="https://maps.google.com/maps?q=-1.464752,37.044907&hl=en&z=14&output=embed"
                        width="100%"
                        height="450"
                        style={{ border: 0, borderRadius: "16px" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Thika Location Map"
                    />
                </div>
            </motion.section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <h2 className={styles.ctaTitle}>Interested in this property?</h2>
                <p className={styles.ctaText}>
                    Contact us today for a viewing or more information about our upcoming developments in Thika Landless.
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

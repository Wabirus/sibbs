import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Properties from "@/components/Properties";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "SIBBS Real Estate",
            "image": "https://wearesibbs.com/sibbs-logo-blue.jpg",
            "@id": "https://wearesibbs.com",
            "url": "https://wearesibbs.com",
            "telephone": "+254 7433 63186",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kwanza Twin Towers, G2 Eastern Bypass",
              "addressLocality": "Ruiru",
              "addressRegion": "Kiambu",
              "postalCode": "00232",
              "addressCountry": "KE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -1.147,
              "longitude": 36.961
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "08:00",
              "closes": "17:00"
            },
            "sameAs": [
              "https://www.facebook.com/wearesibbs",
              "https://www.instagram.com/wearesibbs",
              "https://twitter.com/wearesibbs"
            ]
          }),
        }}
      />
      <Header />
      <Hero />
      <Services />
      <About />
      <Properties />
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-6 border border-primary/10 rounded-xl">
          <h3 className="text-xl font-bold text-primary">Financing available</h3>
          <div className="flex items-center">
            <Image src="/images/kcb-group-plc-logo.webp" alt="KCB Logo" width={80} height={30} style={{ objectFit: 'contain' }} />
            <span className="ml-3 text-sm font-bold text-gray-400">Official Partner</span>
          </div>
        </div>
      </section>
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

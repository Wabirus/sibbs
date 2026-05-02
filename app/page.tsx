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

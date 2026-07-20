"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../../components/Footer";

export default function SustainabilityPage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#F7F5F0] text-deep font-sans">
      
      {/* ── HEADER NAVIGATION ── */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
        <a href="/" className="text-gold tracking-[4px] text-[14px] uppercase font-light">
          ← Back to Home
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#E8E4D9] z-0">
          <motion.div style={{ y: imgY }} className="absolute inset-0 opacity-40">
             <div className="absolute inset-0 bg-[url('/images/redesign/nature.png')] bg-cover bg-center mix-blend-multiply"></div>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#F7F5F0] to-transparent"></div>
        </div>
        
        <div className="relative z-10 mt-20">
          <div className="tracking-[8px] mb-8 text-[#5C6E58] text-[12px] uppercase font-bold">Our Commitment</div>
          <h1 className="font-light leading-none tracking-tighter font-serif text-[60px] md:text-[100px] text-deep mb-6">
            Honoring the <em className="not-italic text-[#5C6E58]">Earth</em>
          </h1>
          <p className="uppercase tracking-[4px] text-muted max-w-2xl mx-auto leading-relaxed text-[11px] font-semibold">
            Preserving Heritage. Protecting the Planet.
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-32 px-6 lg:px-32 relative z-10 bg-[#F7F5F0]">
        <div className="max-w-[1000px] mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
            <div className="reveal">
              <div className="text-[60px] font-serif text-[#5C6E58] mb-4 font-light">01</div>
              <h2 className="text-[28px] font-light mb-6 text-deep font-serif">Conscious Craftsmanship</h2>
              <p className="text-[16px] leading-loose text-muted font-serif">
                At House of Sonika, sustainability isn't a trend; it's the foundation of everything we do. Our deeply rooted connection with the artisans of Jaipur means we prioritize ethical practices that honor both the creators and the environment. We believe that true luxury lies in objects that are made with intention.
              </p>
            </div>
            
            <div className="reveal">
              <div className="text-[60px] font-serif text-[#5C6E58] mb-4 font-light">02</div>
              <h2 className="text-[28px] font-light mb-6 text-deep font-serif">Natural Materials</h2>
              <p className="text-[16px] leading-loose text-muted font-serif">
                Our home furnishings and ethnic wear are crafted primarily from pure, breathable cotton sourced responsibly. We actively minimize the use of synthetic blends to ensure our products are biodegradable, gentle on your skin, and kind to the earth.
              </p>
            </div>

            <div className="reveal">
              <div className="text-[60px] font-serif text-[#5C6E58] mb-4 font-light">03</div>
              <h2 className="text-[28px] font-light mb-6 text-deep font-serif">Plant-Based Dyes</h2>
              <p className="text-[16px] leading-loose text-muted font-serif">
                Many of our signature block prints utilize natural, plant-based dyes like Indigo and Madder root. This age-old technique creates our distinct earthy hues and prevents harmful chemicals from entering the local water systems in Rajasthan.
              </p>
            </div>

            <div className="reveal">
              <div className="text-[60px] font-serif text-[#5C6E58] mb-4 font-light">04</div>
              <h2 className="text-[28px] font-light mb-6 text-deep font-serif">Empowering Artisans</h2>
              <p className="text-[16px] leading-loose text-muted font-serif">
                By choosing House of Sonika, you are directly supporting the livelihoods of skilled craftspeople. We ensure fair wages and safe working conditions, keeping the ancestral arts of block printing alive for the next generation.
              </p>
            </div>
          </div>
          
          <div className="reveal py-20 border-y border-[#5C6E58]/20 text-center">
             <p className="text-[32px] md:text-[40px] italic text-[#5C6E58] font-serif leading-tight">
               "A beautiful home shouldn't <br/> cost the earth."
             </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

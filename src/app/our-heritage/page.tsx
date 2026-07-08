"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { WhatsAppIcon } from "../../components/Icons";
import Footer from "../../components/Footer";

export default function OurHeritage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax layers
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main ref={containerRef} className="bg-ivory text-deep min-h-[300vh] relative font-sans">
      
      {/* ── 1. HERO ── */}
      <section className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-deep text-cream">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          {/* Placeholder for Hero Image */}
          <div className="w-full h-full bg-[url('/images/heritage/hero.png')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep"></div>
        </motion.div>
        
        <motion.div style={{ opacity: opacity1 }} className="relative z-10 text-center px-6">
          <div className="text-[12px] tracking-[5px] uppercase text-gold mb-6 font-semibold">The Story of Jaipur</div>
          <h1 className="text-[50px] md:text-[80px] font-light font-serif leading-none mb-6">
            Our <em className="italic text-rose/90">Heritage</em>
          </h1>
          <p className="max-w-xl mx-auto text-fluid-p text-cream/70 font-light leading-relaxed">
            Every thread, every color, every block tells a story of centuries-old craftsmanship. Welcome to the heart of Rajasthan.
          </p>
        </motion.div>
      </section>

      {/* ── 2. THE ART OF CARVING ── */}
      <section className="min-h-screen w-full relative flex flex-col md:flex-row items-center justify-center py-20 px-6 lg:px-20 gap-12 bg-ivory">
        <div className="flex-1 w-full relative">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="w-full aspect-[4/5] bg-sand/20 rounded-t-full overflow-hidden border border-sand/40 relative shadow-2xl"
          >
             {/* Placeholder for Carving Block */}
             <div className="w-full h-full bg-[url('/images/heritage/wood.png')] bg-cover bg-center opacity-80 mix-blend-multiply"></div>
          </motion.div>
        </div>
        
        <div className="flex-1 max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="text-[10px] tracking-[4px] uppercase text-rose mb-4 font-semibold">Step 01</div>
            <h2 className="text-[32px] md:text-[48px] font-serif leading-tight mb-6 text-deep">
              The Chhipa's <em className="italic text-gold">Canvas</em>
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              It begins with a piece of teak wood. Master artisans, known as 'Chhipas', meticulously hand-carve intricate floral and geometric patterns into the wood. A single block can take days to perfect, and a complex bedcover design might require up to a dozen different blocks to layer the colors.
            </p>
            <div className="h-px w-20 bg-gold/50"></div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. COLORS OF THE EARTH ── */}
      <section className="min-h-screen w-full relative flex flex-col-reverse md:flex-row items-center justify-center py-20 px-6 lg:px-20 gap-12 bg-sand/10">
        <div className="flex-1 max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="text-[10px] tracking-[4px] uppercase text-rose mb-4 font-semibold">Step 02</div>
            <h2 className="text-[32px] md:text-[48px] font-serif leading-tight mb-6 text-deep">
              Colors of the <em className="italic text-gold">Earth</em>
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              We believe in the power of nature. Indigo from the plant, red from madder root, and yellow from turmeric. The fabrics are washed, dyed, and laid out to dry under the fierce Rajasthan sun, which bakes the vibrant natural colors deep into the cotton fibers.
            </p>
            <div className="h-px w-20 bg-gold/50"></div>
          </motion.div>
        </div>

        <div className="flex-1 w-full relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="w-full aspect-[4/3] bg-sand/20 overflow-hidden relative shadow-2xl"
          >
             {/* Placeholder for Dyes/Fabric */}
             <div className="w-full h-full bg-[url('/images/heritage/dyes.png')] bg-cover bg-center opacity-80 mix-blend-multiply"></div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. THE FINAL MASTERPIECE (Call to action) ── */}
      <section className="py-32 px-6 bg-deep text-cream text-center relative overflow-hidden">
        <motion.div style={{ y: y2 }} className="absolute inset-0 z-0 opacity-10">
          <div className="w-full h-full bg-[url('/images/New%20images/Quilts.jpg')] bg-cover bg-center"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-2xl mx-auto"
        >
          <div className="text-[40px] mb-6">❋</div>
          <h2 className="text-[32px] md:text-[48px] font-serif leading-tight mb-6">
            Bring the Heritage <em className="italic text-gold">Home</em>
          </h2>
          <p className="text-cream/70 leading-relaxed mb-10">
            When you purchase from House of Sonika, you aren't just buying a piece of fabric. You are keeping centuries of artisanal heritage alive and bringing the soulful warmth of Jaipur into your everyday life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="px-8 py-3 bg-gold text-deep uppercase tracking-[2px] text-[11px] font-semibold hover:bg-cream transition-colors duration-300">
              Return Home
            </Link>
            <a href="https://wa.me/8188000001" target="_blank" rel="noreferrer" className="px-8 py-3 border border-gold text-gold uppercase tracking-[2px] text-[11px] font-semibold flex items-center gap-2 hover:bg-gold hover:text-deep transition-colors duration-300">
              <WhatsAppIcon className="w-4 h-4" /> Shop the Collection
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

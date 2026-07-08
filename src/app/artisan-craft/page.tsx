"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../../components/Footer";

export default function ArtisanCraft() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#0a0a0a] text-cream font-sans selection:bg-gold/30 selection:text-gold">
      
      {/* ── HEADER NAVIGATION ── */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
        <a href="/" className="text-gold tracking-[4px] text-[14px] uppercase font-light">
          ← Back to House
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="h-screen w-full relative flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/redesign/artisan.png')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50"></div>
        </motion.div>
        
        <div className="relative z-10 text-center px-6 mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="text-[10px] tracking-[8px] uppercase text-gold mb-6 font-semibold">The Mastery</div>
            <h1 className="text-[50px] md:text-[90px] font-light font-serif leading-none mb-6 text-cream">
              Artisan <em className="italic text-gold">Craft</em>
            </h1>
            <p className="max-w-xl mx-auto text-[18px] text-cream/60 font-light leading-relaxed font-serif">
              An exploration into the meticulous, centuries-old techniques that define true Jaipuri luxury.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── TECHNIQUE 1: BLOCK PRINTING ── */}
      <section className="py-32 px-6 lg:px-32 relative">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 reveal">
              <div className="text-[12px] uppercase tracking-[5px] text-gold/60 mb-4 font-bold">Technique 01</div>
              <h2 className="text-[40px] md:text-[56px] font-serif leading-tight mb-8">
                Hand Block <span className="italic text-gold">Printing</span>
              </h2>
              <p className="text-[18px] text-cream/70 leading-relaxed font-serif font-light mb-6">
                The soul of our collections lies in the rhythmic stamping of carved teak wood blocks. Every motif is pressed by hand, requiring absolute precision to align the intricate layers of natural colors.
              </p>
              <p className="text-[18px] text-cream/70 leading-relaxed font-serif font-light">
                The slight imperfections—a drop of dye, a microscopic overlap—are the hallmarks of human touch, making every single piece entirely unique.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/5] overflow-hidden reveal">
               {/* Using the wood carving image generated earlier */}
               <div className="absolute inset-0 bg-[url('/images/heritage/wood.png')] bg-cover bg-center hover:scale-105 transition-transform duration-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNIQUE 2: KANTHA STITCHING ── */}
      <section className="py-32 px-6 lg:px-32 relative bg-[#111111]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] overflow-hidden reveal">
               <div className="absolute inset-0 bg-[url('/images/redesign/artisan.png')] bg-cover bg-center hover:scale-105 transition-transform duration-1000"></div>
            </div>
            <div className="reveal">
              <div className="text-[12px] uppercase tracking-[5px] text-gold/60 mb-4 font-bold">Technique 02</div>
              <h2 className="text-[40px] md:text-[56px] font-serif leading-tight mb-8">
                Kantha <span className="italic text-gold">Stitching</span>
              </h2>
              <p className="text-[18px] text-cream/70 leading-relaxed font-serif font-light mb-6">
                A labor of pure devotion. Thousands of tiny, continuous running stitches are hand-sewn across the fabric, binding layers of soft cotton together to create our famous quilts and bedcovers.
              </p>
              <p className="text-[18px] text-cream/70 leading-relaxed font-serif font-light">
                This technique not only provides incredible durability and texture, but it imparts a subtle, wavy dimension to the fabric that cannot be replicated by machines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

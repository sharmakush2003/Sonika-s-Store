"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../../components/Footer";

export default function TheSonikaStory() {
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

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <main ref={containerRef} className="min-h-screen bg-ivory text-deep font-sans">
      
      {/* ── HEADER NAVIGATION ── */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
        <a href="/" className="text-gold tracking-[4px] text-[14px] uppercase font-light">
          ← Back to House
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="h-[90vh] w-full relative flex items-center px-6 lg:px-32 overflow-hidden bg-sand/10">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
           <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose/5 rounded-full blur-[100px]"></div>
           <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px]"></div>
        </motion.div>
        
        <div className="relative z-10 max-w-4xl">
          <div className="text-[12px] tracking-[5px] uppercase text-rose mb-8 font-semibold">The Founder's Letter</div>
          <h1 className="text-[60px] md:text-[100px] font-light font-serif leading-none mb-6">
            A Love Letter to <em className="italic text-gold">Jaipur</em>
          </h1>
        </div>
      </section>

      {/* ── EDITORIAL CONTENT ── */}
      <section className="py-24 px-6 lg:px-32 bg-ivory relative">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-20">
          
          {/* Left: Sticky Image */}
          <div className="lg:w-1/2 relative">
            <div className="sticky top-32">
              <div className="aspect-[3/4] w-full relative overflow-hidden bg-sand/20">
                <div className="absolute inset-0 bg-[url('/images/redesign/sonika.png')] bg-cover bg-center"></div>
              </div>
              <div className="mt-6 text-xs uppercase tracking-[3px] text-muted font-semibold">Sonika Malik, Founder</div>
            </div>
          </div>

          {/* Right: The Letter */}
          <div className="lg:w-1/2 lg:pt-32 pb-32">
            <div className="max-w-xl mx-auto lg:mx-0 space-y-12">
              <div className="reveal">
                <p className="text-[24px] leading-relaxed font-serif font-light text-deep">
                  "I started House of Sonika not just to sell beautiful fabrics, but to preserve the soulful heartbeat of the city I call home."
                </p>
              </div>

              <div className="reveal">
                <p className="text-[16px] leading-loose text-muted font-serif">
                  For centuries, Jaipur has been a beacon of unparalleled craftsmanship. The rhythmic tap of a wooden block against cotton, the vibrant blooms of natural indigo and madder drying in the fierce Rajasthan sun—these are the sensory experiences that shaped my childhood.
                </p>
              </div>

              <div className="reveal">
                <p className="text-[16px] leading-loose text-muted font-serif">
                  Yet, as the world moved towards fast fashion and synthetic mass production, I watched the artisan communities of my city struggle to compete. The ancient techniques of block printing and Kantha stitching were at risk of becoming mere memories.
                </p>
              </div>

              <div className="reveal">
                <div className="h-px w-full bg-gold/30 my-16"></div>
              </div>

              <div className="reveal">
                <h3 className="text-[28px] font-serif mb-6 text-deep">More Than a Brand</h3>
                <p className="text-[16px] leading-loose text-muted font-serif">
                  House of Sonika was born out of a profound need to protect this legacy. We partner directly with master artisans—the Chhipas—to ensure they receive fair wages and global recognition for their artistry. When you bring a House of Sonika quilt or kurti into your home, you aren't just making a purchase. You are holding a piece of history.
                </p>
              </div>

              <div className="reveal pt-12">
                <p className="text-[16px] leading-loose text-muted font-serif mb-12">
                  Thank you for being part of our story, and for helping us keep the magic of Jaipur alive for generations to come.
                </p>
                <div className="text-[48px] font-serif italic text-gold opacity-80" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Sonika
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

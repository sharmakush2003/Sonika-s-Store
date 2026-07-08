"use client";

import { useEffect } from "react";
import Footer from "../../components/Footer";

export default function SustainabilityPage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-ivory text-deep">
      {/* ── HEADER NAVIGATION ── */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
        <a href="/" className="text-gold tracking-[4px] text-[14px] uppercase font-light">
          ← Back to House
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 bg-sand/20">
        <div className="afu1 tracking-[8px] mb-4 text-teal text-[14px] uppercase font-bold">✦ Our Commitment ✦</div>
        <h1 className="afu2 font-light leading-none tracking-tighter font-serif text-fluid-h1 text-deep">
          <em className="not-italic text-teal">Sustainability</em> at Heart
        </h1>
        <p className="afu3 mt-6 uppercase tracking-[4px] text-muted max-w-2xl mx-auto leading-relaxed text-xs sm:text-sm font-medium">
          Honoring the Earth. Empowering Artisans. Preserving Heritage.
        </p>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-24 px-6 bg-ivory">
        <div className="max-w-[800px] mx-auto">
          <div className="space-y-16">
            <div className="reveal">
              <h2 className="text-[32px] font-light mb-6 text-deep font-serif">Conscious Craftsmanship</h2>
              <p className="text-[18px] leading-[1.8] text-muted font-serif mb-4">
                At House of Sonika, sustainability isn't a trend; it's the foundation of everything we do. Our deeply rooted connection with the artisans of Jaipur means we priorotize ethical practices that honor both the creators and the environment.
              </p>
              <p className="text-[18px] leading-[1.8] text-muted font-serif">
                We believe that true luxury lies in objects that are made with intention, meant to last, and leave a positive footprint on the world.
              </p>
            </div>

            <div className="reveal">
              <h2 className="text-[32px] font-light mb-6 text-deep font-serif">Natural Materials & Dyes</h2>
              <p className="text-[18px] leading-[1.8] text-muted font-serif mb-4">
                Our home furnishings and ethnic wear are crafted primarily from pure, breathable cotton sourced responsibly within India. We actively minimize the use of synthetic blends to ensure our products are biodegradable and gentle on your skin.
              </p>
              <p className="text-[18px] leading-[1.8] text-muted font-serif">
                Many of our signature block prints utilize natural, plant-based dyes. This age-old technique not only creates our distinct earthy hues but also prevents harmful chemicals from entering the local water systems.
              </p>
            </div>

            <div className="reveal">
              <h2 className="text-[32px] font-light mb-6 text-deep font-serif">Empowering the Artisan Community</h2>
              <p className="text-[18px] leading-[1.8] text-muted font-serif">
                By choosing House of Sonika, you are directly supporting the livelihoods of skilled craftspeople in Rajasthan. We ensure fair wages and safe working conditions. Our goal is to keep the ancestral arts of block printing and hand-quilting alive, passing these vital skills down to the next generation of artisans.
              </p>
            </div>
            
            <div className="reveal">
              <h2 className="text-[32px] font-light mb-6 text-deep font-serif">Thoughtful Packaging</h2>
              <p className="text-[18px] leading-[1.8] text-muted font-serif">
                We are actively transitioning our packaging materials to be fully recyclable and biodegradable. Every order is packed with care, minimizing excess waste while ensuring your pieces arrive beautifully and safely.
              </p>
            </div>
          </div>
          
          <div className="reveal mt-20 pt-10 border-t border-sand/50 text-center">
             <p className="text-[20px] italic text-rose font-serif">"A beautiful home shouldn't cost the earth."</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

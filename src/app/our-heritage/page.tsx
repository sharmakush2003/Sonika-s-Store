"use client";

import { useEffect } from "react";
import Footer from "../../components/Footer";
import { WhatsAppIcon, InstagramIcon } from "../../components/Icons";

const HERITAGE_ITEMS = [
  {
    title: "The Pink City Legacy",
    subtitle: "Founded 1727",
    desc: "Founded by Maharaja Sawai Jai Singh II, Jaipur was India's first planned city. Its iconic pink hue, a global symbol of hospitality, reflects a culture where every guest is treated with royal warmth.",
    icon: "🏰"
  },
  {
    title: "Home Furnishing",
    subtitle: "280 Years of Warmth",
    desc: "The legendary Jaipuri Rajai has provided lightweight warmth for nearly three centuries. Each quilt is a labor of love, filled with meticulously hand-carded cotton for unparalleled breathability.",
    icon: "🛏️"
  },
  {
    title: "Ethnic Fashion",
    subtitle: "A Tapestry of Color",
    desc: "From the rhythmic waves of Leheriya to the intricate knots of Bandhani, Jaipur's fashion is an ancient language of color. As a historic silk and cotton hub, we carry forward this vibrant textile soul.",
    icon: "👗"
  },
  {
    title: "Artisanal Craft",
    subtitle: "16th Century Roots",
    desc: "Block printing is Jaipur's heartbeat. From the delicate florals of Sanganer to the earthy wisdom of Bagru, our hand-carved wooden blocks have told stories on fabric since the Mughal era.",
    icon: "🪡"
  }
];

export default function HeritagePage() {
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
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-20" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(201,148,58,0.1) 0%, transparent 70%), #FAF5EE" }}>
        <div className="afu1 tracking-[12px] mb-6 text-gold text-[18px]">✦ LEGACY ✦</div>
        <h1 className="afu2 font-light leading-none tracking-tighter font-serif text-fluid-h1 text-deep">
          Our <em className="not-italic text-rose">Heritage</em>
        </h1>
        <p className="afu3 mt-6 uppercase tracking-[8px] text-muted max-w-2xl mx-auto leading-relaxed text-xs sm:text-sm font-medium">
          Centuries of stories, woven into every thread and stamped onto every fabric. Explore the soul of the Pink City.
        </p>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-24 px-6 bg-ivory relative">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 gap-y-32">
            {HERITAGE_ITEMS.map((item, idx) => (
              <div key={idx} className={`reveal flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}>
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="text-[120px] opacity-10 group-hover:opacity-100 transition-opacity duration-700">
                    {item.icon}
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="uppercase tracking-[4px] text-[11px] text-gold font-bold mb-4">{item.subtitle}</div>
                  <h2 className="text-[42px] font-light mb-8 text-deep leading-tight font-serif">{item.title}</h2>
                  <p className="text-[18px] leading-[1.8] text-muted font-light font-serif">
                    {item.desc}
                  </p>
                  <div className="w-20 h-[1px] bg-rose/30 mt-10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-28 px-6 text-center bg-deep text-cream">
        <h2 className="reveal font-light mb-8 font-serif text-fluid-h2">Experience the <span className="text-gold">Tradition</span></h2>
        <p className="reveal text-cream/70 mb-12 max-w-xl mx-auto leading-relaxed font-serif text-[22px]">Bring a piece of Jaipur's history into your living space today.</p>
        <div className="reveal flex flex-wrap justify-center gap-6">
          <a href="https://wa.me/8188000001?text=Hi%20House%20of%20Sonika!%20I'm%20fascinated%20by%20the%20Jaipur%20Heritage%20and%20would%20love%20to%20see%20your%20collection." target="_blank" rel="noreferrer" className="btn btn-primary bg-gold text-deep border-gold hover:bg-white"><WhatsAppIcon /> Shop Collection</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

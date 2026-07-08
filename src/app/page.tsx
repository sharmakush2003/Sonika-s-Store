"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { WhatsAppIcon, InstagramIcon } from "../components/Icons";
import Footer from "../components/Footer";
import ParallaxImage from "../components/ParallaxImage";
import ShopTheLook, { Hotspot } from "../components/ShopTheLook";
import { motion, AnimatePresence } from "framer-motion";
import SearchModal from "../components/SearchModal";
import { SearchIcon } from "../components/Icons";
import Link from "next/link";

const HERO_IMAGES = [
  "/images/New%20images/Bedsheet.jpg",
  "/images/New%20images/Bed%20Covers.webp",
  "/images/New%20images/Quilted%20BedCovers.jpg",
  "/images/New%20images/Comforters.jpg",
  "/images/New%20images/Dohar.jpg"
];

/* ── DATA ── */
export const FURNISH_ITEMS: { img: string; name: string; desc: string; spots?: Hotspot[] }[] = [
  { 
    img: "/images/New%20images/Bedsheet.jpg", 
    name: "Bedsheets", 
    desc: "Pure cotton, vibrant Jaipuri prints · Double & King sizes · Breathable & colourfast",
    spots: [
      { id: "bed1", x: 45, y: 65, title: "Sanganeri King Bedsheet", price: "2,499", desc: "A luxurious 100% pure cotton king-size bedsheet featuring authentic Sanganeri floral block prints. Includes 2 matching pillow covers.", img: "/images/New%20images/Bedsheet.jpg" },
      { id: "bed2", x: 75, y: 40, title: "Block-Printed Pillow Cover", price: "499", desc: "Soft cotton pillow cover with intricate border detailing. Fits standard large pillows." }
    ]
  },
  { 
    img: "/images/New%20images/Bed%20Covers.webp", 
    name: "Bed Covers", 
    desc: "Elegant everyday covers · Floral & geometric motifs · Easy wash & long-lasting",
    spots: [
      { id: "bc1", x: 50, y: 50, title: "Floral Bed Cover", price: "1,599", desc: "A beautiful floral patterned bed cover perfect for everyday elegance.", img: "/images/New%20images/Bed%20Covers.webp" }
    ]
  },
  { 
    img: "/images/New%20images/Quilted%20BedCovers.jpg", 
    name: "Quilted Bedcovers", 
    desc: "Lightly quilted top covers · Jaipuri block print designs · Perfect for all seasons",
    spots: [
      { id: "qb1", x: 60, y: 40, title: "Block Print Quilted Cover", price: "2,199", desc: "Lightly quilted with authentic Jaipuri block prints. Adds a layer of comfort and style.", img: "/images/New%20images/Quilted%20BedCovers.jpg" }
    ]
  },
  { 
    img: "/images/New%20images/Comforters.jpg", 
    name: "Comforters", 
    desc: "Plush, feather-light warmth · Microfibre filled · Rich printed outer shells",
    spots: [
      { id: "cm1", x: 45, y: 55, title: "Plush Microfibre Comforter", price: "3,299", desc: "Experience feather-light warmth with our plush, block-printed comforters.", img: "/images/New%20images/Comforters.jpg" }
    ]
  },
  { 
    img: "/images/New%20images/Blankets.jpg", 
    name: "Blankets", 
    desc: "Soft woollen & fleece options · Traditional Jaipur weaves · Warm & lightweight",
    spots: [
      { id: "bl1", x: 50, y: 50, title: "Traditional Woollen Blanket", price: "2,899", desc: "A soft, warm woollen blanket featuring traditional Jaipur weaves.", img: "/images/New%20images/Blankets.jpg" }
    ]
  },
  { 
    img: "/images/New%20images/Quilts.jpg", 
    name: "Quilts", 
    desc: "Reversible cotton quilts · Hand-stitched patterns · Summer & winter weights",
    spots: [
      { id: "q1", x: 40, y: 60, title: "Reversible Cotton Quilt", price: "3,499", desc: "Hand-stitched patterns on premium cotton. Perfect for both summer and winter.", img: "/images/New%20images/Quilts.jpg" }
    ]
  },
  { 
    img: "/images/New%20images/Dohar.jpg", 
    name: "Dohar", 
    desc: "Muslin double-layered · Ultra-soft feel · Ideal for mild winters & AC rooms",
    spots: [
      { id: "d1", x: 55, y: 60, title: "Double-Layered Muslin Dohar", price: "1,899", desc: "Ultra-soft muslin dohar, perfect for mild winters and air-conditioned rooms.", img: "/images/New%20images/Dohar.jpg" }
    ]
  },
  { 
    img: "/images/New%20images/Jaipuri%20Rajai.jpg", 
    name: "Jaipur Rajai", 
    desc: "Traditional Rajasthani quilt · Filled with desi cotton · Authentic block prints",
    spots: [
      { id: "jr1", x: 55, y: 45, title: "Authentic Jaipur Rajai", price: "4,999", desc: "The legendary Rajasthani quilt filled with pure desi cotton for exceptional warmth.", img: "/images/New%20images/Jaipuri%20Rajai.jpg" }
    ]
  },
];

export const FASHION_ITEMS: { icon: string; subtitle: string; title: string; desc: string; tags: string[]; img: string; spots?: Hotspot[] }[] = [
  { 
    icon: "👘", 
    subtitle: "Casual Ethnic", 
    title: "Short Kurtis", 
    desc: "Breezy Jaipuri cotton kurtis, perfect for everyday wear.", 
    tags: ["Cotton", "Jaipuri"], 
    img: "/images/short%20kurti.jpg",
    spots: [
      { id: "sk1", x: 50, y: 40, title: "Breezy Cotton Kurti", price: "899", desc: "A comfortable and stylish short kurti with traditional Jaipur motifs.", img: "/images/short%20kurti.jpg" }
    ]
  },
  { 
    icon: "👗", 
    subtitle: "Coordinated Sets", 
    title: "2-Piece Suits", 
    desc: "Kurta + bottom sets in coordinated Jaipuri prints.", 
    tags: ["Kurta + Bottom", "Office Wear"], 
    img: "/images/2%20piece.jpg",
    spots: [
      { id: "suit1", x: 40, y: 35, title: "Indigo Chevron Kurta", price: "1,899", desc: "A lightweight, breathable cotton kurta with a modern asymmetrical chevron block print in classic indigo.", img: "/images/2%20piece.jpg" },
      { id: "suit2", x: 60, y: 70, title: "Matching Print Trousers", price: "999", desc: "Comfortable, straight-cut cotton trousers with an elasticated back and side pockets." }
    ]
  },
  { 
    icon: "🌺", 
    subtitle: "Complete Ensemble", 
    title: "3-Piece Suits", 
    desc: "Kurta + bottom + dupatta — a perfectly matched set.", 
    tags: ["Kurta + Bottom", "Dupatta"], 
    img: "/images/three%20piece.jpg",
    spots: [
      { id: "3p1", x: 45, y: 30, title: "Matching Dupatta", price: "599", desc: "A beautifully matched dupatta that completes the ensemble.", img: "/images/three%20piece.jpg" },
      { id: "3p2", x: 55, y: 60, title: "Kurta & Bottom Set", price: "2,499", desc: "Coordinated Kurta and bottom with elegant Jaipuri prints." }
    ]
  },
  { 
    icon: "🧣", 
    subtitle: "Accessories", 
    title: "Fancy Dupattas", 
    desc: "Statement dupattas in chiffon, georgette, and cotton.", 
    tags: ["Block Print", "Mirror Work"], 
    img: "/images/dupatte.jpg",
    spots: [
      { id: "fd1", x: 50, y: 50, title: "Statement Dupatta", price: "799", desc: "A stunning statement dupatta to elevate any outfit.", img: "/images/dupatte.jpg" }
    ]
  },
  { 
    icon: "👜", 
    subtitle: "Signature", 
    title: "Jaipuri Handbags", 
    desc: "Quilted Jaipuri cotton handbags — handcrafted.", 
    tags: ["Quilted", "Handcrafted"], 
    img: "/images/jaipuri%20handbag.jpg",
    spots: [
      { id: "jh1", x: 50, y: 60, title: "Quilted Handbag", price: "1,299", desc: "Handcrafted quilted cotton handbag with traditional Jaipur patterns.", img: "/images/jaipuri%20handbag.jpg" }
    ]
  },
  { 
    icon: "✨", 
    subtitle: "Special Occasions", 
    title: "Fancy Suits", 
    desc: "Embellished, embroidered, and designer suits.", 
    tags: ["Festive", "Designer"], 
    img: "/images/fancy%20suit.jpg",
    spots: [
      { id: "fs1", x: 50, y: 45, title: "Designer Festive Suit", price: "3,999", desc: "An exquisitely embroidered suit perfect for special occasions.", img: "/images/fancy%20suit.jpg" }
    ]
  },
];

const WHY_ITEMS = [
  { icon: "🏮", title: "Direct from Jaipur", desc: "Sourced directly from Jaipur's finest artisans." },
  { icon: "✅", title: "Quality Curated", desc: "Personally selected by Sonika — only the best." },
  { icon: "📦", title: "Delivered Pan India", desc: "Safe, secure packaging and prompt delivery." },
  { icon: "💬", title: "Personal Touch", desc: "Shop directly with Sonika on WhatsApp." },
  { icon: "🎁", title: "Perfect for Gifting", desc: "Bedsets, quilts, and bags for every budget." },
  { icon: "🌿", title: "Natural & Authentic", desc: "Breathable cotton fabrics, natural dyes." },
];

const MARQUEE_TEXT = [
  "Jaipur Rajai", "Quilted Bedcovers", "Jaipuri Kurtis", "Comforters",
  "3-Piece Suits", "Quilted Handbags", "Dohar", "Fancy Dupattas", "Blankets", "Cotton Quilts",
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-ivory text-deep relative">
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      {/* Floating Search Button */}
      <button 
        onClick={() => setIsSearchOpen(true)}
        className="fixed top-6 right-6 z-50 p-3 bg-ivory/80 backdrop-blur border border-sand/30 rounded-full shadow-sm hover:shadow-md transition-all text-deep/70 hover:text-deep hover:bg-ivory"
      >
        <SearchIcon className="w-5 h-5" />
      </button>

      {/* ── HERO ── */}
      <section className="hero-wrap relative min-h-screen">
        
        {/* Dynamic Background Carousel */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image 
                src={HERO_IMAGES[currentImageIndex]} 
                alt="House of Sonika" 
                fill 
                className="object-contain md:object-cover opacity-90"
                priority
              />
            </motion.div>
          </AnimatePresence>
          {/* Light Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-[#FAF5EE]/50 backdrop-blur-[2px]" />
          
          {/* Subtle Radial Gradients for aesthetics */}
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 80%, rgba(192,72,74,0.12) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(201,148,58,0.14) 0%, transparent 55%), radial-gradient(ellipse at 50% 50%, rgba(42,107,107,0.06) 0%, transparent 70%)" }} />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 pointer-events-none">
          <div className="afu1 tracking-[12px] mb-6 text-gold text-[22px] pointer-events-auto">✦ JAIPUR ✦</div>
        <h1 className="afu2 font-light leading-none tracking-tighter font-serif text-fluid-h1 text-deep">
          House <em className="not-italic text-rose">of</em> Sonika
        </h1>
        <p className="afu3 mt-4 uppercase tracking-[8px] text-muted text-xs sm:text-sm font-medium">
          Home Furnishing · Ethnic Fashion · Craftsmanship
        </p>
        <div className="hero-divider afu4 pointer-events-auto"><span>❋</span></div>
        <p className="afu5 font-light max-w-[600px] leading-relaxed text-muted font-serif text-fluid-p pointer-events-auto">
          Where the warmth of Jaipur's artisan heritage meets the elegance of everyday living — curated with love, delivered to your home.
        </p>
        <div className="afu6 flex gap-4 flex-wrap justify-center mt-11 pointer-events-auto">
          <a href="https://wa.me/8188000001?text=Hi%20House%20of%20Sonika!%20I'd%20love%20to%20explore%20your%20handpicked%20collections." target="_blank" rel="noreferrer" className="btn btn-primary"><WhatsAppIcon /> Shop on WhatsApp</a>
          <a href="#" className="btn btn-outline"><InstagramIcon /> @houseofsonika</a>
        </div>
        </div>
      </section>

      {/* ── STRIP ── */}
      <div className="text-center py-[14px] text-[11px] tracking-[5px] uppercase bg-deep text-gold">
        ✦ Authentic Jaipur Craftsmanship · Handpicked Collections · Direct from Source · Delivered with Love ✦
      </div>

      {/* ── MARQUEE ── */}
      <div className="py-10 bg-[#FAF5EE] overflow-hidden border-y border-sand/30">
        <div className="marquee-track">
          {[...MARQUEE_TEXT, ...MARQUEE_TEXT].map((t, i) => (
            <span key={i} className="flex-shrink-0 font-light italic text-[22px] text-muted font-serif mx-4">
              {t} <span className="not-italic text-gold text-[16px] ml-4 align-middle">❋</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── HOME FURNISHING ── */}
      <section className="py-24 px-6 relative" style={{ background: "radial-gradient(ellipse at 90% 10%, rgba(201,148,58,0.08) 0%, transparent 50%), var(--blush)" }}>
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="reveal uppercase tracking-[6px] text-[10px] mb-[10px] text-gold">Home Furnishing Collection</p>
          <h2 className="reveal font-light mb-[14px] font-serif text-fluid-h2 text-deep">Wrap Your Home in <em className="not-italic text-rose">Jaipur Magic</em></h2>
          <div className="reveal w-[60px] h-[2px] mx-auto mb-16" style={{ background: "linear-gradient(90deg, var(--rose), var(--gold))" }} />

          <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-sand/30 border border-sand/30">
            {FURNISH_ITEMS.map(item => (
              <div key={item.name} className="furnish-card group">
                <div className="relative w-full h-[250px] mb-6">
                  <ShopTheLook spots={item.spots}>
                    <div className="w-full h-full relative overflow-hidden">
                      <Image 
                        src={item.img} 
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
                    </div>
                  </ShopTheLook>
                </div>
                <div className="px-6 pb-6">
                  <div className="fc-name text-[22px] font-semibold mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{item.name}</div>
                  <div className="fc-desc text-[13px] tracking-[0.5px] leading-[1.8] text-muted">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FASHION ── */}
      <section className="py-24 px-6 bg-ivory">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="reveal uppercase tracking-[6px] text-[10px] mb-[10px] text-gold">Ethnic Fashion Collection</p>
          <h2 className="reveal font-light mb-[14px] font-serif text-fluid-h2 text-deep">Dress in <em className="not-italic text-rose">Jaipur's Soul</em></h2>
          <div className="reveal w-[60px] h-[2px] mx-auto mb-16" style={{ background: "linear-gradient(90deg, var(--rose), var(--gold))" }} />

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {FASHION_ITEMS.map((item, index) => (
              <motion.div 
                key={item.title} 
                className="fashion-card group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              >
                <div className="relative w-full h-[400px]">
                  <ShopTheLook spots={item.spots}>
                    <div className="w-full h-full relative overflow-hidden">
                      <ParallaxImage 
                        src={item.img} 
                        alt={item.title}
                        speed={0.15}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
                    </div>
                  </ShopTheLook>

                </div>
                <div className="p-8 text-left bg-white border-t border-sand/20 flex flex-col h-full">
                  <div className="uppercase tracking-[2px] text-[11px] mb-1 text-gold font-semibold">{item.subtitle}</div>
                  <div className="text-[24px] font-semibold mb-3 text-deep" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{item.title}</div>
                  <p className="text-[13px] leading-[1.8] text-muted mb-6 line-clamp-2">{item.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[10px] tracking-[1px] px-3 py-1 rounded-full uppercase bg-blush text-muted font-medium border border-sand/30">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* ── STATS ── */}
      <section className="py-24 px-6 text-center text-cream bg-deep relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-5 bg-[url('/images/fancy%20suit.jpg')] bg-cover bg-center mix-blend-overlay pointer-events-none"></div>
        
        <div className="relative z-10">
          <h2 className="reveal font-light mb-8 font-serif text-fluid-h2">The <span className="text-gold">Jaipur Promise</span></h2>
          <p className="max-w-2xl mx-auto text-cream/70 font-light mb-16 text-[16px] md:text-[20px]">
            Every piece in our collection is a testament to the centuries-old block printing techniques of Rajasthan. We preserve the craft while bringing you unparalleled luxury.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24 mb-20 max-w-4xl mx-auto">
            <div className="reveal transition-transform duration-500 hover:-translate-y-2">
              <div className="text-[48px] md:text-[64px] font-serif text-gold mb-2">100%</div>
              <div className="text-[12px] uppercase tracking-[3px] opacity-80">Authentic Jaipuri</div>
            </div>
            <div className="reveal transition-transform duration-500 hover:-translate-y-2 [transition-delay:100ms]">
              <div className="text-[48px] md:text-[64px] font-serif text-gold mb-2">35+</div>
              <div className="text-[12px] uppercase tracking-[3px] opacity-80">Master Artisans</div>
            </div>
            <div className="reveal transition-transform duration-500 hover:-translate-y-2 [transition-delay:200ms]">
              <div className="text-[48px] md:text-[64px] font-serif text-gold mb-2">48h</div>
              <div className="text-[12px] uppercase tracking-[3px] opacity-80">Pan-India Delivery</div>
            </div>
          </div>
          
          <Link href="/our-heritage" className="reveal inline-block px-10 py-4 bg-transparent border border-gold text-gold hover:bg-gold hover:text-deep transition-all duration-300 text-[12px] uppercase tracking-[4px] font-semibold">
            Discover Our Heritage
          </Link>
        </div>
      </section>

      {/* ── WHY ── */}
      <section className="py-24 px-6 bg-[#FAF5EE]">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="reveal font-light mb-16 font-serif text-fluid-h2 text-deep">The <em className="not-italic text-rose">House of Sonika</em> Difference</h2>
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_ITEMS.map(item => (
              <div key={item.title} className="why-card group">
                <div className="text-[42px] mb-5 transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
                <div className="text-[22px] font-semibold mb-3 text-deep" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{item.title}</div>
                <p className="text-[13px] leading-[1.8] text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONNECT ── */}
      <section className="py-28 px-6 text-center" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(192,72,74,0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(201,148,58,0.1) 0%, transparent 60%), #F3E6D8" }}>
        <h2 className="reveal font-light mb-6 font-serif text-fluid-h2 text-deep">Ready to Bring <em className="not-italic text-rose">Jaipur Home?</em></h2>
        <p className="reveal text-muted mb-12 max-w-xl mx-auto leading-relaxed font-serif text-[22px]">Discover our full range on WhatsApp or follow our journey on Instagram.</p>
        <div className="reveal flex flex-wrap justify-center gap-6 mt-4">
          <a href="https://wa.me/8188000001?text=Hi%20House%20of%20Sonika,%20I'm%20ready%20to%20bring%20the%20magic%20of%20Jaipur%20into%20my%20home!" target="_blank" rel="noreferrer" className="wa-card">
            <WhatsAppIcon className="w-7 h-7" />
            <div className="text-left"><div className="text-[10px] opacity-80 uppercase tracking-wider font-semibold">Chat on</div><div className="text-[16px] font-bold">WhatsApp</div></div>
          </a>
          <a href="#" className="ig-card">
            <InstagramIcon className="w-7 h-7" />
            <div className="text-left"><div className="text-[10px] opacity-80 uppercase tracking-wider font-semibold">Follow on</div><div className="text-[16px] font-bold">@houseofsonika</div></div>
          </a>
        </div>
      </section>

      {/* ── HERITAGE TEASER ── */}
      <section className="py-24 px-6 bg-ivory text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="max-w-2xl mx-auto">
          <p className="reveal uppercase tracking-[6px] text-[10px] mb-[10px] text-gold font-bold">Woven in History</p>
          <h2 className="reveal font-light mb-8 leading-tight font-serif text-fluid-h2 text-deep">
            Jaipur's <em className="not-italic text-rose">Timeless Soul</em>
          </h2>
          <p className="reveal text-[20px] leading-relaxed text-muted font-light mb-12 font-serif">
            From the pink walls of the old city to the rhythmic thuds of wooden blocks on cotton, explore the centuries of artistry that define every House of Sonika creation.
          </p>
          <a href="/our-heritage" className="reveal btn btn-outline border-gold/40 text-gold hover:bg-gold hover:text-deep transition-all duration-500 tracking-[3px] uppercase text-[11px]">
            Discover Our Heritage →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

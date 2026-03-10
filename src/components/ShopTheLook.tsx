"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppIcon } from "./Icons";
import Image from "next/image";

export interface Hotspot {
  id: string;
  x: number; // Percentage from left (0-100)
  y: number; // Percentage from top (0-100)
  title: string;
  price: string;
  desc: string;
  img?: string; // Optional thumbnail image
}

interface ShopTheLookProps {
  children: React.ReactNode;
  spots?: Hotspot[];
}

export default function ShopTheLook({ children, spots = [] }: ShopTheLookProps) {
  const [activeSpot, setActiveSpot] = useState<Hotspot | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!spots || spots.length === 0) {
    return <>{children}</>;
  }

  return (
    <div className="relative w-full h-full group/look overflow-visible">
      
      {/* The wrapped Image or ParallaxImage */}
      <div className="w-full h-full relative z-0">
        {children}
      </div>

      {/* The Hotspots overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {spots.map((spot) => (
          <button
            key={spot.id}
            onClick={(e) => {
              e.stopPropagation();
              setActiveSpot(spot);
            }}
            className="absolute hotspot-btn pointer-events-auto"
            style={{
              left: `${spot.x}%`,
              top: `${spot.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            aria-label={`Shop the look: ${spot.title}`}
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-white/50 text-deep">
              <span className="text-[20px] leading-none mb-[2px] font-light">+</span>
              {/* Pulsing ring */}
              <div className="absolute inset-0 rounded-full border border-white/80 animate-ping opacity-75" />
            </div>
          </button>
        ))}
      </div>

      {/* The Slide-Out Drawer */}
      {mounted && createPortal(
        <AnimatePresence>
          {activeSpot && (
            <>
              {/* Backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveSpot(null)}
                className="fixed inset-0 z-[9999] bg-deep/40 backdrop-blur-sm pointer-events-auto"
              />

              {/* Drawer */}
              <motion.div
                initial={{ x: "100%", opacity: 0.5 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0.5 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 z-[10000] w-full max-w-sm h-[100dvh] bg-ivory shadow-2xl overflow-y-auto"
                style={{
                  borderLeft: "1px solid var(--sand)"
                }}
              >
                {/* Header */}
                <div className="sticky top-0 z-10 bg-ivory/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-sand/30">
                  <span className="uppercase tracking-[3px] text-[10px] font-bold text-gold">Shop the Look</span>
                  <button
                    onClick={() => setActiveSpot(null)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-sand/20 hover:bg-sand/40 text-deep transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  {activeSpot.img && (
                    <div className="relative w-full h-[300px] mb-6 rounded-sm overflow-hidden border border-sand/30">
                      <Image
                        src={activeSpot.img}
                        alt={activeSpot.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  
                  <h3 className="text-[28px] font-semibold mb-2 text-deep" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {activeSpot.title}
                  </h3>
                  
                  <p className="text-[18px] text-rose font-medium mb-4">
                    ₹{activeSpot.price} <span className="text-[12px] text-muted font-light ml-1">(Estimated)</span>
                  </p>

                  <div className="w-12 h-[1px] bg-gold mb-6" />

                  <p className="text-[14px] leading-relaxed text-muted mb-8">
                    {activeSpot.desc}
                  </p>

                  {/* Call To Action */}
                  <a
                    href={`https://wa.me/8188000001?text=Hi%20House%20of%20Sonika!%20I%20saw%20the%20${encodeURIComponent(activeSpot.title)}%20via%20Shop%20the%20Look.%20Is%20this%20still%20available?`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full btn btn-primary justify-center bg-[#25D366] border-[#25D366] hover:bg-[#1aab53] hover:border-[#1aab53]"
                    onClick={() => setActiveSpot(null)}
                  >
                    <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                    Request on WhatsApp
                  </a>
                  
                  <p className="text-center text-[10px] text-muted mt-4 uppercase tracking-[1px] opacity-70">
                    Custom sizes available upon request
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}

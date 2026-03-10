"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock body scroll while loading
    document.body.style.overflow = "hidden";

    // Set a timer to remove the preloader after the animation completes
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "unset";
    }, 2800); // Wait for drawing + fadeout

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-ivory flex items-center justify-center preloader-overlay">
      <div className="relative flex flex-col items-center">
        {/* SVG Floral Motif */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-24 h-24 sm:w-32 sm:h-32 mb-6"
        >
          {/* A conceptual, elegant floral/mandala path mimicking block print */}
          <path
            d="M 50 10 C 60 30, 80 40, 90 50 C 80 60, 60 70, 50 90 C 40 70, 20 60, 10 50 C 20 40, 40 30, 50 10 Z M 50 25 C 55 40, 70 45, 75 50 C 70 55, 55 60, 50 75 C 45 60, 30 55, 25 50 C 30 45, 45 40, 50 25 Z"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-draw-line"
          />
          <circle cx="50" cy="50" r="5" fill="none" stroke="var(--rose)" strokeWidth="1.5" className="animate-draw-line-delay" />
        </svg>

        {/* Brand Text fading in */}
        <div className="overflow-hidden">
          <h1 className="text-gold tracking-[8px] sm:tracking-[12px] uppercase text-[12px] sm:text-[14px] font-medium preloader-text">
            House of Sonika
          </h1>
        </div>
      </div>
    </div>
  );
}

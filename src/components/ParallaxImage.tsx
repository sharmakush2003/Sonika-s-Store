"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // How much it moves. e.g. 0.2 means it moves 20% of the scroll distance
}

export default function ParallaxImage({ src, alt, className = "", speed = 0.15 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track the scroll position relative to THIS container
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Starts when top of element enters bottom of viewport, ends when bottom leaves top
  });

  // Transform scroll progress (0 to 1) into a translation value (e.g. -15% to 15%)
  // The negative value moves it up, creating the parallax illusion
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden w-full h-full ${className}`}>
      <motion.div
        style={{ y }}
        className="absolute top-[-15%] left-0 w-full h-[130%]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center pointer-events-none"
        />
      </motion.div>
    </div>
  );
}

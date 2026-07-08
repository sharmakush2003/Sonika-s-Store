"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SearchIcon, CloseIcon } from "./Icons";
import { FURNISH_ITEMS, FASHION_ITEMS } from "../app/page";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FilterType = "All" | "Home" | "Fashion";

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FilterType>("All");

  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  // Combine and map data
  const allProducts = useMemo(() => {
    const home = FURNISH_ITEMS.map(item => ({
      ...item,
      category: "Home",
      title: item.name,
      price: item.spots?.[0]?.price || "Starting at 999",
    }));
    
    const fashion = FASHION_ITEMS.map(item => ({
      ...item,
      category: "Fashion",
      name: item.title,
      price: item.spots?.[0]?.price || "Starting at 899",
    }));

    return [...home, ...fashion];
  }, []);

  const filteredProducts = useMemo(() => {
    return allProducts.filter(item => {
      const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase()) || 
                           item.desc.toLowerCase().includes(query.toLowerCase());
      const matchesFilter = filter === "All" || item.category === filter;
      return matchesQuery && matchesFilter;
    });
  }, [query, filter, allProducts]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-[200] bg-ivory/95 backdrop-blur-xl flex flex-col p-6 sm:p-12 overflow-y-auto"
        >
          {/* Header & Search Bar */}
          <div className="w-full max-w-4xl mx-auto mb-8 relative">
            <button 
              onClick={onClose} 
              className="absolute right-0 top-0 p-2 text-deep/60 hover:text-rose transition-colors"
            >
              <CloseIcon className="w-8 h-8" />
            </button>
            
            <div className="text-[12px] uppercase tracking-[4px] text-gold font-semibold mb-4">Discover</div>
            
            <div className="relative border-b border-deep/20 flex items-center pb-4 focus-within:border-deep transition-colors">
              <SearchIcon className="w-8 h-8 text-deep/40 mr-4" />
              <input 
                autoFocus
                type="text" 
                placeholder="Search for Jaipuri quilts, breezy kurtis..." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent outline-none text-[28px] sm:text-[42px] font-light text-deep font-serif placeholder:text-deep/20"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="w-full max-w-4xl mx-auto flex gap-4 mb-12 flex-wrap">
            {["All", "Home", "Fashion"].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f as FilterType)}
                className={`px-6 py-2 rounded-full text-[12px] tracking-[2px] uppercase transition-all duration-300 border ${filter === f ? 'bg-deep text-cream border-deep' : 'bg-transparent text-deep/60 border-deep/20 hover:border-deep/50'}`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Results Grid */}
          <div className="w-full max-w-4xl mx-auto flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center text-deep/40 font-serif text-[24px] py-20">
                No exquisite pieces found matching "{query}".
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-20">
                {filteredProducts.map(item => (
                  <div key={item.title} className="group cursor-pointer flex flex-col" onClick={onClose}>
                    <div className="relative w-full aspect-[4/5] bg-sand/30 overflow-hidden mb-4">
                      <Image 
                        src={item.img} 
                        alt={item.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="text-[10px] uppercase tracking-[2px] text-gold mb-1">{item.category}</div>
                    <div className="text-[20px] font-semibold text-deep font-serif leading-tight">{item.title}</div>
                    <div className="text-[14px] text-muted mt-1">INR {item.price}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const brands = [
  { name: "TechNova", color: "text-blue-500", weight: "font-black" },
  { name: "LUMINA", color: "text-emerald-500", weight: "font-light tracking-[0.3em]" },
  { name: "AETHER", color: "text-purple-500", weight: "font-medium italic" },
  { name: "Nexus.", color: "text-orange-500", weight: "font-bold tracking-tighter" },
  { name: "SYNERGY", color: "text-rose-500", weight: "font-extrabold uppercase" },
  { name: "Vanguard", color: "text-sky-500", weight: "font-serif italic" },
  { name: "TechNova", color: "text-blue-500", weight: "font-black" },
  { name: "LUMINA", color: "text-emerald-500", weight: "font-light tracking-[0.3em]" },
  { name: "AETHER", color: "text-purple-500", weight: "font-medium italic" },
];

export default function TrustBar() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animates from left to right as you scroll down
  const xTranslate = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section 
      ref={containerRef}
      className="py-20 border-y border-foreground/5 bg-background/30 backdrop-blur-md relative z-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl mb-12">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/30">
          Empowering Market Leaders & Visionary Startups
        </p>
      </div>
      
      <motion.div 
        style={{ x: xTranslate }}
        className="flex whitespace-nowrap gap-x-20 md:gap-x-32 opacity-20 grayscale hover:grayscale-0 transition-all duration-700 cursor-default"
      >
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="select-none shrink-0"
          >
            <span className={`text-4xl md:text-6xl ${brand.weight} ${brand.color} transition-colors duration-500`}>
              {brand.name}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

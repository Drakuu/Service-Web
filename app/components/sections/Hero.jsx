"use client";

import { motion } from "framer-motion";
import BackgroundMedia from "../ui/BackgroundMedia";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20">
      <BackgroundMedia variant="image" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" overlayOpacity="bg-background/80" />
      <div className="container mx-auto px-6 max-w-7xl relative z-20 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tight mb-6">
            We Build <span className="text-primary italic pr-2">Stunning</span> <br className="hidden md:block"/> Digital Experiences
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Transform your vision into reality with high-performance, beautiful web applications tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all text-lg shadow-lg shadow-primary/20 hover:scale-105 active:scale-95">
              Start Your Project
            </a>
            <a href="#process" className="px-8 py-4 rounded-full bg-foreground/5 backdrop-blur-md text-foreground font-bold hover:bg-foreground/10 transition-all text-lg border border-foreground/10 hover:scale-105 active:scale-95">
              View Our Process
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

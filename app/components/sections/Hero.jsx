"use client";

import { motion } from "framer-motion";
import BackgroundMedia from "../ui/BackgroundMedia";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <BackgroundMedia
            variant="image"
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
            overlayOpacity="bg-background/80"
          />
        </motion.div>
      </div>

      {/* Animated floating widgets */}
      <motion.div
        className="absolute top-1/4 left-6 md:left-12 z-20 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-4 py-3 hidden md:flex items-center gap-3 shadow-xl"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="text-sm font-medium text-foreground/90">Available for Projects</span>
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-6 md:right-12 z-20 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-4 py-3 hidden md:block shadow-xl"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
      >
        <div className="text-xs text-foreground/50 mb-1 font-medium uppercase tracking-wider">Completed</div>
        <div className="text-2xl font-bold text-primary">50+ Projects</div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-6 md:left-12 z-20 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-4 py-3 hidden md:flex items-center gap-2 shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.7, ease: "easeOut" }}
      >
        {["Next.js", "React", "AI"].map((tech) => (
          <span key={tech} className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold border border-primary/30">
            {tech}
          </span>
        ))}
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-6 md:right-12 z-20 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-4 py-3 hidden md:flex items-center gap-3 shadow-xl"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.7, ease: "easeOut" }}
      >
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary/40">
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" alt="Client" className="w-full h-full object-cover" />
        </div>
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary/40 -ml-4">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Client" className="w-full h-full object-cover" />
        </div>
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary/40 -ml-4">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Client" className="w-full h-full object-cover" />
        </div>
        <span className="text-xs font-medium text-foreground/80 ml-1">99% Satisfaction</span>
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative z-20 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tight mb-6">
            We Build <span className="text-primary italic pr-2">Stunning</span> <br className="hidden md:block"/>Digital Experiences
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Transform your vision into reality with high-performance, beautiful web applications tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/923275058148" 
              target="_blank"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all text-lg shadow-lg shadow-primary/20 hover:scale-105 active:scale-95"
            >
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

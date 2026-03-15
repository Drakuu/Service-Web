"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Working with Vertex was a game-changer for our startup. They delivered an incredible product that exceeded all our expectations.",
    author: "Ayesha Siddiqui",
    title: "CEO, TechNova",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The ERP system Vertex built for us transformed our warehouse operations. Real-time tracking has eliminated 95% of our previous data errors.",
    author: "Imran Ahmed",
    title: "Operations Director, LogisticsFlow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Their team doesn't just write code; they understand business goals and actively contribute to the product's strategic vision.",
    author: "Ahmed Khan",
    title: "Founder, GrowthStack",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Our Property Finder portal has seen a 300% increase in lead generation since the redesign. The UI is exceptionally fast and intuitive.",
    author: "Zainab Raza",
    title: "Marketing Head, EstateVista",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The AI integration they built for us reduced our operational costs by 40% in the first quarter. Absolutely outstanding work.",
    author: "Sana Malik",
    title: "CTO, NeuralPay",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000); // 6 seconds per slide for a slower feel
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <section className="py-32 bg-background relative z-10 overflow-hidden" id="testimonials">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-4">Client Success</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            High-impact solutions for visionary brands.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto h-[480px] md:h-[400px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 100, damping: 20 },
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 }
              }}
              className="absolute w-full p-10 md:p-16 rounded-3xl bg-secondary/20 border border-foreground/5 shadow-2xl flex flex-col items-center text-center"
            >
              <div className="text-primary text-8xl font-serif absolute -top-4 left-10 opacity-10 pointer-events-none">&ldquo;</div>
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-foreground/90 italic">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </p>
              
              <div className="flex flex-col items-center gap-4 mt-auto">
                <div className="w-16 h-16 rounded-full border-2 border-primary/20 overflow-hidden">
                  <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground">{testimonials[currentIndex].author}</h4>
                  <p className="text-primary font-bold tracking-wider uppercase text-xs">{testimonials[currentIndex].title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-10 bg-primary" : "bg-foreground/10 hover:bg-foreground/20"
                }`}
              />
            ))}
          </div>

          {/* Side Arrows (Hidden on Mobile) */}
          <button 
            onClick={prevSlide}
            className="hidden lg:flex absolute -left-24 w-14 h-14 items-center justify-center rounded-full border border-foreground/10 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
          >
            <ChevronLeft size={28} />
          </button>
          <button 
            onClick={nextSlide}
            className="hidden lg:flex absolute -right-24 w-14 h-14 items-center justify-center rounded-full border border-foreground/10 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}

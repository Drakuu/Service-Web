"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Working with this team was a game-changer for our startup. They delivered an incredible product that exceeded all our expectations.",
      author: "Ayesha Siddiqui",
      title: "CEO, TechNova",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Their team doesn't just write code; they understand business goals and actively contribute to the product's strategic vision.",
      author: "Ahmed Khan",
      title: "Founder, GrowthStack",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "The AI integration they built for us reduced our operational costs by 40% in the first quarter. Absolutely outstanding work.",
      author: "Sana Malik",
      title: "CTO, NeuralPay",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="py-32 bg-background relative z-10" id="testimonials">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-4">Client Success</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our partners have to say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-10 rounded-3xl bg-secondary/30 border border-foreground/5 relative hover:border-primary/20 transition-colors duration-300 flex flex-col"
            >
              <div className="text-primary text-6xl font-serif absolute top-6 left-6 opacity-20">&ldquo;</div>
              <p className="text-lg md:text-xl font-medium leading-relaxed mb-8 relative z-10 text-foreground/90 grow">
                &ldquo;{test.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center font-bold text-lg text-foreground overflow-hidden shrink-0">
                  <img src={test.image} alt={test.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">{test.author}</h4>
                  <p className="text-foreground/60 text-sm">{test.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

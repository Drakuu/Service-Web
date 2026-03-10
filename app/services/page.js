"use client";

import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Server, Layout, BrainCircuit, Box } from "lucide-react";

const techServices = [
  {
    title: "Modern Frontend",
    description: "Lightning-fast, SEO-optimized web applications built with Next.js, React, and Tailwind CSS. We deliver pixel-perfect user interfaces that scale.",
    icon: <Layout className="text-primary" size={32} />
  },
  {
    title: "Robust Backend",
    description: "Highly scalable, secure server architectures using Node.js, Express, and PostgreSQL. We build APIs that power enterprise-grade applications.",
    icon: <Server className="text-primary" size={32} />
  },
  {
    title: "AI Integration",
    description: "Custom AI solutions leveraging leading LLMs, specialized models via Ollama, and agentic workflows to automate your business processes.",
    icon: <BrainCircuit className="text-primary" size={32} />
  },
  {
    title: "3D & Interactive",
    description: "Immersive web experiences using Three.js and WebGL. Stand out from the competition with interactive 3D product configurators and visualizers.",
    icon: <Box className="text-primary" size={32} />
  }
];

export default function Services() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="grow pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-4">Our Services</h1>
            <p className="text-xl text-foreground/80 mb-16 max-w-2xl">
              From zero to hero. We build full-stack solutions tailored precisely to your requirements, employing the bleeding edge of web technology.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techServices.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-10 rounded-3xl bg-secondary/30 border border-foreground/5 hover:border-primary/40 transition-colors group"
              >
                <div className="w-16 h-16 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold font-heading mb-4">{service.title}</h2>
                <p className="text-foreground/80 leading-relaxed text-lg">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

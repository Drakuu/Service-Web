"use client";

import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Server, Layout, BrainCircuit, Box } from "lucide-react";

const techServices = [
  {
    title: "Modern Frontend",
    description: "Lightning-fast, SEO-optimized web applications built with Next.js, React, and Tailwind CSS. We deliver pixel-perfect user interfaces that scale.",
    icon: <Layout className="text-primary" size={32} />,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Robust Backend",
    description: "Highly scalable, secure server architectures using Node.js, Express, and PostgreSQL. We build APIs that power enterprise-grade applications.",
    icon: <Server className="text-primary" size={32} />,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "AI Integration",
    description: "Custom AI solutions leveraging leading LLMs, specialized models via Ollama, and agentic workflows to automate your business processes.",
    icon: <BrainCircuit className="text-primary" size={32} />,
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "3D & Interactive",
    description: "Immersive web experiences using Three.js and WebGL. Stand out from the competition with interactive 3D product configurators and visualizers.",
    icon: <Box className="text-primary" size={32} />,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80"
  }
];

const techStack = [
  { name: "Next.js", color: "#ffffff" },
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#68A063" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Tailwind", color: "#38BDF8" },
  { name: "OpenAI", color: "#10A37F" },
  { name: "AWS", color: "#FF9900" },
  { name: "Docker", color: "#2496ED" },
  { name: "Three.js", color: "#ffffff" },
];

function TechTicker() {
  const doubled = [...techStack, ...techStack]; // duplicate for seamless loop
  return (
    <div className="overflow-hidden relative w-full">
      <div className="absolute left-0 top-0 h-full w-24 z-10 bg-linear-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 z-10 bg-linear-to-l from-background to-transparent pointer-events-none" />
      <div className="flex gap-6 animate-tech-ticker w-max">
        {doubled.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-secondary/40 border border-foreground/10 text-sm font-bold whitespace-nowrap"
            style={{ color: tech.color }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: tech.color }}></span>
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="grow pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-7xl mb-16">
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
                className="p-10 rounded-3xl bg-secondary/30 border border-foreground/5 hover:border-primary/40 transition-all group relative overflow-hidden"
              >
                {/* Subtle service image in background */}
                <div
                  className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold font-heading mb-4">{service.title}</h2>
                  <p className="text-foreground/80 leading-relaxed text-lg">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack Ticker */}
        <section className="py-16 border-t border-b border-foreground/5">
          <div className="container mx-auto px-6 max-w-7xl mb-8">
            <p className="text-foreground/40 text-sm font-medium uppercase tracking-widest text-center mb-8">
              Technologies We Master
            </p>
          </div>
          <TechTicker />
        </section>
      </main>
      <Footer />

      <style jsx global>{`
        @keyframes tech-ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-tech-ticker {
          animation: tech-ticker 20s linear infinite;
        }
        .animate-tech-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

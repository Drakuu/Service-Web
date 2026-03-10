"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BackgroundMedia from "../components/ui/BackgroundMedia";

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const numericTarget = parseInt(target.replace(/\D/g, ""), 10);
    let start = 0;
    const step = numericTarget / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= numericTarget) { setCount(numericTarget); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-4xl font-bold text-primary mb-2">
      {count}{suffix}
    </div>
  );
}

const teamMembers = [
  {
    name: "Alex Rivera",
    role: "Lead Architect",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    bio: "10+ years building scalable systems."
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Lead",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    bio: "Design systems & pixel-perfect craft."
  },
  {
    name: "Marcus Johnson",
    role: "AI Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    bio: "LLMs, agents, and neural networks."
  },
  {
    name: "Yuki Tanaka",
    role: "Full-Stack Dev",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    bio: "Next.js, Node.js, and cloud infra."
  }
];

const stats = [
  { value: "50", suffix: "+", label: "Projects Delivered" },
  { value: "99", suffix: "%", label: "Client Satisfaction" },
  { value: "24", suffix: "/7", label: "Global Support" },
  { value: "10", suffix: "x", label: "Performance Leap" },
];

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        {/* Hero */}
        <section className="relative py-32 min-h-[70vh] flex items-center overflow-hidden">
          <BackgroundMedia
            variant="image"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
            overlayOpacity="bg-background/85"
          />
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-8">
                Engineering <br className="hidden md:block" /> <span className="text-primary italic">Excellence</span>
              </h1>
              <p className="text-2xl text-foreground/80 leading-relaxed mb-8">
                We are a premium technical agency born from a passion for code and design. Based globally, we partner with ambitious companies to build products that define tomorrow.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Philosophy & Animated Stats */}
        <section className="py-24 bg-background border-t border-foreground/5 relative z-10">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold font-heading mb-6">Our Philosophy</h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  We believe that great software is the result of deep empathy for the user, rigorous engineering standards, and an uncompromising eye for design.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Every line of code we write and every pixel we place is driven by a singular goal: generating measurable business impact through technical superiority.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((stat, idx) => (
                  <div key={idx} className="p-8 rounded-3xl bg-secondary/30 border border-foreground/5 text-center hover:border-primary/20 transition-colors">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    <div className="text-foreground/60">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-background border-t border-foreground/5 relative z-10">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-4">Meet the Team</h2>
              <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
                A globally distributed team of senior engineers, designers, and AI specialists united by a passion for exceptional work.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group text-center"
                >
                  <div className="w-full aspect-square rounded-3xl overflow-hidden mb-5 relative border border-foreground/10 group-hover:border-primary/30 transition-colors">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-foreground/60 text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

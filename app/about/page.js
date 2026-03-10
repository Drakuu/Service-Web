"use client";

import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BackgroundMedia from "../components/ui/BackgroundMedia";

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="relative py-32 min-h-[60vh] flex items-center">
          <BackgroundMedia variant="gradient" src="" overlayOpacity="bg-background/90" />
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-8">
                Engineering <br className="hidden md:block"/> <span className="text-primary italic">Excellence</span>
              </h1>
              <p className="text-2xl text-foreground/80 leading-relaxed mb-8">
                We are a premium technical agency born from a passion for code and design. Based globally, we partner with ambitious companies to build products that define tomorrow.
              </p>
            </motion.div>
          </div>
        </section>

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
                <div className="p-8 rounded-3xl bg-secondary/30 border border-foreground/5 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-foreground/60">Projects Delivered</div>
                </div>
                <div className="p-8 rounded-3xl bg-secondary/30 border border-foreground/5 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">99%</div>
                  <div className="text-foreground/60">Client Satisfaction</div>
                </div>
                <div className="p-8 rounded-3xl bg-secondary/30 border border-foreground/5 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-foreground/60">Global Support</div>
                </div>
                <div className="p-8 rounded-3xl bg-secondary/30 border border-foreground/5 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10x</div>
                  <div className="text-foreground/60">Performance Leap</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

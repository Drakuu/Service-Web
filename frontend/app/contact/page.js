"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="grow pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full md:w-1/2"
            >
              <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6">Let's Connect</h1>
              <p className="text-xl text-foreground/80 mb-12">
                Ready to start your next big project? Drop us a message, and our technical leads will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6 text-lg">
                <div>
                  <h4 className="font-bold text-foreground/60 text-sm uppercase tracking-wider mb-2">Email Us</h4>
                  <a href="mailto:hello@luminous.dev" className="hover:text-primary transition-colors">hello@luminous.dev</a>
                </div>
                <div>
                  <h4 className="font-bold text-foreground/60 text-sm uppercase tracking-wider mb-2">Global Headquarters</h4>
                  <p>123 Innovation Drive<br/>Tech District, TX 78701</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full md:w-1/2 p-10 rounded-3xl bg-secondary/30 border border-foreground/5"
            >
              {formStatus === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6 text-4xl">✓</div>
                  <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-foreground/80">Thank you for reaching out. We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 opacity-80" htmlFor="name">Complete Name</label>
                    <input 
                      id="name"
                      type="text" 
                      required
                      className="w-full px-6 py-4 rounded-xl bg-foreground/5 border border-foreground/10 focus:border-primary outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 opacity-80" htmlFor="email">Email Address</label>
                    <input 
                      id="email"
                      type="email" 
                      required
                      className="w-full px-6 py-4 rounded-xl bg-foreground/5 border border-foreground/10 focus:border-primary outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 opacity-80" htmlFor="message">Project Details</label>
                    <textarea 
                      id="message"
                      required
                      rows={5}
                      className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none transition-colors resize-none"
                    />
                  </div>
                  <button 
                    disabled={formStatus === "submitting"}
                    type="submit" 
                    className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50 hover:scale-105 active:scale-95"
                  >
                    {formStatus === "submitting" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

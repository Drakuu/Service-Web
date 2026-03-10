"use client";

import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Check } from "lucide-react";

const packages = [
  {
    name: "MVP Builder",
    price: "$5,000",
    description: "Launch your idea fast.",
    features: ["Core Features Implementation", "Responsive Design", "Basic SEO Setup", "1 Month Support"],
    highlight: false
  },
  {
    name: "Growth Partner",
    price: "$12,000",
    description: "Scale your business with confidence.",
    features: ["Custom Premium Design", "Full-Stack Integration", "Advanced SEO Optimization", "Analytics Dashboard", "3 Months Support"],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For complex, high-scale operations.",
    features: ["Microservices Architecture", "Dedicated Team", "AI/LLM Integration", "SLA Guarantees", "24/7 Priority Support"],
    highlight: false
  }
];

export default function Packages() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="grow pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6">Pricing Packages</h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Transparent, fixed-price solutions for projects of all sizes. No hidden fees.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`p-10 rounded-3xl border relative flex flex-col ${pkg.highlight ? 'bg-primary/20 border-primary' : 'bg-secondary/30 border-foreground/5'}`}
              >
                {pkg.highlight && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-lg shadow-primary/20">
                    Most Popular
                  </div>
                )}
                <h2 className="text-2xl font-bold font-heading mb-2">{pkg.name}</h2>
                <p className="text-foreground/60 mb-6">{pkg.description}</p>
                <div className="text-4xl font-bold mb-8">{pkg.price}</div>
                
                <div className="grow">
                  <ul className="flex flex-col gap-4">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-foreground/80">
                        <Check className="text-primary" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-10">
                  <button className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg ${pkg.highlight ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/20 hover:scale-105 active:scale-95' : 'bg-foreground/10 hover:bg-foreground/20 hover:scale-105 active:scale-95'}`}>
                    Select Package
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

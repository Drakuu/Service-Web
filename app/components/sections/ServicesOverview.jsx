"use client";

import { Code2, Paintbrush, Rocket, Smartphone } from "lucide-react";

const services = [
  {
    title: "Full-Stack Development",
    description: "End-to-end web applications built with modern frameworks and highly scalable architectures.",
    icon: <Code2 size={32} className="text-primary" />
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive, and accessible designs focusing heavily on user experience and conversion.",
    icon: <Paintbrush size={32} className="text-primary" />
  },
  {
    title: "Mobile Experiences",
    description: "Cross-platform mobile applications that bring your web experience to the palm of their hands.",
    icon: <Smartphone size={32} className="text-primary" />
  },
  {
    title: "Performance Optimization",
    description: "Auditing and upgrading existing platforms for blazing fast load times and Core Web Vitals.",
    icon: <Rocket size={32} className="text-primary" />
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-32 bg-background relative z-10" id="services">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-4">Our Expertise</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg md:text-xl">
            Comprehensive technical solutions designed to scale your business and outpace the competition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-3xl bg-secondary/30 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:bg-secondary/50 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">{service.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

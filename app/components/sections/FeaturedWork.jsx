"use client";

import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Next-Gen Enterprise ERP",
    category: "Business Intelligence",
    description: "A comprehensive resource planning system with real-time inventory tracking, automated payroll, and deep data analytics for large-scale operations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Smart CRM System",
    category: "Customer Relations",
    description: "Automated lead management and customer journey tracking with integrated communication tools to boost sales team efficiency by 40%.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Cloud Calling Center",
    category: "Telecommunications",
    description: "High-concurrency VoIP platform featuring intelligent call routing, real-time sentiment analysis, and seamless CRM integration.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Property Finder Hub",
    category: "Real Estate Tech",
    description: "A premium real estate portal with advanced filtering, map-based search, and automated virtual tour scheduling for modern agencies.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Hospital Management",
    category: "HealthTech Solutions",
    description: "Centralized healthcare platform managing patient records, appointment scheduling, and pharmacy inventory with HIPAA-compliant security.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "AI-Powered POS",
    category: "Retail Intelligence",
    description: "Modern point-of-sale system featuring AI-driven demand forecasting, loyalty program automation, and multi-store synchronization.",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80"
  }
];

export default function FeaturedWork() {
  return (
    <section className="py-32 bg-background relative z-10" id="work">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-4">Featured Work</h2>
            <p className="text-foreground/60 text-lg max-w-xl">
              A selection of our most impactful projects that transformed businesses and solved complex problems.
            </p>
          </div>
          <a href="#work" className="group flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium">
            View All Projects
            <div className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center group-hover:border-primary transition-colors">
              <ArrowUpRight size={16} />
            </div>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="w-full aspect-4/3 rounded-3xl bg-foreground/5 border border-foreground/10 mb-6 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-br from-primary/40 to-purple-500/40 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold font-heading">{project.title}</h3>
                  <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowUpRight size={20} className="text-foreground" />
                  </div>
                </div>
                <p className="text-primary text-sm font-bold uppercase tracking-wider">{project.category}</p>
                <p className="text-foreground/60 text-sm leading-relaxed mt-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-foreground/10 pt-24 pb-12 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute bottom-31 left-0 right-0 pointer-events-none select-none overflow-hidden z-0 flex justify-center">
        <h2 
          className="text-[11vw] font-black uppercase whitespace-nowrap leading-none tracking-tighter translate-y-1/3"
          style={{ 
            WebkitTextStroke: '2px oklch(0.145 0 0 / 0.1)', 
            color: 'transparent' 
          }}
        >
          Vertex System
        </h2>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="text-2xl font-bold font-heading tracking-tight flex items-center gap-2 mb-6">
              <img 
                src="/assets/logo.png" 
                alt="Vertex System Logo" 
                className="w-14 h-14 object-contain"
              />
              Vertex System
            </Link>
            <p className="text-foreground/60 text-sm leading-relaxed mb-6">
              We build high-growth technical solutions for visionary brands. Let's create something extraordinary together.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider">Services</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Full-Stack Web Apps</Link></li>
              <li><Link href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Design Systems</Link></li>
              <li><Link href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">AI Integrations</Link></li>
              <li><Link href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Mobile Experiences</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Careers</Link></li>
              <li><Link href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="https://wa.me/923275058148" target="_blank" className="text-foreground/60 hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider">Connect</h4>
            <Link 
              href="https://wa.me/923275058148" 
              target="_blank"
              className="group flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
            >
              <span className="font-medium text-sm">Book a Call</span>
              <div className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-foreground/10 text-sm text-foreground/40">
          <p>&copy; {new Date().getFullYear()} Vertex System. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "Our Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2 bg-background/80 backdrop-blur-md border-b border-foreground/10" : "py-3 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold font-heading tracking-tight flex items-center gap-2">
          <img 
            src="/assets/logo.png" 
            alt="Vertex System Logo" 
            className="w-14 h-14 object-contain"
          />
          Vertex System
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="https://wa.me/923275058148" 
            target="_blank"
            className="px-6 py-2.5 rounded-full bg-foreground text-background text-sm font-bold hover:bg-foreground/90 transition-colors"
          >
            Book Consultation
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-foreground/10 px-6 py-4 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href}
              className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="https://wa.me/923275058148" 
            target="_blank"
            className="px-6 py-3 rounded-full bg-foreground text-background text-center font-bold hover:bg-foreground/90 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Consultation
          </Link>
        </div>
      )}
    </motion.header>
  );
}

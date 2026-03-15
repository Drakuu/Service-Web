"use client";

export default function CallToAction() {
  return (
    <section className="py-32 relative z-10 overflow-hidden border-t border-foreground/5" id="contact">
      {/* Large ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      
      {/* Animated floating particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20 blur-sm"
            style={{
              width: `${Math.random() * 100 + 40}px`,
              height: `${Math.random() * 100 + 40}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-cta ${6 + i * 1.5}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6">
          Ready to build something <span className="italic text-primary">amazing?</span>
        </h2>
        <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
          Let's discuss how we can help your business reach its full technical potential. Our experts are ready for your project.
        </p>
        <div className="max-w-md mx-auto">
          <a 
            href="https://wa.me/923275058148" 
            target="_blank"
            className="inline-block w-full px-6 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 text-center text-lg"
          >
            Get in Touch via WhatsApp
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-cta {
          0% { transform: translateY(0px) scale(1); opacity: 0.3; }
          100% { transform: translateY(-40px) scale(1.1); opacity: 0.7; }
        }
      `}</style>
    </section>
  );
}

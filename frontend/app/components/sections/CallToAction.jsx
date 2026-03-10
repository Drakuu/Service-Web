export default function CallToAction() {
  return (
    <section className="py-32 relative z-10 overflow-hidden border-t border-foreground/5" id="contact">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6">
          Ready to build something <span className="italic text-primary">amazing?</span>
        </h2>
        <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
          Let's discuss how we can help your business reach its full technical potential. Our experts are ready for your project.
        </p>
        <form className="max-w-md mx-auto flex flex-col gap-4">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="w-full px-6 py-4 rounded-xl bg-foreground/5 border border-foreground/10 focus:border-primary outline-none transition-colors text-foreground"
            required
          />
          <button 
            type="button" 
            className="w-full px-6 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            Get in Touch
          </button>
        </form>
      </div>
    </section>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Working with Luminous was a game-changer for our startup. They delivered an incredible product that exceeded all our expectations.",
      author: "Sarah Jenkins",
      title: "CEO, TechNova",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      quote: "Their team doesn't just write code; they understand business goals and actively contribute to the product's strategic vision.",
      author: "David Chen",
      title: "Founder, GrowthStack",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-32 bg-background relative z-10" id="testimonials">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-4">Client Success</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our partners have to say.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => (
            <div key={idx} className="p-10 rounded-3xl bg-secondary/30 border border-foreground/5 relative">
              <div className="text-primary text-6xl font-serif absolute top-6 left-6 opacity-20 hover:opacity-40 transition-opacity">"</div>
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 relative z-10 text-foreground/90">
                "{test.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center font-bold text-lg text-foreground overflow-hidden">
                  <img src={test.image} alt={test.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">{test.author}</h4>
                  <p className="text-foreground/60 text-sm">{test.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

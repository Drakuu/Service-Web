import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80"
  },
  {
    title: "Fintech Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
  },
  {
    title: "Healthcare App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee4?auto=format&fit=crop&q=80"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="w-full aspect-[4/3] rounded-3xl bg-foreground/5 border border-foreground/10 mb-6 overflow-hidden relative">
                <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-purple-500/40 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold font-heading mb-1">{project.title}</h3>
                  <p className="text-primary text-sm font-medium">{project.category}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowUpRight size={20} className="text-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

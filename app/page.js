import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import ServicesOverview from "./components/sections/ServicesOverview";
import FeaturedWork from "./components/sections/FeaturedWork";
import Testimonials from "./components/sections/Testimonials";
import CallToAction from "./components/sections/CallToAction";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <Hero />
        <ServicesOverview />
        <FeaturedWork />
        <Testimonials />
        <CallToAction />
      </main>
      <div className="z-10 relative">
        <Footer />
      </div>
    </div>
  );
}

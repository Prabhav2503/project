import { Hero } from "./components/Hero";
import { LogoMarquee } from "./components/LogoMarquee";
import { AdminFeatures } from "./components/AdminFeatures";
import { DriverApp } from "./components/DriverApp";
import { Enterprise } from "./components/Enterprise";
import { AIAssistant } from "./components/AIAssistant";

import { Testimonials } from "./components/Testimonials";

import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";


export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-clip" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <Hero />
      <LogoMarquee />
      <AdminFeatures />
      <DriverApp />
      <Enterprise />
      <AIAssistant />
      <Testimonials />


      <FAQ />
      <FinalCTA />
    </div>
  );
}

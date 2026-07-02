import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { WhyChoose } from "./components/WhyChoose";
import { Process } from "./components/Process";
import { Metrics } from "./components/Metrics";
import { Testimonials } from "./components/Testimonials";
import { Portfolio } from "./components/Portfolio";
import { Pricing } from "./components/Pricing";
import { Resources } from "./components/Resources";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [preFilledService, setPreFilledService] = useState<string | undefined>(undefined);

  const handleBookConsultation = () => {
    const contactSection = document.getElementById("contact-form-container");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExploreServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setPreFilledService(serviceTitle);
    const contactSection = document.getElementById("contact-form-container");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClearPreFilledService = () => {
    setPreFilledService(undefined);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-accent/30 selection:text-primary">
      {/* Navigation Header */}
      <Navbar onBookClick={handleBookConsultation} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Banner Section */}
        <Hero
          onBookClick={handleBookConsultation}
          onExploreClick={handleExploreServices}
        />

        {/* Professional Introduction */}
        <About />

        {/* Success Counter Bar */}
        <Metrics />

        {/* Elite Services Grid */}
        <Services onSelectService={handleSelectService} />

        {/* Value Propositions */}
        <WhyChoose />

        {/* Strategic Connect Steps */}
        <Process />

        {/* Deliverables Cases */}
        <Portfolio />

        {/* Dynamic Pricing Plans & Packages */}
        <Pricing />

        {/* Realistic Sample Reviews */}
        <Testimonials />

        {/* Knowledge & Advisory Library */}
        <Resources />

        {/* FAQ Accordion Database */}
        <FAQ />

        {/* Contact Advisory Channels & Sched Form */}
        <Contact
          preFilledService={preFilledService}
          onClearPreFilledService={handleClearPreFilledService}
        />
      </main>

      {/* Footer Banner */}
      <Footer />
    </div>
  );
}

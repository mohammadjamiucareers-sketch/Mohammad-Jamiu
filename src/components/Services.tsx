import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, X, Check, ArrowRight } from "lucide-react";
import { servicesData } from "../data";
import { LucideIcon } from "./LucideIcon";
import { Service } from "../types";

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services = ({ onSelectService }: ServicesProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeService, setActiveService] = useState<Service | null>(null);

  // Group services into high-level navigation tabs
  const categories = ["All", "Resume & Cover Letters", "Career Coaching", "Strategy & Negotiation"];

  const getServiceCategory = (id: string): string => {
    if (id.includes("resume") || id.includes("cv") || id.includes("letter")) return "Resume & Cover Letters";
    if (id.includes("coaching") || id.includes("transition")) return "Career Coaching";
    return "Strategy & Negotiation";
  };

  const filteredServices = servicesData.filter((service) => {
    const serviceCategory = getServiceCategory(service.id);
    const matchesCategory = selectedCategory === "All" || serviceCategory === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold text-accent tracking-widest uppercase block">
            Executive Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight" id="services-headline">
            Our Elite Services Portfolio
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Every career document, strategy blueprint, and 1-on-1 coaching session is custom-engineered to elevate your career authority and get you noticed by global headhunters.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12" id="services-filter-bar">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
                }`}
                id={`btn-cat-${category.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:max-w-xs flex-shrink-0">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 pointer-events-none">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-full bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all shadow-sm"
              id="services-search-input"
            />
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            id="services-grid"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => setActiveService(service)}
                  className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                  id={`service-card-${service.id}`}
                >
                  <div>
                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-xl bg-primary/5 group-hover:bg-primary text-primary group-hover:text-accent flex items-center justify-center mb-6 transition-all duration-300 shadow-inner">
                      <LucideIcon name={service.icon} size={22} className="transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center text-accent text-xs font-bold uppercase tracking-widest gap-1 group-hover:gap-2 transition-all">
                    <span>Explore details</span>
                    <ArrowRight size={14} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-slate-100" id="services-empty-state">
            <p className="text-slate-500 font-medium">No services found matching your search.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 text-accent text-xs font-bold uppercase tracking-widest hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
              className="fixed inset-0 bg-primary/80 backdrop-blur-sm"
              id="services-modal-backdrop"
            />

            {/* Modal container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl border-2 border-accent max-w-2xl w-full relative overflow-hidden z-10"
              id="services-modal-content"
            >
              {/* Gold luxury accents */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-accent" />

              {/* Close Button */}
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-primary transition-colors cursor-pointer p-1.5 rounded-lg hover:bg-slate-100"
                id="close-service-modal"
                aria-label="Close Modal"
              >
                <X size={20} />
              </button>

              <div className="p-8 sm:p-10 text-left">
                {/* Modal Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary text-accent flex items-center justify-center shadow-md">
                    <LucideIcon name={activeService.icon} size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-widest font-bold uppercase text-accent">
                      Service Breakdown
                    </span>
                    <h3 className="text-2xl font-extrabold text-primary" id="modal-service-title">
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                {/* Sample Service Mockup Image */}
                {activeService.image && (
                  <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden mb-6 relative border border-slate-200/65 shadow-sm">
                    <img 
                      src={activeService.image} 
                      alt={activeService.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent pointer-events-none" />
                  </div>
                )}

                {/* Main Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {activeService.description}
                </p>

                {/* Key Benefits */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-xs font-bold uppercase text-primary tracking-wider border-b border-slate-100 pb-2">
                    What we accomplish together
                  </h4>
                  <ul className="space-y-3">
                    {activeService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => {
                      onSelectService(activeService.title);
                      setActiveService(null);
                    }}
                    className="flex-1 bg-primary hover:bg-primary/95 text-white py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide text-center cursor-pointer transition-all flex items-center justify-center gap-2"
                    id="modal-enquire-btn"
                  >
                    Enquire About Service
                    <ArrowRight size={16} />
                  </button>
                  <button
                    onClick={() => setActiveService(null)}
                    className="sm:px-6 py-3.5 border border-slate-200 hover:border-slate-400 rounded-xl text-slate-600 hover:text-slate-800 font-semibold text-sm cursor-pointer transition-colors"
                    id="modal-close-secondary"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Award, ArrowUpRight, ArrowRight } from "lucide-react";
import { portfolioProjectsData } from "../data";
import { PortfolioProject } from "../types";

export const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(portfolioProjectsData[0]);

  const tabs = ["All", "Resume Optimization", "LinkedIn Makeover", "Career Coaching Plan", "Executive Resume", "Job Search Strategy Roadmap", "Cover Letter"];

  const filteredProjects = activeTab === "All"
    ? portfolioProjectsData
    : portfolioProjectsData.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold text-accent tracking-widest uppercase block">
            Case Deliverables
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight" id="portfolio-headline">
            Elite Project Portfolio
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Examine the exact challenges, targeted strategic actions, and high-impact career metrics delivered to our executive and mid-level clients.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap gap-2 justify-center mb-12 border-b border-slate-100 pb-6" id="portfolio-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                const firstPrj = portfolioProjectsData.find(p => tab === "All" || p.category === tab);
                if (firstPrj) setSelectedProject(firstPrj);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? "bg-primary text-white shadow-md"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
              id={`portfolio-tab-btn-${tab.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {tab === "All" ? "View All Cases" : tab}
            </button>
          ))}
        </div>

        {/* Dynamic Split View: Left List, Right Active Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Filtered List of Case Cards */}
          <div className="lg:col-span-5 space-y-4" id="portfolio-list">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onClick={() => setSelectedProject(project)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-left flex justify-between items-center ${
                    selectedProject?.id === project.id
                      ? "bg-primary text-white border-primary shadow-lg"
                      : "bg-slate-50 text-slate-800 border-slate-200/60 hover:bg-slate-100 hover:border-slate-300"
                  }`}
                  id={`portfolio-list-item-${project.id}`}
                >
                  <div className="space-y-1 pr-4">
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${
                      selectedProject?.id === project.id ? "text-accent" : "text-slate-500"
                    }`}>
                      {project.category}
                    </span>
                    <h3 className="text-sm font-bold tracking-tight leading-snug">
                      {project.title}
                    </h3>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    selectedProject?.id === project.id ? "bg-accent text-primary" : "bg-slate-200/50 text-slate-500"
                  }`}>
                    <ArrowUpRight size={16} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Right Column: Complete active project detail panel */}
          <div className="lg:col-span-7" id="portfolio-detail-panel">
            <AnimatePresence mode="wait">
              {selectedProject && (
                <motion.div
                  key={selectedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200/60 text-left relative overflow-hidden"
                  id={`portfolio-active-detail-${selectedProject.id}`}
                >
                  {/* Luxury accent ring */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

                  {/* Header info */}
                  <div className="flex flex-wrap justify-between items-start gap-4 border-b border-slate-200 pb-6 mb-6">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">
                        Featured Case Study
                      </span>
                      <h3 className="text-2xl font-black text-primary tracking-tight">
                        {selectedProject.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Client Demographic: <span className="text-primary">{selectedProject.clientType}</span>
                      </p>
                    </div>

                    <div className="px-3.5 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-xs font-semibold text-primary">
                      {selectedProject.category}
                    </div>
                  </div>

                  {/* Sample Portfolio Image */}
                  {selectedProject.image && (
                    <div className="w-full h-48 sm:h-60 rounded-2xl overflow-hidden mb-6 relative group border border-slate-200/80 shadow-sm">
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title} 
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
                    </div>
                  )}

                  {/* Core description text */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  {/* Challenge -> Solution -> Result flow */}
                  <div className="space-y-6">
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-red-600/90 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                        The Strategic Challenge
                      </h4>
                      <p className="text-sm text-slate-600 pl-3 border-l-2 border-red-100">
                        {selectedProject.challenge}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Our Executed Solution
                      </h4>
                      <p className="text-sm text-slate-600 pl-3 border-l-2 border-primary/20">
                        {selectedProject.solution}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        Verified Business Results
                      </h4>
                      <p className="text-sm text-slate-700 font-medium pl-3 border-l-2 border-emerald-100">
                        {selectedProject.result}
                      </p>
                    </div>
                  </div>

                  {/* Metrics box if available */}
                  {selectedProject.metrics && (
                    <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-200">
                      {selectedProject.metrics.map((m, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                          <div className="text-2xl font-black text-primary">{m.value}</div>
                          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

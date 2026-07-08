import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Calendar, Clock, X, ArrowRight, ArrowLeft } from "lucide-react";
import { careerResourcesData } from "../data";
import { CareerResource } from "../types";

export const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeArticle, setActiveArticle] = useState<CareerResource | null>(null);

  const categories = ["All", "Executive Advisory", "Resume", "LinkedIn", "Interview", "Salary", "Networking", "Career Change", "Branding"];

  const filteredResources = selectedCategory === "All"
    ? careerResourcesData
    : careerResourcesData.filter(r => r.category === selectedCategory);

  return (
    <section id="resources" className="py-20 md:py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold text-accent tracking-widest uppercase block">
            Knowledge Vault
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight" id="resources-headline">
            Career Resources & Insider Guides
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Access senior advisory guides and tactical briefs outlining exact methodologies used by high-earning corporate professionals globally.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-2 justify-center mb-12" id="resources-categories">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
              }`}
              id={`resource-cat-btn-${category.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {category === "All" ? "All Resources" : category}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="resources-grid">
          <AnimatePresence mode="popLayout">
            {filteredResources.map((article, index) => (
              <motion.div
                key={article.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setActiveArticle(article)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-accent/30 hover:shadow-xl cursor-pointer transition-all duration-300 flex flex-col justify-between group"
                id={`resource-card-${article.id}`}
              >
                <div>
                  {/* Article Thumbnail Image */}
                  {article.image ? (
                    <div className="w-full h-40 overflow-hidden relative border-b border-slate-100">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
                    </div>
                  ) : (
                    <div className="w-full h-3 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
                  )}

                  <div className="p-6 pb-0">
                    {/* Category & Read Time metadata */}
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                      <span className="text-accent">{article.category}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={10} />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-250 leading-snug line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">
                      {article.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-3 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                    <Calendar size={10} />
                    {article.date}
                  </span>
                  
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read guide
                    <ArrowRight size={10} />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Reader Modal Overlay */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="fixed inset-0 bg-primary/80 backdrop-blur-sm"
              id="resource-reader-backdrop"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-3xl w-full relative z-10 overflow-hidden my-8"
              id="resource-reader-modal"
            >
              {/* Luxury Accent Top Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-accent" />

              {/* Header block */}
              <div className="p-8 pb-4 border-b border-slate-100 flex justify-between items-start gap-4">
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <span className="text-accent">{activeArticle.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {activeArticle.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {activeArticle.date}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-primary tracking-tight">
                    {activeArticle.title}
                  </h3>
                </div>

                <button
                  onClick={() => setActiveArticle(null)}
                  className="text-slate-400 hover:text-primary transition-colors cursor-pointer p-1.5 rounded-lg hover:bg-slate-100"
                  aria-label="Close Reader"
                  id="close-resource-reader"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Readable content block */}
              <div className="p-8 sm:p-10 max-h-[60vh] overflow-y-auto text-left space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
                {activeArticle.image && (
                  <div className="w-full h-48 sm:h-64 rounded-xl overflow-hidden relative mb-6 border border-slate-100 shadow-sm">
                    <img 
                      src={activeArticle.image} 
                      alt={activeArticle.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent pointer-events-none" />
                  </div>
                )}
                
                <p className="font-semibold text-primary italic text-base">
                  {activeArticle.summary}
                </p>
                {activeArticle.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Bottom bar */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <span className="text-xs text-slate-500 font-medium text-left">
                  Ready to apply these concepts to your specific career path?
                </span>
                <button
                  onClick={() => {
                    setActiveArticle(null);
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="bg-primary hover:bg-primary/95 text-white py-2 px-5 rounded-full font-bold text-xs tracking-wider uppercase cursor-pointer transition-all flex items-center justify-center gap-2 shadow-sm"
                  id="reader-apply-btn"
                >
                  Enquire with Mohammad
                  <ArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

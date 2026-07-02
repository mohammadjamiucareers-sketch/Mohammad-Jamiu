import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Search, HelpCircle } from "lucide-react";
import { faqData } from "../data";

export const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = ["All", "Services & Pricing", "Resume & CV", "LinkedIn Optimization", "Coaching & Consultations"];

  const filteredFAQ = faqData.filter((faq) => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold text-accent tracking-widest uppercase block">
            Advisory Desk
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight" id="faq-headline">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Review detailed answers to standard queries regarding turnaround times, ATS compliance, scheduling, and strategic career coaching.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="space-y-6 mb-12">
          {/* Categories Tab bar */}
          <div className="flex flex-wrap gap-2 justify-center" id="faq-category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setExpandedId(null);
                }}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
                id={`faq-cat-btn-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative max-w-md mx-auto" id="faq-search-box">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 pointer-events-none">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Search FAQ database..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setExpandedId(null);
              }}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all shadow-sm"
              id="faq-search-input"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        {filteredFAQ.length > 0 ? (
          <div className="space-y-4 text-left" id="faq-accordion-list">
            {filteredFAQ.map((faq) => {
              const isExpanded = expandedId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-slate-50 border border-slate-200/60 rounded-2xl overflow-hidden transition-all duration-300"
                  id={`faq-item-${faq.id}`}
                >
                  {/* Trigger head */}
                  <button
                    onClick={() => toggleExpand(faq.id)}
                    className="w-full flex justify-between items-center px-6 py-5 cursor-pointer hover:bg-slate-100/50 transition-colors text-left"
                    id={`faq-trigger-${faq.id}`}
                    aria-expanded={isExpanded}
                  >
                    <div className="flex gap-3 pr-4 items-start">
                      <HelpCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base font-bold text-primary leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-slate-400 flex-shrink-0"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  {/* Collapsible Content */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed pl-[39px] border-t border-slate-200/30">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200/60" id="faq-empty-state">
            <p className="text-slate-500 font-medium">No FAQ questions match your search.</p>
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
    </section>
  );
};

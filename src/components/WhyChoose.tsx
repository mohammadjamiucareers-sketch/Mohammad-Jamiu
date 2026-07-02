import { motion } from "motion/react";
import { whyChooseData } from "../data";
import { LucideIcon } from "./LucideIcon";

export const WhyChoose = () => {
  return (
    <section id="why-choose" className="py-20 md:py-28 bg-primary text-white relative overflow-hidden">
      {/* Absolute backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.06),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold text-accent tracking-widest uppercase block">
            The Competitive Edge
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" id="why-choose-headline">
            Why Professionals Partner with Us
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Our career optimization blueprints aren't just documents—they are highly strategic digital assets designed according to absolute recruiter compliance standards.
          </p>
        </div>

        {/* 10 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6" id="why-choose-grid">
          {whyChooseData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white/5 border border-white/10 hover:border-accent/40 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group h-full"
              id={`why-choose-card-${index}`}
            >
              <div>
                {/* Dynamic Icon */}
                <div className="w-10 h-10 rounded-xl bg-accent/10 group-hover:bg-accent text-accent group-hover:text-primary flex items-center justify-center mb-5 transition-colors duration-300">
                  <LucideIcon name={item.icon} size={18} />
                </div>
                
                <h3 className="text-base font-bold text-white mb-2 tracking-tight group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { motion } from "motion/react";
import { processSteps } from "../data";
import { LucideIcon } from "./LucideIcon";

export const Process = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <span className="text-sm font-bold text-accent tracking-widest uppercase block">
            Execution Flow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight" id="process-headline">
            Our Elite Three-Step Process
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            We operate with precision-guided protocols to extract your core value proposition and build a bulletproof brand.
          </p>
        </div>

        {/* Process Flow Cards */}
        <div className="relative" id="process-flow">
          {/* Connector Line (Desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-slate-100 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {processSteps.map((stepItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="flex flex-col items-center text-center group"
                id={`process-card-${index}`}
              >
                {/* Step Circle Counter */}
                <div className="relative mb-6">
                  {/* Outer circle decoration */}
                  <div className="absolute -inset-3 rounded-full bg-accent/5 border border-accent/20 scale-95 group-hover:scale-105 transition-all duration-300" />
                  
                  {/* Step bubble */}
                  <div className="w-16 h-16 rounded-full bg-primary text-white border-2 border-accent flex items-center justify-center relative shadow-lg">
                    <LucideIcon name={stepItem.icon} size={22} className="text-accent" />
                    
                    {/* Tiny index bubble */}
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent text-primary text-xs font-black flex items-center justify-center shadow-md">
                      {stepItem.step}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {stepItem.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
                  {stepItem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

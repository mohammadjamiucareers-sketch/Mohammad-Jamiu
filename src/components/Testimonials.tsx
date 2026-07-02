import { motion } from "motion/react";
import { Star, Quote, MapPin } from "lucide-react";
import { testimonialsData } from "../data";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold text-accent tracking-widest uppercase block">
            Client Dividends
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight" id="testimonials-headline">
            Success Stories From Global Leaders
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Read how executives and mid-level professionals transitioned, negotiated, and landed competitive roles in the UAE, UK, USA, Europe, and beyond.
            <br />
            <span className="text-xs text-accent font-semibold uppercase tracking-wider block mt-2">
              (Sample reviews representing typical client outcomes)
            </span>
          </p>
        </div>

        {/* Testimonials Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300 relative flex flex-col justify-between"
              id={`testimonial-card-${testimonial.id}`}
            >
              {/* Background elegant quote icon */}
              <div className="absolute top-6 right-8 text-slate-100 group-hover:text-accent/5 pointer-events-none transition-colors">
                <Quote size={40} className="fill-slate-50 text-slate-100/50" />
              </div>

              <div className="space-y-6">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={15} className="text-accent fill-accent" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm text-slate-600 leading-relaxed italic relative z-10">
                  “{testimonial.quote}”
                </p>
              </div>

              {/* Client Profile */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-100">
                {/* Initial circle avatar */}
                <div className="w-10 h-10 rounded-full bg-primary text-accent font-bold text-sm flex items-center justify-center">
                  {testimonial.name.split(" ").map(n => n[0]).join("")}
                </div>

                <div className="text-left">
                  <h4 className="text-sm font-bold text-primary leading-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium leading-tight mt-0.5">
                    {testimonial.role} — <span className="text-primary/70">{testimonial.company}</span>
                  </p>
                  
                  {/* Location badge */}
                  <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-1 font-medium">
                    <MapPin size={10} className="text-accent" />
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

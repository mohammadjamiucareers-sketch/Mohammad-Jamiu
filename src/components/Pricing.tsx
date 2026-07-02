import { motion } from "motion/react";
import { Check, Sparkles, Shield, Compass, BadgeCheck } from "lucide-react";
import { pricingPackagesData } from "../data";

export const Pricing = () => {
  const handlePackageClick = (packageName: string) => {
    // Find the contact section and scroll to it
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      
      // Try to find the service dropdown or service input and pre-select/populate it if possible
      const serviceSelect = document.getElementById("form-service") as HTMLSelectElement;
      if (serviceSelect) {
        // Find option that contains package name or service
        const options = Array.from(serviceSelect.options);
        const match = options.find(opt => 
          opt.value.toLowerCase().includes(packageName.toLowerCase()) || 
          opt.text.toLowerCase().includes(packageName.toLowerCase())
        );
        if (match) {
          serviceSelect.value = match.value;
          // Trigger change event
          const event = new Event("change", { bubbles: true });
          serviceSelect.dispatchEvent(event);
        }
      }
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-50 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold text-accent tracking-widest uppercase block">
            Investment & Packages
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight" id="pricing-headline">
            Transparent Pricing Plans
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Select a tailored strategy tier designed to accelerate your search, bypass recruiter filters, and command elite professional compensation.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch lg:max-w-6xl lg:mx-auto">
          {pricingPackagesData.map((pkg, idx) => {
            const isProfessional = pkg.id === "professional";
            const isPremium = pkg.id === "premium";

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col rounded-3xl p-8 transition-all duration-300 relative ${
                  isProfessional
                    ? "bg-primary text-white shadow-xl scale-102 border-2 border-accent/40 md:scale-105 md:-translate-y-2 z-10"
                    : "bg-white text-slate-800 border border-slate-200/60 shadow-md hover:shadow-lg z-0"
                }`}
                id={`pricing-card-${pkg.id}`}
              >
                {/* Popular badge */}
                {isProfessional && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles size={10} className="fill-primary" /> Most Popular
                  </span>
                )}

                {/* Package Icon & Name */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className={`text-xl font-bold tracking-tight ${isProfessional ? "text-accent" : "text-primary"}`}>
                        {pkg.name} Package
                      </h3>
                      <p className={`text-xs mt-1 leading-snug ${isProfessional ? "text-slate-300" : "text-slate-500"}`}>
                        {pkg.description}
                      </p>
                    </div>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isProfessional ? "bg-accent/15 text-accent" : "bg-primary/5 text-primary"
                    }`}>
                      {pkg.id === "basic" && <Shield size={20} />}
                      {pkg.id === "professional" && <Sparkles size={20} />}
                      {pkg.id === "premium" && <BadgeCheck size={20} />}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 pt-2">
                    <span className={`text-4xl font-black ${isProfessional ? "text-white" : "text-primary"}`}>
                      ${pkg.price}
                    </span>
                    <span className={`text-xs uppercase tracking-wider ${isProfessional ? "text-slate-400" : "text-slate-400"}`}>
                      / flat fee
                    </span>
                  </div>
                </div>

                <hr className={`border-t mb-6 ${isProfessional ? "border-white/10" : "border-slate-100"}`} />

                {/* Features List */}
                <div className="flex-grow space-y-4 mb-8">
                  <p className={`text-xs font-bold uppercase tracking-widest ${isProfessional ? "text-accent/90" : "text-primary/70"}`}>
                    What You Get:
                  </p>
                  <ul className="space-y-3 text-left">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-sm">
                        <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          isProfessional ? "bg-accent/15 text-accent" : "bg-emerald-50 text-emerald-600"
                        }`}>
                          <Check size={12} className="stroke-[3]" />
                        </span>
                        <span className={isProfessional ? "text-slate-200" : "text-slate-600"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handlePackageClick(pkg.name)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer ${
                    isProfessional
                      ? "bg-accent text-primary hover:bg-white hover:text-primary hover:shadow-md"
                      : "bg-primary text-white hover:bg-slate-900"
                  }`}
                  id={`pricing-btn-${pkg.id}`}
                >
                  {pkg.ctaText}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom trust disclaimer */}
        <div className="mt-16 text-center text-xs text-slate-500 max-w-md mx-auto space-y-2">
          <p>
            * All document packages are backed by our <span className="font-bold text-primary">30-day unlimited revisions guarantee</span>.
          </p>
          <p>
            Need a bespoke custom plan or multi-service bundle? <a href="#contact" className="text-accent hover:underline font-bold">Inquire directly</a> for tailored strategic solutions.
          </p>
        </div>

      </div>
    </section>
  );
};

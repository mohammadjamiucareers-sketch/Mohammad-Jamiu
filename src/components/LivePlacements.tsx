import { motion } from "motion/react";
import { TrendingUp, MapPin, Building2, DollarSign, Check, Award, ArrowRight, ArrowLeft } from "lucide-react";

interface Placement {
  id: string;
  company: string;
  role: string;
  location: string;
  packageGain: string;
  industry: string;
  processPhases: string[];
  landedDate: string;
}

const livePlacementsData: Placement[] = [
  {
    id: "p1",
    company: "Google",
    role: "Senior Director, Cloud GTM Strategy",
    location: "London, UK & Dubai, UAE",
    packageGain: "+42% Total Comp (+$120k LTI Package)",
    industry: "Enterprise Technology",
    processPhases: ["C-Suite Boardroom CV", "LinkedIn Headhunter SEO", "Executive Advisory Board Coaching", "LTI Equity Negotiation"],
    landedDate: "June 2026"
  },
  {
    id: "p2",
    company: "Saudi Aramco",
    role: "Head of Infrastructure Projects & Operations",
    location: "Dhahran, Saudi Arabia",
    packageGain: "Tax-Free Base Upgrade & Full Family Relocation",
    industry: "Energy & Infrastructure",
    processPhases: ["GCC Market-Entry Plan", "ATS-Optimized Executive CV", "STAR Leadership Interview Prep"],
    landedDate: "May 2026"
  },
  {
    id: "p3",
    company: "McKinsey & Company",
    role: "Associate Partner, Digital Transformation",
    location: "Dubai, UAE",
    packageGain: "+32% Base Salary (+$40k Sign-on Bonus)",
    industry: "Management Consulting",
    processPhases: ["Executive Portfolio Bio", "Case Interview Prep & Strategy", "Multi-Variable Package Negotiation"],
    landedDate: "May 2026"
  },
  {
    id: "p4",
    company: "Stripe",
    role: "Lead Solutions Architect, EMEA Expansion",
    location: "Dublin, Ireland & Remote",
    packageGain: "+28% Salary Increase (+$55k RSUs)",
    industry: "Financial Technology",
    processPhases: ["CV Formatting Restructure", "LinkedIn SEO Re-alignment", "Salary Scripting Protocol"],
    landedDate: "April 2026"
  },
  {
    id: "p5",
    company: "Emirates Group",
    role: "VP of Digital Guest Experience & Analytics",
    location: "Dubai, UAE",
    packageGain: "Executive Allowance Upgrade & Fully-Funded Relo",
    industry: "Aviation & Premium Hospitality",
    processPhases: ["C-Suite Boardroom CV", "LinkedIn Executive Branding", "VIP WhatsApp Support"],
    landedDate: "March 2026"
  },
  {
    id: "p6",
    company: "AWS",
    role: "Principal Product Manager, GenAI Services",
    location: "Seattle, USA",
    packageGain: "+38% Salary Hike (+$150k Sign-on Stock Grant)",
    industry: "Hyperscale Cloud & AI",
    processPhases: ["ATS Scannability Mapping", "STAR Interview Workbook", "Salary Negotiation Scripts"],
    landedDate: "March 2026"
  }
];

export const LivePlacements = () => {
  return (
    <section id="live-placements" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Absolute ambient lights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-black text-accent tracking-widest uppercase block">
            Proven Placement Records
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white" id="placements-title">
            Live Global Placements & Role Process
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Real placements secured by Mohammad's clients. Explore the roles, companies, and the custom tactical career workflows utilized to clear filters and land elite contracts.
          </p>
        </div>

        {/* Live Placements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="placements-grid">
          {livePlacementsData.map((placement, index) => (
            <motion.div
              key={placement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300 group"
              id={`placement-card-${placement.id}`}
            >
              <div>
                {/* Placement Header Meta */}
                <div className="flex justify-between items-center mb-5">
                  <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-[10px] font-bold text-accent uppercase tracking-wider">
                    <Building2 size={10} />
                    {placement.industry}
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    Landed: {placement.landedDate}
                  </span>
                </div>

                {/* Company and Landed Role */}
                <div className="space-y-1 text-left mb-6">
                  <h3 className="text-lg font-black tracking-tight text-white group-hover:text-accent transition-colors">
                    {placement.company}
                  </h3>
                  <p className="text-sm font-semibold text-slate-300">
                    {placement.role}
                  </p>
                  <p className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
                    <MapPin size={12} className="text-slate-500" />
                    {placement.location}
                  </p>
                </div>

                {/* Compensation Package Upgrade */}
                <div className="bg-slate-900/60 border border-slate-800/85 rounded-2xl p-4 mb-6 text-left space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 block flex items-center gap-1">
                    <TrendingUp size={11} /> Compensation Expansion
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-white leading-relaxed">
                    {placement.packageGain}
                  </p>
                </div>

                <hr className="border-t border-slate-800/60 mb-6" />

                {/* Applied Process Phases Checklist */}
                <div className="space-y-3 text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Process Phases Executed:
                  </p>
                  <ul className="space-y-2">
                    {placement.processPhases.map((phase, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs">
                        <span className="flex-shrink-0 w-4 h-4 rounded-full bg-accent/10 border border-accent/25 text-accent flex items-center justify-center mt-0.5">
                          <Check size={9} className="stroke-[3]" />
                        </span>
                        <span className="text-slate-400 leading-snug">
                          {phase}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card CTA */}
              <div className="pt-8 text-left">
                <button
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                      // Populate input
                      const messageTextarea = document.getElementById("form-message") as HTMLTextAreaElement;
                      if (messageTextarea) {
                        messageTextarea.value = `Hi Mohammad, I saw your placement record for the ${placement.role} role at ${placement.company}. I want to secure a similar high-role strategic transition package for myself.`;
                      }
                    }
                  }}
                  className="w-full bg-slate-900 border border-slate-800 text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded-xl hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300 flex items-center justify-center gap-1 shadow-sm cursor-pointer"
                >
                  Request Similar Roadmap
                  <ArrowRight size={11} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Companies Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/50 text-center space-y-4">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">
            CANDIDATES CURRENTLY PLACED AND FLOURISHING AT
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-sm font-bold text-slate-500 uppercase tracking-widest">
            <span className="hover:text-accent transition-colors">Google</span>
            <span className="hover:text-accent transition-colors">Saudi Aramco</span>
            <span className="hover:text-accent transition-colors">AWS</span>
            <span className="hover:text-accent transition-colors">McKinsey</span>
            <span className="hover:text-accent transition-colors">Stripe</span>
            <span className="hover:text-accent transition-colors">Emirates Group</span>
            <span className="hover:text-accent transition-colors">Netflix</span>
            <span className="hover:text-accent transition-colors">Standard Chartered</span>
          </div>
        </div>

      </div>
    </section>
  );
};

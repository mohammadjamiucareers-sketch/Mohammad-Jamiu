import { motion } from "motion/react";
import { Check, Award, Compass, Star } from "lucide-react";

export const About = () => {
  const pillars = [
    { text: "Increase interview opportunities", desc: "Crafting bulletproof profiles that get you shortlisted." },
    { text: "Improve ATS compatibility", desc: "Structuring text with precision keywords matching software filters." },
    { text: "Build personal brands", desc: "Establishing you as an authority through content and positioning." },
    { text: "Transition into new careers", desc: "Mapping transferable skills to bridge industries seamlessly." },
    { text: "Negotiate stronger offers", desc: "Providing exact telephone scripts and salary calculations." },
    { text: "Achieve long-term career growth", desc: "Creating strategic development roadmaps for promotions." }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Premium Portrait Photo */}
          <div className="lg:col-span-5 relative">
            {/* Ambient luxury shadows */}
            <div className="absolute -inset-4 bg-accent/10 rounded-2xl blur-xl -z-10" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl p-8 bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden aspect-[1/1] max-w-sm sm:max-w-md mx-auto lg:max-w-none flex flex-col items-center justify-center text-center group"
              id="about-logo-wrapper"
            >
              {/* Background ambient lighting */}
              <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-primary/40 pointer-events-none" />
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-accent/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />

              {/* Glowing animated circles representing career stages */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                
                {/* Outer spin circle */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-slate-800 rounded-full"
                />

                {/* Accent orbital dots */}
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border border-accent/20 rounded-full flex justify-between items-center px-2"
                >
                  <div className="w-2.5 h-2.5 bg-accent rounded-full shadow-lg shadow-accent" />
                  <div className="w-2 h-2 bg-slate-700 rounded-full" />
                </motion.div>

                {/* Core Crest/Logo SVG */}
                <motion.div
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 w-32 h-32 bg-slate-950 border-2 border-accent/40 rounded-3xl shadow-xl flex flex-col items-center justify-center p-4 group-hover:border-accent transition-colors duration-500"
                >
                  <svg viewBox="0 0 100 100" className="w-20 h-20 text-accent">
                    {/* Golden rising arrow stairs representing peak trajectory */}
                    <path 
                      d="M20 75 L35 75 L35 60 L50 60 L50 45 L65 45 L65 25 L80 25" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="4" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    {/* Glowing dynamic pointer arrow */}
                    <polygon 
                      points="72,25 80,25 80,33" 
                      fill="currentColor"
                    />
                    {/* Document outline representing CV optimization */}
                    <path 
                      d="M25 35 H45 M25 45 H55 M25 55 H45" 
                      stroke="rgba(212,175,55,0.4)" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                    />
                    {/* Central key node */}
                    <circle cx="65" cy="45" r="4" fill="#fff" />
                  </svg>
                  <span className="text-[9px] font-black tracking-[0.25em] text-accent uppercase mt-2">
                    MUSA JAMIU
                  </span>
                </motion.div>
              </div>

              {/* Career coach branding texts */}
              <div className="mt-6 z-10">
                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  Executive Alignment Seal
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 font-medium tracking-wide">
                  ATS Verified • C-Suite Credentialing • Global Trajectory
                </p>
              </div>

              {/* Bottom tag info */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 border border-slate-800 p-3 rounded-2xl shadow-lg">
                <div className="flex items-center justify-center gap-1.5 mb-0.5">
                  <Star size={12} className="text-accent fill-accent" />
                  <span className="text-[10px] font-black text-accent tracking-wider uppercase">
                    Musa A. Jamiu Brand Identity
                  </span>
                </div>
                <p className="text-[10px] text-slate-400">
                  Securing 94% interview shortlists across EMEA, Americas, and GCC countries.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-sm font-bold text-accent tracking-widest uppercase block">
                Meet the Specialist
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight" id="about-headline">
                Mohammad Jamiu
              </h2>
              <p className="text-lg font-medium text-slate-600 italic">
                “Land Better Opportunities. Build a Stronger Career.”
              </p>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed text-base" id="about-intro">
              <p>
                As an award-winning senior career coach, professional resume writer, and personal branding architect,
                I help professionals break through career plateaus, bypass recruiter filters, and command competitive compensation.
              </p>
              <p>
                Having navigated modern global recruitment environments, I understand exactly what recruiters and headhunters look for
                in executive search. My methodology combines corporate-grade personal marketing with deep psychological interviewing structures,
                ensuring your digital and physical career documents deliver high conversion rates.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="space-y-5">
              <h3 className="text-sm font-bold text-primary tracking-widest uppercase border-b border-slate-100 pb-2">
                Our Strategic Core Focus Areas
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="about-pillars">
                {pillars.map((pillar, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary">{pillar.text}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{pillar.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

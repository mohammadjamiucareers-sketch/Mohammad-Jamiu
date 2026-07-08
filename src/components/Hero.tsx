import { motion } from "motion/react";
import { ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero = ({ onBookClick, onExploreClick }: HeroProps) => {
  const bulletPoints = [
    "ATS-Optimized Resumes & CVs",
    "LinkedIn Profile Makeovers",
    "1-on-1 Interview Coaching",
    "Direct Job Search Support"
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-primary pt-24 overflow-hidden flex flex-col justify-center"
    >
      {/* Background radial gradients for luxury feel */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.02),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
              id="hero-badge"
            >
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-accent uppercase">
                Global Career Strategist
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
                id="hero-headline"
              >
                Helping Professionals Secure Better Careers with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-200 to-accent">
                  Confidence.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl"
                id="hero-subheadline"
              >
                Career coaching designed to strengthen your professional brand,
                improve your job search strategy, optimize your resume and
                LinkedIn profile, and help you land interviews faster.
              </motion.p>
            </div>

            {/* Micro Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              id="hero-highlights"
            >
              {bulletPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
              id="hero-ctas"
            >
              <button
                onClick={onBookClick}
                className="bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-full text-base font-bold shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer group"
                id="hero-book-btn"
              >
                Book a Consultation
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreClick}
                className="bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 px-8 py-4 rounded-full text-base font-bold transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
                id="hero-explore-btn"
              >
                Explore Services
              </button>
            </motion.div>
          </div>

          {/* Right Column: Interactive Animated Career Callback Success Dashboard */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md lg:max-w-none aspect-[4/3] rounded-3xl p-6 bg-slate-950 border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between group"
              id="hero-dashboard-container"
            >
              {/* Luxury background flares */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/15 rounded-full blur-2xl group-hover:scale-125 transition-all duration-1000" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />

              {/* Dashboard Header */}
              <div className="flex justify-between items-center z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                    ATS COMPLIANCE DIAGNOSTIC
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[9px] font-bold text-emerald-400">
                  98% COGNITIVE PASS
                </span>
              </div>

              {/* Main Animated Visualization */}
              <div className="relative my-6 flex-1 flex flex-col justify-center items-center z-10">
                
                {/* SVG Line Graph showing extreme callback slope */}
                <svg className="w-full h-32 text-accent" viewBox="0 0 300 120" fill="none">
                  <defs>
                    <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--color-accent, #D4AF37)" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="var(--color-accent, #D4AF37)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid lines */}
                  <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(255,255,255,0.03)" strokeDasharray="4 4" />
                  <line x1="0" y1="60" x2="300" y2="60" stroke="rgba(255,255,255,0.03)" strokeDasharray="4 4" />
                  <line x1="0" y1="100" x2="300" y2="100" stroke="rgba(255,255,255,0.03)" strokeDasharray="4 4" />

                  {/* Shaded Area */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    d="M10 110 Q 50 100, 100 80 T 180 50 T 260 15 L 260 110 Z"
                    fill="url(#chart-grad)"
                  />

                  {/* Main Line */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    d="M10 110 Q 50 100, 100 80 T 180 50 T 260 15"
                    stroke="#D4AF37"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  {/* Pulse points */}
                  <motion.circle
                    cx="100" cy="80" r="4"
                    fill="#D4AF37"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  <motion.circle
                    cx="180" cy="50" r="4"
                    fill="#4fd1c5"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  />
                  <motion.circle
                    cx="260" cy="15" r="6"
                    fill="#10b981"
                    className="shadow-xl"
                  />
                </svg>

                {/* Overlapping Info Badges inside Visualization */}
                <div className="absolute top-0 left-2 flex gap-1.5">
                  <motion.span
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="px-2 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-extrabold text-white flex items-center gap-1 shadow-md"
                  >
                    <span className="text-accent">★</span> +42% Comp Growth
                  </motion.span>
                </div>

                <div className="absolute bottom-1 right-2">
                  <motion.span
                    animate={{ y: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                    className="px-2 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-extrabold text-accent flex items-center gap-1 shadow-md"
                  >
                    🚀 C-Suite Recruited
                  </motion.span>
                </div>
              </div>

              {/* Lower Section Metrics */}
              <div className="grid grid-cols-3 gap-3 border-t border-white/5 pt-4 z-10">
                <div className="text-left">
                  <div className="text-[10px] font-black text-slate-500 uppercase">CV Match</div>
                  <div className="text-base font-black text-white">99% ATS</div>
                </div>
                <div className="text-left border-l border-white/5 pl-3">
                  <div className="text-[10px] font-black text-slate-500 uppercase">Global Pool</div>
                  <div className="text-base font-black text-accent">Top 1%</div>
                </div>
                <div className="text-left border-l border-white/5 pl-3">
                  <div className="text-[10px] font-black text-slate-500 uppercase">Callbacks</div>
                  <div className="text-base font-black text-emerald-400">14 Days</div>
                </div>
              </div>

              {/* Interactive bottom tracker bar */}
              <div className="mt-4 bg-white/5 border border-white/10 p-3 rounded-2xl flex items-center gap-3 z-10 hover:bg-white/10 transition-colors duration-300">
                <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                  <CheckCircle2 size={16} />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-semibold text-accent uppercase tracking-wider">
                    TRACK RECORD VERIFIED
                  </div>
                  <div className="text-xs font-bold text-white leading-normal">
                    94% of Clients Land Roles in 60 Days
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-10 text-slate-400 hover:text-white transition-colors"
        onClick={onExploreClick}
      >
        <span className="text-xs tracking-widest uppercase font-medium">Explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-accent" />
        </motion.div>
      </div>
    </section>
  );
};

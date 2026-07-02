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

          {/* Right Column: Hero Illustration Image */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full max-w-md lg:max-w-none aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              id="hero-image-container"
            >
              <img
                src="/src/assets/images/career_coaching_hero_1782963901340.jpg"
                alt="Executive Career Coaching Session with Mohammad Jamiu"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

              {/* Float badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-primary/90 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-accent uppercase tracking-wider">
                    Track Record
                  </div>
                  <div className="text-sm font-bold text-white">
                    94% of Clients Land Interviews in 60 Days
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

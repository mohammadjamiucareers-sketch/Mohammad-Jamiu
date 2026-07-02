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
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 aspect-[1/1] max-w-sm sm:max-w-md mx-auto lg:max-w-none"
              id="about-image-wrapper"
            >
              <img
                src="/src/assets/images/mohammad_jamiu_portrait_1782963914153.jpg"
                alt="Mohammad Jamiu - Career Specialist"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />

              {/* Float info */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100">
                <div className="flex items-center gap-2 mb-1">
                  <Star size={16} className="text-accent fill-accent" />
                  <span className="text-xs font-bold text-primary tracking-wider uppercase">
                    Award-Winning Strategist
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Expert career counseling trusted by executives across Dubai, London, New York & global hubs.
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

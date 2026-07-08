import { Mail, Linkedin, Globe, MessageSquare } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-white/5 relative overflow-hidden text-left">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.02),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/5 pb-12 mb-12">
          
          {/* Brand Info (col-span-5) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <span className="text-xl font-black tracking-tight text-white flex items-center gap-1.5">
                MOHAMMAD JAMIU
                <span className="inline-block w-2 h-2 rounded-full bg-accent" />
              </span>
              <span className="text-[10px] tracking-[0.2em] font-medium text-accent uppercase">
                Career Specialist
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Helping professionals build stronger careers through elite-level strategic coaching, ATS-compliant resume systems, and high-conversion personal branding.
            </p>

            {/* Social Grid icons */}
            <div className="flex gap-4" id="footer-social-links">
              <a
                href="https://www.linkedin.com/in/musa-a-jamiu-a6908741b"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-accent/10 border border-white/10 hover:border-accent text-slate-300 hover:text-accent flex items-center justify-center transition-all cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01af19788623a13bd1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-accent/10 border border-white/10 hover:border-accent text-slate-300 hover:text-accent flex items-center justify-center transition-all cursor-pointer"
                aria-label="Upwork"
              >
                <Globe size={16} />
              </a>
              <a
                href="mailto:mohammad.jamiu.careers@gmail.com"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-accent/10 border border-white/10 hover:border-accent text-slate-300 hover:text-accent flex items-center justify-center transition-all cursor-pointer"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://wa.me/2347026541428"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-accent/10 border border-white/10 hover:border-accent text-slate-300 hover:text-accent flex items-center justify-center transition-all cursor-pointer"
                aria-label="WhatsApp"
              >
                <MessageSquare size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links Column (col-span-3) */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-sm font-bold uppercase text-white tracking-widest border-b border-white/5 pb-2">
              Sitemap Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => handleScrollTo("services")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Premium Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("portfolio")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Deliverables Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("resources")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Career Resources Library
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("faq")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  FAQ Database
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("contact")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact Advisory Channels
                </button>
              </li>
            </ul>
          </div>

          {/* Global Operations column (col-span-4) */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-sm font-bold uppercase text-white tracking-widest border-b border-white/5 pb-2">
              Client Operations
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Serving executives and high-potential candidates targeting roles across GCC countries, EMEA, North America, United Kingdom, and APAC markets.
            </p>
            <div className="text-xs font-semibold text-accent uppercase tracking-wider flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Accepting Global Candidates
            </div>
          </div>

        </div>

        {/* Copyright notice row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500" id="footer-copyright-row">
          <div>
            © {currentYear} Mohammad Jamiu Career Specialist. All Rights Reserved.
          </div>
          <div className="flex gap-4">
            <span>Corporate Consultant</span>
            <span>•</span>
            <span>Non-Disclosure Confirmed</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

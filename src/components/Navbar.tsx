import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, PhoneCall } from "lucide-react";

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar = ({ onBookClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = ["home", "about", "services", "why-choose", "process", "portfolio", "pricing", "resources", "faq", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Pricing", id: "pricing" },
    { name: "Resources", id: "resources" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" }
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
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
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg py-3"
          : "bg-primary py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => scrollToSection("home")}
            id="nav-logo"
          >
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                MOHAMMAD JAMIU
                <span className="inline-block w-2 h-2 rounded-full bg-accent"></span>
              </span>
              <span className="text-[10px] tracking-[0.2em] font-medium text-accent uppercase">
                Career Specialist
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium tracking-wide transition-all cursor-pointer relative py-1 ${
                  activeSection === link.id
                    ? "text-accent"
                    : "text-slate-300 hover:text-white"
                }`}
                id={`nav-link-${link.id}`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}

            <button
              onClick={onBookClick}
              className="bg-accent hover:bg-accent/90 text-primary px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-accent/20 cursor-pointer flex items-center gap-2"
              id="nav-book-btn"
            >
              <PhoneCall size={14} />
              Book Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none p-2 rounded-md"
              id="nav-toggle"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary border-t border-white/5 shadow-2xl overflow-hidden"
            id="mobile-nav"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? "text-accent bg-white/5"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                  id={`mobile-link-${link.id}`}
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 px-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onBookClick();
                  }}
                  className="w-full bg-accent hover:bg-accent/90 text-primary py-3 rounded-full text-center font-bold shadow-md flex items-center justify-center gap-2"
                  id="mobile-book-btn"
                >
                  <PhoneCall size={16} />
                  Book Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, Linkedin, Globe, MessageSquare, Calendar, Clock, CheckCircle2, Copy, Check } from "lucide-react";

interface ContactProps {
  preFilledService?: string;
  onClearPreFilledService?: () => void;
}

interface SavedInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  service: string;
  date: string;
  time: string;
  message: string;
  submittedAt: string;
}

export const Contact = ({ preFilledService, onClearPreFilledService }: ContactProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [service, setService] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [message, setMessage] = useState("");

  const [copiedText, setCopiedText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<SavedInquiry | null>(null);
  const [allInquiries, setAllInquiries] = useState<SavedInquiry[]>([]);

  useEffect(() => {
    if (preFilledService) {
      setService(preFilledService);
      // Smoothly scroll to contact form if it was triggered
      const contactForm = document.getElementById("contact-form-container");
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [preFilledService]);

  useEffect(() => {
    // Load past inquiries from localStorage on mount
    const saved = localStorage.getItem("mohammad_jamiu_inquiries");
    if (saved) {
      try {
        setAllInquiries(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load inquiries", e);
      }
    }
  }, []);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name || !email || !service) {
      alert("Please fill in the required fields (Name, Email, and Service).");
      return;
    }

    const inquiry: SavedInquiry = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      email,
      phone,
      country,
      service,
      date: preferredDate || "Any Date",
      time: preferredTime || "Any Time",
      message,
      submittedAt: new Date().toLocaleString()
    };

    // Save to local list
    const updated = [inquiry, ...allInquiries];
    setAllInquiries(updated);
    localStorage.setItem("mohammad_jamiu_inquiries", JSON.stringify(updated));

    setSubmittedData(inquiry);
    setIsSubmitted(true);

    // Reset Form Fields
    setName("");
    setEmail("");
    setPhone("");
    setCountry("");
    setService("");
    setPreferredDate("");
    setPreferredTime("");
    setMessage("");

    if (onClearPreFilledService) {
      onClearPreFilledService();
    }
  };

  // Pre-filled URL generators for direct immediate action
  const getWhatsAppLink = (data: SavedInquiry) => {
    const text = `Hello Mohammad Jamiu, I would like to book a career consultation.\n\n` +
      `*Name*: ${data.name}\n` +
      `*Service*: ${data.service}\n` +
      `*Country*: ${data.country}\n` +
      `*Pref Date*: ${data.date} at ${data.time}\n` +
      `*Message*: ${data.message}`;
    return `https://wa.me/2347026541428?text=${encodeURIComponent(text)}`;
  };

  const getEmailLink = (data: SavedInquiry) => {
    const subject = `Career Specialist Inquiry - ${data.name}`;
    const body = `Hello Mohammad,\n\nI would like to book a career consultation.\n\n` +
      `Name: ${data.name}\n` +
      `Phone: ${data.phone}\n` +
      `Country: ${data.country}\n` +
      `Service: ${data.service}\n` +
      `Preferred Appointment: ${data.date} at ${data.time}\n\n` +
      `Message:\n${data.message}\n\nSubmitted on: ${data.submittedAt}`;
    return `mailto:mohammad.jamiu.careers@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const servicesList = [
    "ATS Resume Writing",
    "Executive CV Writing",
    "LinkedIn Profile Optimization",
    "Career Coaching",
    "Interview Coaching",
    "Salary Negotiation Coaching",
    "Job Search Strategy",
    "Career Transition Coaching",
    "Personal Branding",
    "Cover Letter Writing",
    "Networking Strategy",
    "Job Application Support",
    "Basic Package ($150)",
    "Professional Package ($450)",
    "Premium Package (C-Suite & Board) ($1,250)"
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold text-accent tracking-widest uppercase block">
            Initiate Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight" id="contact-headline">
            Secure Your Discovery Session
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Ready to secure top-tier interviews and negotiate premium offers? Connect directly via our secure portals or submit your consult details below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Premium Contact Channels Card */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="bg-primary text-white p-8 sm:p-10 rounded-3xl shadow-xl border border-white/5 relative overflow-hidden h-full">
              {/* Luxury Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.06),transparent_50%)] pointer-events-none" />

              <h3 className="text-xl font-bold mb-8 text-white tracking-tight">
                Our Global Channels
              </h3>

              <div className="space-y-6" id="contact-channels">
                {/* Channel: WhatsApp */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/40 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <MessageSquare size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">WhatsApp Direct</div>
                    <a
                      href="https://wa.me/2347026541428"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-white hover:text-accent transition-colors block truncate"
                    >
                      +234 702 654 1428
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy("+2347026541428", "WhatsApp")}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy WhatsApp"
                  >
                    {copiedText === "WhatsApp" ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Channel: Email */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/40 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Email Advisory</div>
                    <a
                      href="mailto:mohammad.jamiu.careers@gmail.com"
                      className="text-base font-bold text-white hover:text-accent transition-colors block truncate"
                    >
                      mohammad.jamiu.careers@gmail.com
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy("mohammad.jamiu.careers@gmail.com", "Email")}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedText === "Email" ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Channel: LinkedIn */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/40 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                    <Linkedin size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">LinkedIn Network</div>
                    <a
                      href="https://www.linkedin.com/in/musa-a-jamiu-a6908741b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-white hover:text-accent transition-colors block truncate"
                    >
                      Musa A. Jamiu Profile
                    </a>
                  </div>
                </div>

                {/* Channel: Upwork */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/40 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0">
                    <Globe size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-green-400 uppercase tracking-widest mb-1">Upwork Marketplace</div>
                    <a
                      href="https://www.upwork.com/freelancers/~01af19788623a13bd1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-white hover:text-accent transition-colors block truncate"
                    >
                      Verified Upwork Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 text-xs text-slate-400 leading-normal">
                Our average response timeframe across channels is less than 4 business hours. Consultations are available worldwide on GMT+1/GST time zones.
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Consultation Scheduling Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/60 shadow-md relative" id="contact-form-container">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-6 text-left"
                >
                  <h3 className="text-xl font-bold text-primary tracking-tight mb-4">
                    Advisory Booking Form
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Input: Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                        id="form-name"
                      />
                    </div>

                    {/* Input: Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                        id="form-email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Input: Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+971 50 123 4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                        id="form-phone"
                      />
                    </div>

                    {/* Input: Country */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                        Country of Residence
                      </label>
                      <input
                        type="text"
                        placeholder="UAE, UK, USA"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                        id="form-country"
                      />
                    </div>
                  </div>

                  {/* Input: Service Interested In */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                      Service Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                      id="form-service"
                    >
                      <option value="">Select services option...</option>
                      {servicesList.map((srv, index) => (
                        <option key={index} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Booking Simulator Details */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-150 space-y-4">
                    <div className="text-xs font-bold uppercase text-slate-500 tracking-wider flex items-center gap-1.5">
                      <Calendar size={14} className="text-accent" />
                      Preferred Discovery Session Appointment
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">Preferred Date</label>
                        <input
                          type="date"
                          value={preferredDate}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-white border border-slate-250 text-xs focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">Preferred Time Slot</label>
                        <input
                          type="time"
                          value={preferredTime}
                          onChange={(e) => setPreferredTime(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg bg-white border border-slate-250 text-xs focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Input: Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                      Message / Additional Goals
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share details about your career challenges, timeline, or current position..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                      id="form-message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/95 text-white py-4 rounded-xl font-bold tracking-wide text-sm uppercase transition-all shadow-md cursor-pointer"
                    id="form-submit-btn"
                  >
                    Submit Booking Details
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8 text-center py-8"
                  id="form-success-container"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/15 border border-accent text-accent flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 size={32} />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-black text-primary">Inquiry Logged Successfully!</h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
                      Thank you, <span className="font-bold text-primary">{submittedData?.name}</span>. Your career inquiry has been locally registered on our servers. To accelerate your appointment, you may connect directly via WhatsApp or email with your pre-filled details.
                    </p>
                  </div>

                  {/* Immediate Actions Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto pt-4">
                    <a
                      href={submittedData ? getWhatsAppLink(submittedData) : "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl text-xs sm:text-sm tracking-wide uppercase transition-colors flex items-center justify-center gap-2 shadow-md shadow-emerald-500/10 cursor-pointer"
                    >
                      <MessageSquare size={16} />
                      WhatsApp Instantly
                    </a>

                    <a
                      href={submittedData ? getEmailLink(submittedData) : "#"}
                      className="bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-6 rounded-xl text-xs sm:text-sm tracking-wide uppercase transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    >
                      <Mail size={16} />
                      Send Direct Email
                    </a>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-slate-400 hover:text-primary text-xs font-bold uppercase tracking-widest hover:underline cursor-pointer pt-4"
                  >
                    Submit Another Query
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Local Submissions Tracker / Inquiry Dashboard (Adds tremendous high-quality developer value!) */}
        {allInquiries.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200 text-left">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">
              Your Current Local Bookings ({allInquiries.length})
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="local-inquiries-list">
              {allInquiries.map((inq) => (
                <div key={inq.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 px-3 py-1 bg-primary/5 text-[9px] font-bold text-primary rounded-bl-xl border-l border-b border-primary/10 uppercase">
                    ID: {inq.id}
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-bold text-accent uppercase tracking-widest">{inq.service}</div>
                      <h5 className="text-base font-bold text-primary mt-1">{inq.name}</h5>
                      <p className="text-xs text-slate-400 mt-0.5">Submitted at: {inq.submittedAt}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs border-t border-slate-100 pt-3">
                      <div>
                        <span className="font-bold text-slate-500">Appointment:</span>
                        <div className="text-slate-700 font-medium">{inq.date} at {inq.time}</div>
                      </div>
                      <div>
                        <span className="font-bold text-slate-500">Contact Email:</span>
                        <div className="text-slate-700 font-medium truncate">{inq.email}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <a
                      href={getWhatsAppLink(inq)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-black uppercase tracking-wider text-emerald-600 hover:underline flex items-center gap-1"
                    >
                      <MessageSquare size={12} />
                      WhatsApp Hub
                    </a>
                    <a
                      href={getEmailLink(inq)}
                      className="text-[10px] font-black uppercase tracking-wider text-accent hover:underline flex items-center gap-1"
                    >
                      <Mail size={12} />
                      Email advisory
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

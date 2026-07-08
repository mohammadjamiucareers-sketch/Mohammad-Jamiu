import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar as CalendarIcon, Clock, Check, ArrowRight, CreditCard, Shield, Sparkles, User, Mail, DollarSign, ExternalLink } from "lucide-react";

interface TimeSlot {
  time: string;
  available: boolean;
}

interface PackageOption {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
}

export const BookingSystem = () => {
  // Packages definitions matching our updated pricing scale
  const packages: PackageOption[] = [
    {
      id: "free",
      name: "Free Strategic Orientation Session",
      price: 0,
      description: "15-minute quick introduction and resume scan callback",
      features: ["15-min voice consultation", "Brief CV overview", "Strategic placement map"]
    },
    {
      id: "basic",
      name: "Basic CV Alignment Package",
      price: 150,
      description: "ATS-Optimized Executive Resume / CV overhaul and cover letter",
      features: ["ATS-Optimized Boardroom CV", "Cover Letter writing", "Editable format files"]
    },
    {
      id: "professional",
      name: "Professional Career Accelerator",
      price: 450,
      description: "Complete LinkedIn makeover, executive coaching and interview prep",
      features: ["Full LinkedIn SEO Restructuring", "1-on-1 interview practice drills", "Transferable skill bridging maps"]
    },
    {
      id: "premium",
      name: "Premium Executive & Boardroom Tier",
      price: 1250,
      description: "Deep C-suite VIP overhaul, salary scripting, equity negotiation coaching",
      features: ["Boardroom Executive Portfolio overhaul", "Complete mock C-level interview", "Direct telephone salary negotiations coaching"]
    }
  ];

  // State
  const [selectedPackage, setSelectedPackage] = useState<PackageOption>(packages[0]);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [step, setStep] = useState<number>(1); // 1: Package/Date, 2: Details, 3: Payment/Confirm, 4: Receipt
  
  // Checkout Info state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [notes, setNotes] = useState("");

  // Credit Card states
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal" | "remitly">("card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [cardName, setCardName] = useState("");
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [invoiceId, setInvoiceId] = useState("");

  // Helpers for calendar available days (next 7 days excluding Sundays)
  const getNextDays = () => {
    const days = [];
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    let count = 0;
    let index = 1;
    while (count < 6) {
      const date = new Date();
      date.setDate(date.getDate() + index);
      if (date.getDay() !== 0) { // Exclude Sunday
        days.push({
          formatted: `${weekdays[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`,
          raw: date.toISOString().split("T")[0],
          dayName: weekdays[date.getDay()],
          dayNum: date.getDate()
        });
        count++;
      }
      index++;
    }
    return days;
  };

  const timeSlots: TimeSlot[] = [
    { time: "09:00 AM GMT+1", available: true },
    { time: "11:30 AM GMT+1", available: true },
    { time: "02:00 PM GMT+1", available: false },
    { time: "04:30 PM GMT+1", available: true },
    { time: "06:00 PM GMT+1", available: true }
  ];

  // Formatting helpers for Credit Card Fields
  const handleCardNumberChange = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 16);
    const matches = digits.match(/.{1,4}/g);
    setCardNumber(matches ? matches.join(" ") : digits);
  };

  const handleCardExpiryChange = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    if (digits.length >= 2) {
      setCardExpiry(`${digits.slice(0, 2)}/${digits.slice(2)}`);
    } else {
      setCardExpiry(digits);
    }
  };

  const handleCvcChange = (value: string) => {
    setCardCvc(value.replace(/\D/g, "").slice(0, 3));
  };

  const handleProceedToDetails = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please choose both a Date and a Time Slot to proceed.");
      return;
    }
    setStep(2);
  };

  const handleProceedToPayment = () => {
    if (!name || !email) {
      alert("Please provide your Name and Email address.");
      return;
    }
    // If selecting Free Orientation ($0), skip payment directly to receipt!
    if (selectedPackage.price === 0) {
      setPaymentProcessing(true);
      setTimeout(() => {
        setInvoiceId("INV-" + Math.floor(Math.random() * 900000 + 100000));
        setStep(4);
        setPaymentProcessing(false);
      }, 1500);
    } else {
      setStep(3);
    }
  };

  const handleProcessPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (paymentMethod === "card") {
      if (!cardNumber || !cardExpiry || !cardCvc || !cardName) {
        alert("Please complete all credit card information fields.");
        return;
      }
    }
    setPaymentProcessing(true);
    
    // Simulate payment transaction securely
    setTimeout(() => {
      setInvoiceId("INV-" + Math.floor(Math.random() * 900000 + 100000));
      setStep(4);
      setPaymentProcessing(false);
    }, 2500);
  };

  const availableDays = getNextDays();

  return (
    <section id="booking-system" className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden text-left">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-black text-accent tracking-widest uppercase block">
            Direct Career Alignment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white" id="booking-title">
            Book Appointment & Secure Payment
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Reserve your strategic orientation call or unlock our high-conversion coaching packages. Complete secure processing instantly using Stripe or PayPal.
          </p>
        </div>

        {/* Unified Interface Container */}
        <div className="max-w-5xl mx-auto bg-slate-900/45 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          {/* Step Progress Indicators */}
          <div className="flex justify-between items-center mb-10 max-w-md mx-auto relative">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-slate-800 -z-10" />
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex flex-col items-center gap-1.5 bg-slate-950 px-2 relative z-10">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step === s 
                    ? "bg-accent text-primary scale-110 shadow-lg shadow-accent/20" 
                    : step > s 
                      ? "bg-emerald-500 text-white" 
                      : "bg-slate-800 text-slate-400"
                }`}>
                  {step > s ? <Check size={14} className="stroke-[3]" /> : s}
                </div>
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-500 hidden sm:inline">
                  {s === 1 ? "Choose Selection" : s === 2 ? "Candidate Details" : s === 3 ? "Secure Checkout" : "Success Receipt"}
                </span>
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            
            {/* STEP 1: Package Selector and Calendar Date Time Picker */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                key="step1"
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                {/* Left side: Package choosing */}
                <div className="lg:col-span-6 space-y-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Sparkles size={18} className="text-accent" />
                    Select Career Engagement
                  </h3>
                  <div className="space-y-3">
                    {packages.map((pkg) => (
                      <div
                        key={pkg.id}
                        onClick={() => setSelectedPackage(pkg)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer text-left relative ${
                          selectedPackage.id === pkg.id
                            ? "bg-slate-950 border-accent shadow-lg shadow-accent/5"
                            : "bg-slate-950/40 border-slate-800 hover:border-slate-700"
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold text-sm text-white">{pkg.name}</h4>
                          <span className="text-xs font-black text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                            {pkg.price === 0 ? "FREE" : `$${pkg.price}`}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-snug mb-3">{pkg.description}</p>
                        {selectedPackage.id === pkg.id && (
                          <div className="grid grid-cols-1 gap-1 text-[10px] text-slate-400 mt-2 border-t border-slate-800 pt-2">
                            {pkg.features.slice(0, 3).map((feat, i) => (
                              <div key={i} className="flex items-center gap-1">
                                <span className="w-1 h-1 rounded-full bg-accent" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right side: Calendar slots choosing */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <CalendarIcon size={18} className="text-accent" />
                      Select Appointment Date
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                      {availableDays.map((day) => (
                        <button
                          key={day.raw}
                          onClick={() => setSelectedDate(day.raw)}
                          className={`p-3 rounded-2xl border transition-all flex flex-col items-center justify-center cursor-pointer ${
                            selectedDate === day.raw
                              ? "bg-accent text-primary border-accent font-bold"
                              : "bg-slate-950/40 border-slate-800 hover:border-slate-700 text-slate-300"
                          }`}
                        >
                          <span className="text-[10px] font-black uppercase tracking-wider opacity-85">{day.dayName}</span>
                          <span className="text-lg font-black">{day.dayNum}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Clock size={18} className="text-accent" />
                      Available Slot Times
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot.time}
                          disabled={!slot.available}
                          onClick={() => setSelectedTime(slot.time)}
                          className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer text-center ${
                            !slot.available
                              ? "bg-slate-950/10 border-slate-900/50 text-slate-600 cursor-not-allowed line-through"
                              : selectedTime === slot.time
                                ? "bg-accent text-primary border-accent font-black"
                                : "bg-slate-950/40 border-slate-800 hover:border-slate-700 text-slate-300"
                          }`}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 text-right">
                    <button
                      onClick={handleProceedToDetails}
                      className="bg-accent text-primary hover:bg-accent/90 px-6 py-3 rounded-xl text-xs font-extrabold uppercase tracking-widest flex items-center gap-1.5 ml-auto cursor-pointer"
                    >
                      Next Step
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Candidate Details */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                key="step2"
                className="space-y-6 max-w-xl mx-auto"
              >
                <h3 className="text-lg font-bold text-white text-center flex items-center justify-center gap-2">
                  <User size={18} className="text-accent" />
                  Candidate Profile Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">Full Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Musa Jamiu"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-accent"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-accent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">Current Role / Target Role</label>
                    <input
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="e.g. Senior Operations Manager"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">LinkedIn Profile URL</label>
                    <input
                      type="url"
                      value={linkedin}
                      onChange={(e) => setLinkedin(e.target.value)}
                      placeholder="linkedin.com/in/yourprofile"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">Strategic Career Brief / Notes</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                    placeholder="Briefly state your career target and any background (C-Suite, transition, executive filters, GCC relocation, etc.)"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-accent"
                  />
                </div>

                {/* Selected summary */}
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex justify-between items-center text-xs">
                  <div>
                    <p className="text-slate-400">Selected Reservation:</p>
                    <p className="font-bold text-white mt-0.5">{selectedPackage.name}</p>
                    <p className="text-[10px] text-accent mt-0.5 font-bold">{selectedDate} at {selectedTime}</p>
                  </div>
                  <span className="text-sm font-black text-accent">${selectedPackage.price}</span>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setStep(1)}
                    className="bg-slate-950 hover:bg-slate-900 border border-slate-800 px-5 py-3 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleProceedToPayment}
                    className="bg-accent text-primary hover:bg-accent/90 px-6 py-3 rounded-xl text-xs font-extrabold uppercase tracking-widest flex items-center gap-1.5 cursor-pointer"
                  >
                    {selectedPackage.price === 0 ? "Confirm Session" : "Proceed to Checkout"}
                    <ArrowRight size={13} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Secure Online Checkout Panel */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                key="step3"
                className="max-w-xl mx-auto space-y-6"
              >
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-bold text-white flex items-center justify-center gap-2">
                    <Shield size={18} className="text-emerald-500" />
                    Secure Payment Gateway
                  </h3>
                  <p className="text-xs text-slate-400">
                    Process your card through Stripe, PayPal, or access global remit networks.
                  </p>
                </div>

                {/* Payment selection tabs */}
                <div className="grid grid-cols-3 gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
                  <button
                    onClick={() => setPaymentMethod("card")}
                    className={`py-2 px-3 rounded-xl text-[10px] font-black uppercase tracking-wider text-center transition-all cursor-pointer ${
                      paymentMethod === "card" ? "bg-accent text-primary" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Card (Stripe)
                  </button>
                  <button
                    onClick={() => setPaymentMethod("paypal")}
                    className={`py-2 px-3 rounded-xl text-[10px] font-black uppercase tracking-wider text-center transition-all cursor-pointer ${
                      paymentMethod === "paypal" ? "bg-accent text-primary" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    PayPal Checkout
                  </button>
                  <button
                    onClick={() => setPaymentMethod("remitly")}
                    className={`py-2 px-3 rounded-xl text-[10px] font-black uppercase tracking-wider text-center transition-all cursor-pointer ${
                      paymentMethod === "remitly" ? "bg-accent text-primary" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Remitly / Bank
                  </button>
                </div>

                {/* Payment Form Details */}
                <form onSubmit={handleProcessPayment} className="space-y-4">
                  {paymentMethod === "card" && (
                    <div className="space-y-3 bg-slate-950/40 p-5 border border-slate-800 rounded-2xl">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-black text-slate-400 uppercase">Stripe Secured</span>
                        <CreditCard size={16} className="text-accent" />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] font-black uppercase text-slate-500 tracking-wider">Cardholder Name</label>
                        <input
                          type="text"
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value)}
                          placeholder="Musa Jamiu"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-700 focus:outline-none focus:border-accent"
                          required
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] font-black uppercase text-slate-500 tracking-wider">Card Number</label>
                        <input
                          type="text"
                          value={cardNumber}
                          onChange={(e) => handleCardNumberChange(e.target.value)}
                          placeholder="4111 2222 3333 4444"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-700 focus:outline-none focus:border-accent"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[9px] font-black uppercase text-slate-500 tracking-wider">Expiry Date</label>
                          <input
                            type="text"
                            value={cardExpiry}
                            onChange={(e) => handleCardExpiryChange(e.target.value)}
                            placeholder="MM/YY"
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-700 focus:outline-none focus:border-accent"
                            required
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-black uppercase text-slate-500 tracking-wider">CVC Code</label>
                          <input
                            type="text"
                            value={cardCvc}
                            onChange={(e) => handleCvcChange(e.target.value)}
                            placeholder="123"
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-700 focus:outline-none focus:border-accent"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "paypal" && (
                    <div className="p-6 bg-slate-950/40 border border-slate-800 rounded-2xl text-center space-y-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto">
                        <ExternalLink size={20} />
                      </div>
                      <div className="space-y-1 max-w-sm mx-auto">
                        <p className="text-sm font-bold text-white">PayPal Instant Checkout</p>
                        <p className="text-xs text-slate-400">
                          Click below to confirm booking. It will redirect to PayPal interface to complete the secure payment of <span className="font-bold text-accent">${selectedPackage.price}</span>.
                        </p>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "remitly" && (
                    <div className="p-5 bg-slate-950/40 border border-slate-800 rounded-2xl space-y-3 text-left">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Direct Bank Remittance Instructions:</p>
                      <div className="text-[11px] text-slate-300 space-y-1 leading-relaxed">
                        <p>• **Remitly Target**: Musa A. Jamiu</p>
                        <p>• **Account Target**: Nigerian / UK Corporate Escrow Gateway</p>
                        <p>• **Payment Code Ref**: {selectedDate}-{selectedTime.split(" ")[0]}</p>
                        <p>• Once completed, email your confirmation voucher receipt directly to **mohammad.jamiu.careers@gmail.com** for manual release verification.</p>
                      </div>
                    </div>
                  )}

                  {/* Pricing Total Summary Box */}
                  <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex justify-between items-center text-xs">
                    <span className="text-slate-400">Engaging: **{selectedPackage.name}**</span>
                    <span className="text-lg font-black text-accent">${selectedPackage.price}</span>
                  </div>

                  {/* Submission controls */}
                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="bg-slate-950 hover:bg-slate-900 border border-slate-800 px-5 py-3 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={paymentProcessing}
                      className="bg-accent text-primary hover:bg-accent/90 disabled:bg-slate-800 disabled:text-slate-500 px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-1.5 cursor-pointer flex-1 sm:flex-initial"
                    >
                      {paymentProcessing ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                          Processing Transaction...
                        </>
                      ) : (
                        `Confirm & Pay $${selectedPackage.price}`
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* STEP 4: Success Receipt */}
            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                key="step4"
                className="max-w-md mx-auto text-center space-y-6 bg-slate-950 border border-slate-800 p-6 sm:p-8 rounded-3xl"
              >
                <div className="w-14 h-14 bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Check size={28} className="stroke-[3]" />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-black text-accent tracking-widest uppercase block">Appointment Secured</span>
                  <h3 className="text-xl font-extrabold text-white">Your Call is Successfully Confirmed!</h3>
                  <p className="text-xs text-slate-400 leading-normal max-w-sm mx-auto">
                    A confirmation ticket, Calendar integration link, and initial onboarding workbook questionnaire have been dispatched to **{email}**.
                  </p>
                </div>

                <hr className="border-t border-slate-800/80 my-4" />

                {/* Digital receipt metadata details */}
                <div className="space-y-2 text-left bg-slate-900/60 p-4 rounded-2xl border border-slate-800/60 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Candidate:</span>
                    <span className="font-bold text-white">{name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Chosen Slot:</span>
                    <span className="font-bold text-accent">{selectedDate} @ {selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Chosen Tier:</span>
                    <span className="font-bold text-slate-200">{selectedPackage.name}</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-800/60 pt-2 mt-2">
                    <span className="text-slate-400 font-bold">Transaction Reference:</span>
                    <span className="font-mono text-[10px] text-emerald-400 font-bold">{invoiceId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-bold">Total Paid Amount:</span>
                    <span className="font-black text-accent">${selectedPackage.price} USD</span>
                  </div>
                </div>

                <div className="bg-slate-900/40 p-4 border border-slate-800/60 rounded-xl text-left text-[11px] text-slate-400 leading-relaxed">
                  <span className="font-bold text-slate-200 block mb-1">What happens next?</span>
                  1. Mohammad will review your LinkedIn profile & candidate notes.
                  <br />
                  2. Prepare your current resume draft (or submit it on our CV Diagnostic tool above).
                  <br />
                  3. Join the alignment call link on the calendar appointment invitation.
                </div>

                <button
                  onClick={() => {
                    setStep(1);
                    setSelectedDate("");
                    setSelectedTime("");
                    setName("");
                    setEmail("");
                    setRole("");
                    setLinkedin("");
                    setNotes("");
                    setCardNumber("");
                    setCardExpiry("");
                    setCardCvc("");
                    setCardName("");
                  }}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-xs font-bold py-2.5 rounded-xl border border-slate-800 transition-colors cursor-pointer"
                >
                  Book Another Session
                </button>
              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};

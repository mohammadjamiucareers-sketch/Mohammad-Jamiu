import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Phone, Calendar, CheckSquare, Sparkles, AlertCircle } from "lucide-react";

interface ChatMessage {
  id: string;
  role: "user" | "model";
  content: string;
  timestamp: Date;
}

export const FloatingActionWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "model",
      content: "Hello! I am Mohammad's Career Strategy assistant. How can I assist you with your resume, portfolio, or scheduling an appointment today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      const chatHistory = messages.map(m => ({
        role: m.role === "model" ? "model" : "user",
        content: m.content
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: chatHistory
        })
      });

      if (!response.ok) {
        throw new Error("Failed to reach server");
      }

      const data = await response.json();
      
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "model",
        content: data.text || "I apologize, but I am unable to generate a response at this moment. Please try again soon.",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      // Resilience: trigger a beautiful local response
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "model",
        content: getFallbackResponse(text),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const getFallbackResponse = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes("price") || q.includes("cost") || q.includes("package") || q.includes("fee")) {
      return "We offer three premium packages:\n• **Basic CV ($150)**\n• **Professional Optimization ($450)**\n• **C-Suite/Board Premium ($1,250)**.\nYou can view details in our **Pricing** section, or use the Booking tool to schedule a strategic slot!";
    }
    if (q.includes("book") || q.includes("schedule") || q.includes("appointment") || q.includes("call")) {
      return "To reserve your date, scroll directly to our interactive **Appointment Booking** panel, select a convenient time, pick your tier, and secure your session.";
    }
    if (q.includes("resume") || q.includes("cv") || q.includes("ats")) {
      return "We have an amazing **CV Diagnostic** scanner! Drag and drop your CV there to get a full check and ATS analysis instantly.";
    }
    if (q.includes("whatsapp") || q.includes("phone")) {
      return "Mohammad is available directly on WhatsApp at **+44 7425 240833** (UK) or **+234 813 543 3233** (NG). Feel free to send him a direct message!";
    }
    return "Thank you! I am here representing Mohammad Jamiu's elite career advisory brand. To move forward, check our interactive services or schedule an appointment below.";
  };

  const presetPrompts = [
    { label: "Book Appointment", action: () => {
      setIsOpen(false);
      const el = document.getElementById("booking-system");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }},
    { label: "Check ATS CV Score", action: () => {
      setIsOpen(false);
      const el = document.getElementById("resume-dropper");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }},
    { label: "View Pricing Tiers", action: () => {
      setIsOpen(false);
      const el = document.getElementById("pricing");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }}
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Interactive AI Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-[92vw] sm:w-[380px] h-[500px] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto"
            id="chatbot-window"
          >
            {/* Header */}
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <Sparkles size={16} />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-black text-white uppercase tracking-wider">
                    JAMIU CAREER AI
                  </h4>
                  <p className="text-[9px] text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Online Assistant
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={15} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/60 flex flex-col">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed text-left shadow-md ${
                      msg.role === "user"
                        ? "bg-accent text-primary font-bold rounded-tr-none"
                        : "bg-slate-900 text-slate-200 border border-slate-800 rounded-tl-none whitespace-pre-line"
                    }`}
                  >
                    {msg.content}
                    <div
                      className={`text-[8px] mt-1.5 text-right ${
                        msg.role === "user" ? "text-primary/60" : "text-slate-500"
                      }`}
                    >
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl rounded-tl-none px-4 py-3 shadow-md">
                    <div className="flex gap-1.5 items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Chips Shortcuts */}
            <div className="px-3 py-2 bg-slate-900/40 border-t border-slate-800/60 overflow-x-auto flex gap-2 whitespace-nowrap scrollbar-hide">
              {presetPrompts.map((chip, index) => (
                <button
                  key={index}
                  onClick={chip.action}
                  className="bg-slate-950 hover:bg-accent hover:text-primary border border-slate-800 text-[10px] font-bold text-slate-300 py-1.5 px-3 rounded-full transition-all cursor-pointer"
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-3 bg-slate-950 border-t border-slate-800 flex gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about resume, pricing, or booking..."
                className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="w-10 h-10 bg-accent disabled:bg-slate-800 text-primary disabled:text-slate-500 rounded-xl flex items-center justify-center transition-colors cursor-pointer"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button Rail - Sticky bottom widgets */}
      <div className="flex flex-col gap-2.5 pointer-events-auto items-end">
        
        {/* Contact WhatsApp Trigger */}
        <motion.a
          href="https://wa.me/2347026541428"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full bg-emerald-500 text-white shadow-lg flex items-center justify-center hover:bg-emerald-400 transition-colors cursor-pointer relative group"
          id="whatsapp-widget"
          title="Chat on WhatsApp"
        >
          <Phone size={20} className="fill-current stroke-[1.5]" />
          <span className="absolute right-14 bg-slate-950 text-white border border-slate-800 text-[10px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
            WhatsApp: +234 702 654 1428
          </span>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-accent rounded-full border-2 border-slate-900 animate-pulse" />
        </motion.a>

        {/* AI Chatbot Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all cursor-pointer relative ${
            isOpen ? "bg-red-500 text-white" : "bg-accent text-primary"
          }`}
          id="chatbot-trigger"
          title="Consult Jamiu Career AI"
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} className="stroke-[2.5]" />}
          
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
            </span>
          )}
        </motion.button>

      </div>
    </div>
  );
};

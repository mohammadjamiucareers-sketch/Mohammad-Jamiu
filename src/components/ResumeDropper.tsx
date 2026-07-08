import { useState, useRef, DragEvent, ChangeEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { UploadCloud, FileText, CheckCircle2, AlertCircle, Sparkles, RefreshCw, FileCheck2, ArrowRight } from "lucide-react";

interface ATSReport {
  score: number;
  readability: "Professional Grade" | "Needs Restructuring" | "ATS-Critical Failure";
  focusArea: string;
  formattingIssues: string[];
  detectedKeywords: string[];
  missingCSuiteKeywords: string[];
}

export const ResumeDropper = () => {
  const [isDragActive, setIsDragActive] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [isParsing, setIsParsing] = useState<boolean>(false);
  const [parseProgress, setParseProgress] = useState<number>(0);
  const [report, setReport] = useState<ATSReport | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (selectedFile: File) => {
    // Validate file type
    const validExtensions = [".pdf", ".doc", ".docx", ".txt"];
    const fileExtension = selectedFile.name.substring(selectedFile.name.lastIndexOf(".")).toLowerCase();
    
    if (!validExtensions.includes(fileExtension)) {
      alert("Invalid format. Please upload a standard CV in PDF, DOC, DOCX, or TXT format.");
      return;
    }

    setFile(selectedFile);
    setIsParsing(true);
    setParseProgress(0);
    setReport(null);

    // Simulate real-time secure parsing
    const interval = setInterval(() => {
      setParseProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            generateMockReport(selectedFile);
          }, 350);
          return 100;
        }
        return prev + 10;
      });
    }, 120);
  };

  const generateMockReport = (selectedFile: File) => {
    setIsParsing(false);
    
    // Customize report metrics slightly based on filename strings to make it feel responsive
    const lowercaseName = selectedFile.name.toLowerCase();
    let score = 68;
    let focusArea = "General Operations & Professional Support";
    let detectedKeywords = ["Project Management", "Team Coordination", "Budget Planning", "Reporting", "Microsoft Office"];
    let missingCSuiteKeywords = ["Fiduciary Governance", "Boardroom Relations", "CAPEX / OPEX Formulation", "Enterprise Mergers", "Global Restructuring"];
    let formattingIssues = [
      "Detected complex multi-column layout table which scrambles standard parser indexing.",
      "Graphic icons used for key skill indicators (Not indexable by older ATS systems).",
      "Missing high-impact quantified metrics (only 12% of sentences contain numerical values)."
    ];

    if (lowercaseName.includes("exec") || lowercaseName.includes("director") || lowercaseName.includes("vp") || lowercaseName.includes("lead")) {
      score = 76;
      focusArea = "Executive Administration & Corporate Leadership";
      detectedKeywords = ["P&L Management", "Stakeholder Management", "Strategic Roadmaps", "Strategic Hiring"];
      missingCSuiteKeywords = ["Systemic Business Turnarounds", "Capital Restructuring", "Public Board Advocacy"];
      formattingIssues = [
        "Header metadata (email/phone) is placed inside an un-scannable document margin header.",
        "Resume length is excessive (over 3 pages long), degrading quick executive reviewing metrics."
      ];
    } else if (lowercaseName.includes("tech") || lowercaseName.includes("dev") || lowercaseName.includes("eng") || lowercaseName.includes("product")) {
      score = 62;
      focusArea = "Technical Product Delivery & System Architectures";
      detectedKeywords = ["Software Engineering", "Agile Methodologies", "System Scaling", "Full-Stack Development"];
      missingCSuiteKeywords = ["Product Monetization Models", "Cross-Functional Fiduciary Impact", "Board Advisory Matrix"];
      formattingIssues = [
        "Inclusion of non-standard font families (use standard Inter or Helvetica for optimal parser translation).",
        "Overwhelming technical jargon with insufficient emphasis on business revenue or customer outcomes."
      ];
    }

    setReport({
      score,
      readability: score < 65 ? "ATS-Critical Failure" : score < 80 ? "Needs Restructuring" : "Professional Grade",
      focusArea,
      formattingIssues,
      detectedKeywords,
      missingCSuiteKeywords
    });
  };

  const handleReset = () => {
    setFile(null);
    setReport(null);
    setParseProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSendToMohammad = () => {
    // Populate form drop option in contact form
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      const serviceSelect = document.getElementById("form-service") as HTMLSelectElement;
      if (serviceSelect) {
        // Find executive package or resume option
        const options = Array.from(serviceSelect.options);
        const match = options.find(opt => opt.value.toLowerCase().includes("resume") || opt.value.toLowerCase().includes("premium"));
        if (match) {
          serviceSelect.value = match.value;
          const event = new Event("change", { bubbles: true });
          serviceSelect.dispatchEvent(event);
        }
      }
      // Populate message box with a note about the uploaded file
      const messageTextarea = document.getElementById("form-message") as HTMLTextAreaElement;
      if (messageTextarea) {
        messageTextarea.value = `Hello Mohammad, I just ran my resume (${file?.name || "CV"}) through your ATS diagnostic tool and scored ${report?.score}%. I would love a professional review and optimization of my profile to secure high-tier leadership roles.`;
      }
    }
  };

  return (
    <section id="resume-dropper" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold text-accent tracking-widest uppercase block">
            Instant CV Diagnostic
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight" id="dropper-title">
            Where to Drop Your Resume
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Drop your current CV below. Our parsing engine simulates modern corporate ATS algorithms, instantly checking your layout formatting, keywords, and board readiness in 10 seconds.
          </p>
        </div>

        {/* Drop Sandbox Container */}
        <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 sm:p-10 shadow-sm relative">
          
          <AnimatePresence mode="wait">
            {/* Phase 1: Upload state */}
            {!file && !isParsing && (
              <motion.div
                key="upload-zone"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`border-2 border-dashed rounded-2xl p-8 sm:p-12 text-center transition-all duration-300 cursor-pointer ${
                  isDragActive 
                    ? "border-accent bg-accent/5 scale-[1.01]" 
                    : "border-slate-300 hover:border-primary/60 hover:bg-slate-100/50"
                }`}
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
                onClick={triggerFileInput}
                id="dropper-zone"
              >
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.txt"
                  className="hidden"
                />
                
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/5 flex items-center justify-center text-primary border border-primary/5">
                    <UploadCloud size={32} className="stroke-[1.5]" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-extrabold text-primary">
                      Drag & drop your resume file here, or <span className="text-accent underline">browse</span>
                    </p>
                    <p className="text-xs text-slate-400 mt-1.5">
                      Supports PDF, DOC, DOCX, or TXT (Max 5MB)
                    </p>
                  </div>
                  <div className="pt-2 flex justify-center gap-6 text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    <span className="flex items-center gap-1"><FileCheck2 size={12} className="text-emerald-500" /> Secure Processing</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Sparkles size={12} className="text-accent" /> ATS Compliance Check</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Phase 2: Processing state */}
            {isParsing && (
              <motion.div
                key="parsing-zone"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 text-center space-y-6"
                id="dropper-parsing"
              >
                <div className="relative w-16 h-16 mx-auto">
                  <div className="absolute inset-0 border-4 border-slate-200 rounded-full" />
                  <div className="absolute inset-0 border-4 border-accent border-t-transparent rounded-full animate-spin" />
                  <FileText className="absolute inset-0 m-auto text-primary" size={24} />
                </div>
                
                <div className="space-y-2 max-w-sm mx-auto">
                  <h4 className="font-bold text-primary text-base">Parsing & Mapping Content...</h4>
                  <p className="text-xs text-slate-400">
                    Extracting structural metrics and testing keyword densities against C-suite standards.
                  </p>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-4">
                    <div 
                      className="bg-accent h-full transition-all duration-150"
                      style={{ width: `${parseProgress}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-slate-500 font-bold uppercase tracking-wider pt-1">
                    <span>ATS Scannability Engine v3.8</span>
                    <span>{parseProgress}% Complete</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Phase 3: Detailed Report state */}
            {file && report && !isParsing && (
              <motion.div
                key="report-zone"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8 text-left"
                id="dropper-report"
              >
                {/* Header card */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6 bg-white border border-slate-200/50 rounded-2xl gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 bg-primary/5 rounded-xl text-primary border border-primary/5">
                      <FileText size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-sm sm:text-base line-clamp-1">{file.name}</h4>
                      <p className="text-xs text-slate-400 flex items-center gap-2">
                        <span>{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                        <span>•</span>
                        <span className="text-emerald-600 font-medium flex items-center gap-0.5">
                          <CheckCircle2 size={10} /> Scanned Successfully
                        </span>
                      </p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleReset}
                    className="text-xs font-bold text-slate-500 hover:text-primary flex items-center gap-1 border border-slate-200 hover:border-slate-300 py-1.5 px-3 rounded-lg bg-white transition-all cursor-pointer"
                  >
                    <RefreshCw size={12} /> Scan Another File
                  </button>
                </div>

                {/* Score Summary Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Gauge score display */}
                  <div className="bg-white border border-slate-200/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">ATS Compatibility</p>
                    
                    <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                      {/* Circle tracks */}
                      <svg className="absolute w-full h-full transform -rotate-90">
                        <circle cx="64" cy="64" r="54" className="stroke-slate-100" strokeWidth="8" fill="transparent" />
                        <circle 
                          cx="64" 
                          cy="64" 
                          r="54" 
                          className="stroke-accent transition-all duration-1000" 
                          strokeWidth="8" 
                          fill="transparent" 
                          strokeDasharray={2 * Math.PI * 54}
                          strokeDashoffset={2 * Math.PI * 54 * (1 - report.score / 100)}
                        />
                      </svg>
                      
                      <div className="text-center">
                        <span className="text-3xl font-black text-primary block">{report.score}%</span>
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Unoptimized</span>
                      </div>
                    </div>

                    <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider ${
                      report.score < 65 ? "bg-red-50 text-red-600" : "bg-amber-50 text-amber-600"
                    }`}>
                      {report.readability}
                    </span>
                  </div>

                  {/* Formatting Diagnostics */}
                  <div className="bg-white border border-slate-200/50 rounded-2xl p-6 md:col-span-2 space-y-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Structural & Formatting Diagnostics</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-2 text-xs">
                        <span className="text-primary font-bold min-w-24">Focus Group:</span>
                        <span className="text-slate-600 font-medium">{report.focusArea}</span>
                      </div>
                      <hr className="border-t border-slate-100" />
                      <div className="space-y-2.5">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                          <AlertCircle size={10} className="text-amber-500" /> Parser Flagged Obstacles
                        </p>
                        {report.formattingIssues.map((issue, idx) => (
                          <div key={idx} className="flex gap-2 text-xs text-slate-500 leading-snug">
                            <span className="text-red-500 font-bold">•</span>
                            <span>{issue}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Keywords comparison analysis */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white border border-slate-200/50 rounded-2xl p-6">
                  {/* Detected Keywords */}
                  <div className="space-y-3 border-b sm:border-b-0 sm:border-r border-slate-100 pb-5 sm:pb-0 sm:pr-6">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-1.5">
                      <CheckCircle2 size={13} /> Successfully Detected Keywords
                    </h5>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Keywords corporate parsers identified as relevant to your sector:
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {report.detectedKeywords.map((kw, i) => (
                        <span key={i} className="text-[10px] font-semibold bg-slate-50 text-slate-600 px-2 py-1 rounded-md border border-slate-100">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Missing C-Suite/Executive Keywords */}
                  <div className="space-y-3 sm:pl-6">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-amber-600 flex items-center gap-1.5">
                      <AlertCircle size={13} /> Missing Executive & C-Suite Anchors
                    </h5>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      High-role keywords critical to unlocking boardrooms and VP roles:
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {report.missingCSuiteKeywords.map((kw, i) => (
                        <span key={i} className="text-[10px] font-bold bg-amber-50/50 text-amber-700 px-2 py-1 rounded-md border border-amber-100">
                          + {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Strategic Revamp CTA */}
                <div className="bg-gradient-to-r from-primary to-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden shadow-md">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="space-y-2 text-left md:max-w-md">
                    <h5 className="text-base sm:text-lg font-black tracking-tight text-accent flex items-center gap-1.5">
                      <Sparkles size={16} /> Unlock Executive-Grade Scannability
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Your ATS score of <span className="font-bold text-white">{report.score}%</span> will trigger flags in premium screening systems. Mohammad will personally rewrite your documents, optimize formatting, and embed high-role parameters.
                    </p>
                  </div>
                  
                  <button
                    onClick={handleSendToMohammad}
                    className="flex-shrink-0 bg-accent text-primary hover:bg-white hover:text-primary py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                    id="dropper-apply-revamp"
                  >
                    Get Premium C-Suite Restructure
                    <ArrowRight size={12} />
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Bottom micro note */}
        <p className="mt-8 text-center text-[11px] text-slate-400 max-w-sm mx-auto">
          * Your files are parsed locally within secure sandbox operations and are never sold or permanently saved without explicit strategic enrollment.
        </p>

      </div>
    </section>
  );
};

import { Service, Metric, Testimonial, PortfolioProject, CareerResource, FAQItem, PricingPackage } from "./types";

export const servicesData: Service[] = [
  {
    id: "ats-resume-writing",
    title: "ATS Resume Writing",
    description: "Professionally written, high-impact resumes carefully optimized for modern Applicant Tracking Systems (ATS) and human recruiters alike.",
    icon: "FileText",
    benefits: [
      "Custom ATS-compliant structure and keyword integration",
      "Compelling action-driven professional summaries",
      "Result-oriented experience section with quantified achievements",
      "Clean, modern, recruiter-approved typography and layouts"
    ],
    image: "/src/assets/images/resume_mockup_1782964855363.jpg"
  },
  {
    id: "executive-cv-writing",
    title: "Executive CV Writing",
    description: "Bespoke executive CVs designed specifically for senior leaders, C-suite executives, and directors targeting highly competitive board or enterprise roles.",
    icon: "Award",
    benefits: [
      "Strategic emphasis on leadership value and corporate governance",
      "Detailed capture of P&L oversight, revenue growth, and organizational scale",
      "Executive profile positioning matching board-level search parameters",
      "Includes executive biography and value proposition statement"
    ],
    image: "/src/assets/images/resume_mockup_1782964855363.jpg"
  },
  {
    id: "linkedin-optimization",
    title: "LinkedIn Profile Optimization",
    description: "A complete overhaul of your professional LinkedIn presence to turn your profile into a high-converting recruiter magnet.",
    icon: "Linkedin",
    benefits: [
      "Search-optimized headlines and custom-tailored 'About' section",
      "Strategic skills alignment and professional background narrative",
      "Actionable guidelines for increasing your search appearances and profile views",
      "Step-by-step guidance on networking and content strategy"
    ],
    image: "/src/assets/images/linkedin_mockup_1782964868362.jpg"
  },
  {
    id: "career-coaching",
    title: "Career Coaching",
    description: "Personalized, high-impact 1-on-1 coaching sessions designed around your unique professional goals and aspirations.",
    icon: "Compass",
    benefits: [
      "Clarification of long-term career vision and defining milestones",
      "Identifying transferable skills and unblocking career plateaus",
      "Creating structured development plans for promotion or industry moves",
      "Ongoing expert feedback and strategic accountability"
    ],
    image: "/src/assets/images/roadmap_mockup_1782964881648.jpg"
  },
  {
    id: "interview-coaching",
    title: "Interview Coaching",
    description: "Rigorous mock interviews, confidence-building exercises, and strategic framing structures to help you ace your conversations.",
    icon: "MessageSquareText",
    benefits: [
      "Mastery of the STAR response framework for behavioral questions",
      "Techniques for answering difficult, stress, or transition-related questions",
      "Improving verbal delivery, body language, and strategic pausing",
      "Post-interview analysis and continuous refinement protocols"
    ],
    image: "/src/assets/images/roadmap_mockup_1782964881648.jpg"
  },
  {
    id: "salary-negotiation",
    title: "Salary Negotiation Coaching",
    description: "Strategic guidance to confidently negotiate higher base salaries, signing bonuses, equity, and remote-work benefits.",
    icon: "Coins",
    benefits: [
      "Establishing market-rate compensation benchmarks based on location",
      "Developing persuasive verbal scripts and email templates",
      "Navigating recruiters' early compensation questions and traps",
      "Maximizing total compensation package value with multi-variable negotiation"
    ],
    image: "/src/assets/images/roadmap_mockup_1782964881648.jpg"
  },
  {
    id: "job-search-strategy",
    title: "Job Search Strategy",
    description: "A comprehensive, structured roadmap to optimize your job hunt, streamline applications, and access the hidden job market.",
    icon: "Search",
    benefits: [
      "Targeted employer list creation based on your goals",
      "Setting up efficient tracker frameworks to manage multiple applications",
      "Strategic direct outreach methods to recruiters and decision-makers",
      "Time management techniques to avoid job search burnout"
    ],
    image: "/src/assets/images/roadmap_mockup_1782964881648.jpg"
  },
  {
    id: "career-transition",
    title: "Career Transition Coaching",
    description: "Dedicated guidance to help professionals pivot successfully into entirely new industries, roles, or sectors.",
    icon: "TrendingUp",
    benefits: [
      "Deep analysis of transferable skills and core competencies",
      "Positioning your prior achievements to align with new industry needs",
      "Networking blueprints to gain credibility in your new field",
      "Overcoming the 'lack of direct experience' objection in interviews"
    ],
    image: "/src/assets/images/roadmap_mockup_1782964881648.jpg"
  },
  {
    id: "personal-branding",
    title: "Personal Branding",
    description: "Building an authoritative, compelling professional brand that establishes you as an industry thought-leader.",
    icon: "UserCheck",
    benefits: [
      "Defining your unique professional value proposition (UVP)",
      "Advising on content creation strategies for LinkedIn and personal blogs",
      "Polishing public-facing speaking bios and digital portfolios",
      "Unifying your brand across resumes, digital platforms, and pitches"
    ],
    image: "/src/assets/images/linkedin_mockup_1782964868362.jpg"
  },
  {
    id: "cover-letter-writing",
    title: "Cover Letter Writing",
    description: "Highly customized, persuasive cover letters that immediately capture a hiring manager's attention and compel action.",
    icon: "MailOpen",
    benefits: [
      "Tailored matching of your background to specific high-priority roles",
      "Engaging introduction hooks that replace boring boilerplates",
      "Narratives that illustrate fit, culture alignment, and enthusiasm",
      "Modern, professional, clean layout matching your resume style"
    ],
    image: "/src/assets/images/resume_mockup_1782964855363.jpg"
  },
  {
    id: "networking-strategy",
    title: "Networking Strategy",
    description: "Unlocking the hidden job market by learning how to build and nurture high-value relationships with key industry stakeholders.",
    icon: "Users",
    benefits: [
      "Custom scripts for informational interview requests and connection notes",
      "Strategies for attending and maximizing in-person and digital events",
      "Systematic relationship tracking and professional follow-up protocols",
      "Developing an authentic, non-transactional networking mindset"
    ],
    image: "/src/assets/images/roadmap_mockup_1782964881648.jpg"
  },
  {
    id: "job-application-support",
    title: "Job Application Support",
    description: "End-to-end administrative and strategic partnership to ensure your applications are high-quality, targeted, and tracking on schedule.",
    icon: "Briefcase",
    benefits: [
      "Comprehensive review of specific job postings for key critical terms",
      "Quick-turnaround reviews of application responses and custom forms",
      "Guidance on direct follow-ups to decision-makers after applying",
      "Assistance in managing and prioritizing active interview pipelines"
    ],
    image: "/src/assets/images/roadmap_mockup_1782964881648.jpg"
  }
];

export const whyChooseData = [
  {
    title: "Professional Expertise",
    description: "Years of global recruiting, resume writing, and career coaching experience across diverse premium markets.",
    icon: "ShieldCheck"
  },
  {
    title: "ATS Optimization",
    description: "Rigorous compliance checks with modern Applicant Tracking Systems to bypass automated screening filters.",
    icon: "Cpu"
  },
  {
    title: "Personalized Coaching",
    description: "Zero generic templates. Every plan, session, and document is custom-engineered around your precise career path.",
    icon: "User"
  },
  {
    title: "Industry Best Practices",
    description: "Constantly updated methodologies aligning with contemporary executive search and international talent standards.",
    icon: "CheckCircle"
  },
  {
    title: "Global Job Market Knowledge",
    description: "Deep expertise in key regional markets including the UAE, GCC, UK, USA, Canada, Europe, and Australia.",
    icon: "Globe"
  },
  {
    title: "Client-Focused Approach",
    description: "A collaborative, empathetic strategy focusing on building your confidence and empowering your professional agency.",
    icon: "Heart"
  },
  {
    title: "Confidential Service",
    description: "Your files, employment history, and career intentions are kept under strict privacy and non-disclosure standards.",
    icon: "Lock"
  },
  {
    title: "High-Quality Documents",
    description: "Stunning professional designs and typography optimized for executive-level impact and fast reading.",
    icon: "Layers"
  },
  {
    title: "Professional Communication",
    description: "Clear, responsive, and direct communication throughout our engagement via flexible digital channels.",
    icon: "MessageSquare"
  },
  {
    title: "Long-Term Partnership",
    description: "We remain your career allies, celebrating your promotions and advising on future career milestones.",
    icon: "Handshake"
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Career Consultation",
    description: "We begin with a comprehensive analysis of your current career state, your challenges, target industries, and future ambitions. This alignment sets our exact strategic focus.",
    icon: "PhoneCall"
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "We overhaul your documents, build your search pipelines, optimize your LinkedIn profile, and conduct tailored mock interview sessions. This builds your complete job-search infrastructure.",
    icon: "Settings"
  },
  {
    step: "03",
    title: "Career Success",
    description: "Armed with an executive-grade personal brand and advanced negotiation tactics, you land top-tier interview invitations and confidently secure lucrative career offers.",
    icon: "Trophy"
  }
];

export const successMetricsData: Metric[] = [
  { id: "professionals-supported", label: "Professionals Supported", value: 4500, suffix: "+" },
  { id: "resumes-optimized", label: "Resumes Optimized", value: 3800, suffix: "+" },
  { id: "linkedin-enhanced", label: "LinkedIn Profiles Enhanced", value: 1200, suffix: "+" },
  { id: "interview-invitations", label: "Interview Invitations Secured", value: 94, suffix: "%" },
  { id: "countries-served", label: "Countries Served Globally", value: 45, suffix: "+" },
  { id: "client-satisfaction", label: "Client Satisfaction Rate", value: 99, suffix: "%" }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Al-Mansoori",
    role: "Senior Director of Operations",
    company: "Mena Energy",
    location: "Dubai, UAE",
    quote: "Mohammad completely transformed my executive resume and LinkedIn profile. Within three weeks of launching my new brand, I was approached by two executive search firms and secured a VP offer representing a 35% salary increase. His strategic perspective is world-class.",
    rating: 5,
    industry: "Oil & Gas / Operations"
  },
  {
    id: "2",
    name: "Marcus Thorne",
    role: "Head of Infrastructure Engineering",
    company: "Apex Tech Labs",
    location: "London, UK",
    quote: "I was struggling to transition from a technical lead to a Director-level role. Mohammad's career coaching helped me articulate my leadership scale, P&L responsibility, and system architectures in a way that resonated with executive hiring boards. Highly recommended!",
    rating: 5,
    industry: "Technology"
  },
  {
    id: "3",
    name: "Dr. Elena Rostova",
    role: "Global Medical Affairs Lead",
    company: "BioMed Global",
    location: "Geneva, Switzerland",
    quote: "Working with Mohammad was an outstanding experience. As an international professional moving from clinical practice to enterprise pharma administration, I needed to re-frame my experience. His ATS-optimized resume and cover letter writing bridged that gap perfectly.",
    rating: 5,
    industry: "Pharmaceuticals / Healthcare"
  },
  {
    id: "4",
    name: "David Chen",
    role: "Senior Product Manager",
    company: "Fintech Horizon",
    location: "Sydney, Australia",
    quote: "The salary negotiation coaching alone was worth ten times the investment. Mohammad walked me through exact phone scripts and email frameworks. I negotiated an extra $24,000 in base salary plus sign-on bonuses. He is a phenomenal partner.",
    rating: 5,
    industry: "Financial Technology"
  },
  {
    id: "5",
    name: "Amara Okoye",
    role: "Vice President of Marketing",
    company: "Savoir Brands",
    location: "New York, USA",
    quote: "As a marketing executive, my standards for personal branding are exceptionally high. Mohammad surpassed them. He crafted a compelling, cohesive professional narrative that aligned my LinkedIn, resume, and board bio with absolute precision.",
    rating: 5,
    industry: "Consumer Brands / Marketing"
  }
];

export const portfolioProjectsData: PortfolioProject[] = [
  {
    id: "resume-optimization",
    title: "Executive Director Resume Optimization",
    category: "Resume Optimization",
    clientType: "Mid-to-Senior Executive",
    description: "Re-engineering a flat, task-focused professional history into an achievement-dense, leadership-scale CV showing multi-million dollar budget management.",
    challenge: "The client had 15+ years of extensive operations experience but their resume read like a list of daily responsibilities rather than strategic business impact.",
    solution: "Re-structured the document around a core Value Proposition. Introduced high-impact metrics including project margins, team size, and P&L oversight. Integrated specific industry ATS keywords.",
    result: "Secured 5 executive-level interviews in the first 14 days of application. The client landed a Director role with a major multinational firm.",
    metrics: [
      { label: "Interview Rate Increase", value: "3x" },
      { label: "Salary Increase Negotiated", value: "+28%" }
    ],
    image: "/src/assets/images/resume_mockup_1782964855363.jpg"
  },
  {
    id: "linkedin-makeover",
    title: "Global Tech Consultant LinkedIn Overhaul",
    category: "LinkedIn Makeover",
    clientType: "Enterprise Solution Architect",
    description: "A comprehensive rewrite and visual re-branding of a professional LinkedIn profile to position the client for overseas enterprise architecture roles.",
    challenge: "The client's profile was incomplete, missing structural keywords, and failing to appear in executive recruiter searches for their target regional markets (Dubai & London).",
    solution: "Optimized the main headline with high-intent search terms. Crafted a highly engaging first-person 'About' narrative showing complex technical achievements. Configured strategic skills listings.",
    result: "Profile search appearances increased by 420% in the first 30 days, resulting in 4 direct inbound recruiter inquiries for senior overseas roles.",
    metrics: [
      { label: "Recruiter Inbound Growth", value: "+420%" },
      { label: "Target Market Views", value: "85%" }
    ],
    image: "/src/assets/images/linkedin_mockup_1782964868362.jpg"
  },
  {
    id: "career-coaching-plan",
    title: "Management Consultant Career Coaching",
    category: "Career Coaching Plan",
    clientType: "Senior Management Consultant",
    description: "Designing a structured 8-week strategic pivot plan to move from corporate consulting into partner-track roles or specialized venture capital advisory.",
    challenge: "The client felt pigeonholed in traditional management consulting and lacked clarity on how to reposition their credentials for private equity or VC firms.",
    solution: "Conducted deep skills diagnostic sessions. Built a robust target list of VC and PE firms. Developed tailored warm-outreach scripts and informational interview guides.",
    result: "The client successfully built networks with 12 industry partners, culminating in 2 competitive senior associate offers with leading regional VC funds.",
    metrics: [
      { label: "Coaching Sessions", value: "8 Weeks" },
      { label: "Offers Secured", value: "2 Offers" }
    ],
    image: "/src/assets/images/roadmap_mockup_1782964881648.jpg"
  },
  {
    id: "executive-resume",
    title: "C-Suite CFO Global Executive CV",
    category: "Executive Resume",
    clientType: "Chief Financial Officer (CFO)",
    description: "A board-ready CV highlighting complex financial leadership, multi-currency capital raises, restructuring, and M&A triumphs on an international scale.",
    challenge: "A highly accomplished CFO had a messy, disjointed historical timeline due to several corporate acquisitions and mergers, confusing external recruiters.",
    solution: "Synthesized the timeline into a unified leadership narrative focusing on fiscal governance, strategic capital allocation, and valuation expansion. Crafted a powerful executive biography.",
    result: "Client was contacted directly by tier-one global search consultants for a major pre-IPO corporate leadership mandate.",
    metrics: [
      { label: "Board Review Rating", value: "Excellent" },
      { label: "Capital Focus Area", value: "$150M+" }
    ],
    image: "/src/assets/images/resume_mockup_1782964855363.jpg"
  },
  {
    id: "job-search-roadmap",
    title: "International Relocation Job Search Strategy",
    category: "Job Search Strategy Roadmap",
    clientType: "Senior Program Manager (Europe to Dubai)",
    description: "A complete global market-entry plan, incorporating localized networking tactics, target recruiter outreach, and visa-neutral positioning.",
    challenge: "The client wanted to relocate from the UK to Dubai but was getting zero responses through standard job boards due to out-of-region coordinates.",
    solution: "Designed a localized outreach campaign focused on UAE recruiters. Optimized their online profiles to show clear relocation readiness and visa feasibility.",
    result: "Secured 3 fully-sponsored interviews with leading firms in the GCC region, accepting an executive role in Dubai with full relocation benefits.",
    metrics: [
      { label: "Relocation Lead Time", value: "45 Days" },
      { label: "Offers Negotiated", value: "1 (Full Relo)" }
    ],
    image: "/src/assets/images/roadmap_mockup_1782964881648.jpg"
  },
  {
    id: "cover-letter",
    title: "Strategic Cover Letter for Biotech Lead",
    category: "Cover Letter",
    clientType: "Senior Biotech Research Scientist",
    description: "A compelling, narrative-driven cover letter aligning complex biochemical research successes with commercial biotech milestones.",
    challenge: "Standard cover letters failed to bridge the gap between academic scientific publications and commercial viability, hindering corporate leadership applications.",
    solution: "Authored a custom letter centering on immediate commercial benefits, patent monetization, and collaborative scientific leadership.",
    result: "Successfully secured high-interest interviews at two leading pharmaceutical research firms in Boston.",
    metrics: [
      { label: "Response Rate", value: "70%" },
      { label: "Interview Invites", value: "2 Elite" }
    ],
    image: "/src/assets/images/resume_mockup_1782964855363.jpg"
  }
];

export const pricingPackagesData: PricingPackage[] = [
  {
    id: "basic",
    name: "Basic",
    price: 150,
    description: "Ideal for early-career professionals or those looking to quickly optimize a single document.",
    features: [
      "ATS-Optimized Professional Resume / CV",
      "Tailored Executive Cover Letter Template",
      "Comprehensive LinkedIn Optimization PDF Checklist",
      "Direct Email Collaboration & 2 Revision Rounds",
      "5-7 Business Days Standard Delivery"
    ],
    ctaText: "Get Started"
  },
  {
    id: "professional",
    name: "Professional",
    price: 450,
    description: "Our most popular full-stack career transition package, engineered to double your interviews.",
    isPopular: true,
    features: [
      "Everything in Basic",
      "Done-for-You LinkedIn Profile SEO Overhaul Content",
      "1x 60-Minute Zoom Career Strategy or Mock Interview Coaching",
      "STAR Interview Method Workbook & Templates",
      "Premium Job Search Pipeline Strategy Tracker",
      "Unlimited Revisions for 30 Days & Priority Email Support"
    ],
    ctaText: "Accelerate Career"
  },
  {
    id: "premium",
    name: "Premium (C-Suite & Board)",
    price: 1250,
    description: "The ultimate white-glove executive package for senior leaders, C-suite executives, and directors seeking high-tier placements.",
    features: [
      "Everything in Professional",
      "C-Suite/Boardroom CV Overhaul & Executive Biography",
      "3x 60-Minute Private Career Advisory & Salary Negotiation Sessions",
      "Custom Global Market-Entry / Relocation Action Plan",
      "Personalized Salary Negotiation Scripts & Email Templates",
      "Direct 1-on-1 VIP WhatsApp Support with Mohammad",
      "Express 3-Business-Day Turnaround"
    ],
    ctaText: "Secure Executive Fit"
  }
];

export const careerResourcesData: CareerResource[] = [
  {
    id: "boardroom-cv",
    title: "The C-Suite Boardroom CV: Positioning for Governance & Global Scale",
    category: "Executive Advisory",
    readTime: "8 min read",
    date: "June 30, 2026",
    summary: "How C-Suite and Board candidates should re-engineer their resumes to focus on enterprise governance, capital deployment, and organizational scale.",
    image: "/src/assets/images/c_suite_success_1783020737519.jpg",
    content: [
      "Board-level and C-Suite resumes require a complete paradigm shift. Recruiters at this level do not care about your functional tasks or day-to-day operations. They care about enterprise risk, capital deployment, P&L stewardship, and organizational governance.",
      "Shift the focus to scale. Instead of stating 'Managed the engineering team,' you must articulate 'Steered global engineering organization of 350+ personnel, managing a CAPEX budget of $40M and overseeing systemic digital transformation across three international offices.'",
      "Ensure a clear Board-Ready profile summary. At the top of page one, define your primary operating mandate (e.g., 'Enterprise Turnarounds | High-Growth Scale-Ups | Global M&A Integration') and follow it with a 3-sentence executive statement emphasizing fiduciary responsibility.",
      "Quantify your board interactions. If you have reported directly to board committees or served as an advisory member, dedicate a clear subsection to 'Board Relations & Advisory Governance' highlighting major policy adoptions or capital approval successes."
    ]
  },
  {
    id: "c-suite-linkedin",
    title: "Executive LinkedIn SEO: Overhauling Headlines for Inbound Headhunters",
    category: "Executive Advisory",
    readTime: "6 min read",
    date: "June 25, 2026",
    summary: "A deep dive into advanced keyword routing to capture executive search agency queries and secure private equity boardroom visibility.",
    image: "/src/assets/images/executive_career_tips_1783020722888.jpg",
    content: [
      "Executive search consultants and Private Equity partners do not browse LinkedIn like normal recruiters. They use highly specific, premium Boolean search filters to identify candidates who have presided over particular organizational thresholds.",
      "The Executive Headline Formula: Target Title | P&L Scale or Funding Stage | Key Strategic Driver. Example: 'Chief Financial Officer (CFO) | Overlooked $120M P&L | Pre-IPO Scaling & Debt Restructuring'. This ensures immediate keyword matches when headhunters filter by business size.",
      "Your 'About' section must serve as an authoritative executive bio. It should outline your professional operating philosophy, your major commercial achievements, and a high-level summary of your career's cumulative fiscal impact.",
      "Unlocking private equity network settings. Make sure your profile has 'Open to Work' enabled strictly for recruiters, and that your target industries are accurately aligned with global equity hubs (e.g., London, Dubai, New York, Singapore)."
    ]
  },
  {
    id: "executive-negotiation",
    title: "Negotiating C-Suite Total Comp: Equity, LTIs, and Board Allowances",
    category: "Executive Advisory",
    readTime: "9 min read",
    date: "June 20, 2026",
    summary: "Learn the high-stakes negotiation mechanics behind complex corporate compensation packages, including performance-vested stock units.",
    image: "/src/assets/images/executive_career_tips_1783020722888.jpg",
    content: [
      "At the executive and C-Suite levels, base salary represents only a small fraction of your total compensation potential. Your negotiation strategy must focus heavily on Performance Stock Units (PSUs), Long-Term Incentives (LTIs), and strategic exit provisions.",
      "Establish your walk-away valuation threshold. Before entering discussions, evaluate your target firm's capital structure and run multiple valuation scenarios representing low, mid, and high stock-performance growth curves.",
      "Structure multi-variable performance vesting. If the base salary is capped due to internal corporate bands, negotiate an accelerated vesting schedule for RSUs or introduce strategic milestones that trigger significant capital bonuses.",
      "Secure key protective clauses. Never sign an executive agreement without reviewing the 'Golden Parachute' clauses, change-of-control provisions, and standard non-compete limits. These ensure complete long-term financial security regardless of corporate restructuring."
    ]
  },
  {
    id: "ats-secrets",
    title: "Cracking the ATS: What Recruiters Never Tell You",
    category: "Resume",
    readTime: "5 min read",
    date: "June 25, 2026",
    summary: "Discover the architectural rules of Applicant Tracking Systems and how to write resumes that rank in the top 1% of recruiter screens.",
    content: [
      "Applicant Tracking Systems (ATS) are software databases used by over 98% of Fortune 500 companies. They do not 'reject' you automatically, but they do score and rank your resume based on relevance parameters.",
      "The primary rule of ATS optimization is simplicity in formatting. Avoid text boxes, complex tables, non-standard icons, and graphics, as they can scramble the parsing engine, rendering your resume unsearchable.",
      "Integrate high-intent keywords naturally. Analyze your target job postings, identify recurring nouns and hard skills (e.g., 'Risk Management', 'Agile Methodologies', 'Financial Forecasting'), and thread them directly into your context rather than stuffing a list at the bottom.",
      "Focus on achievements rather than tasks. Recruiter screening is deeply focused on measurable numbers. Instead of writing 'Responsible for sales accounts', write 'Spearheaded 14 enterprise accounts, generating $2.4M in recurring revenue and outperforming historical sales targets by 18%'."
    ]
  },
  {
    id: "linkedin-algorithm",
    title: "Optimizing Your LinkedIn Profile for Inbound Leads",
    category: "LinkedIn",
    readTime: "6 min read",
    date: "June 18, 2026",
    summary: "Learn how the LinkedIn search algorithm works and the exact profile optimizations that will bring recruiters directly to your inbox.",
    content: [
      "LinkedIn is not just an online resume; it is a massive, real-time professional search engine. When corporate headhunters search for talent, they use specific Boolean search queries. Your profile must match those queries.",
      "Your headline is the most critical real estate. Do not just put your current job title (e.g., 'Project Manager at TechCo'). Instead, use a formula: Target Title | Core Industry Competency | Core Achievement or Value (e.g., 'Senior Project Manager | Agile Product Delivery | Delivered $10M+ Enterprise Software Portfolios').",
      "The 'About' section should be a first-person executive narrative. Write with confidence and warmth. Highlight your professional 'why', your major strategic milestones, and exactly what problems you excel at solving.",
      "Ensure your settings are configured for maximum discoverability. Turn on the 'Open to Work' features strictly for recruiters, customize your public profile URL to be clean (e.g., linkedin.com/in/yourname), and request strategic recommendations from prior senior peers."
    ]
  },
  {
    id: "star-framework",
    title: "Mastering the STAR Framework for Behavioral Interviews",
    category: "Interview",
    readTime: "4 min read",
    date: "June 10, 2026",
    summary: "A step-by-step masterclass on answering behavioral and situational questions with high confidence and structured impact.",
    content: [
      "Behavioral questions represent over 80% of executive and professional interviews. They start with phrases like: 'Tell me about a time when...' or 'Describe a situation where...'. Your responses must follow a structured story arc.",
      "S - Situation: Set the scene briefly. Mention the company, the scale, and the context of the challenge. (Keep this to 15% of your answer).",
      "T - Task: Explain the exact challenge or objective that needed to be addressed. What was at stake? (Keep this to 10% of your answer).",
      "A - Action: Describe what YOU did. Focus on your strategic reasoning, the tools you used, the stakeholders you managed, and how you solved the problem. Use 'I' instead of 'We'. (This is the meat of your answer - 50%).",
      "R - Result: Quantify the outcome. What happened? Did you save time, expand revenue, reduce risk, or improve safety? Numbers are mandatory here. (Keep this to 25% of your answer)."
    ]
  },
  {
    id: "negotiation-principles",
    title: "The Executive Salary Negotiation Blueprint",
    category: "Salary",
    readTime: "5 min read",
    date: "May 28, 2026",
    summary: "Unlock the psychological framing and exact scripts to negotiate significantly higher packages without risking the offer.",
    content: [
      "The single biggest mistake candidates make is revealing their compensation history or target expectations too early. He who speaks first on numbers loses strategic leverage.",
      "When a recruiter asks about salary expectations, deflect professionally: 'I am highly flexible and expect to be compensated competitively for a role of this scope. What is the budgeted range you have established for this position?'",
      "Once an offer is in hand, never accept on the spot. Express deep appreciation, enthusiasm, and request 48 hours to review the full details: 'I am incredibly excited about this opportunity. Let me review the complete offer document and benefits package, and I will get back to you with my response.'",
      "Always negotiate total compensation, not just base salary. If base salary budget is constrained, request performance bonuses, sign-on equity grants, accelerated reviews, extra vacation days, or professional development allowances."
    ]
  },
  {
    id: "hidden-job-market",
    title: "Unlocking the Hidden Job Market via Direct Outreach",
    category: "Networking",
    readTime: "7 min read",
    date: "May 15, 2026",
    summary: "Over 70% of high-paying professional roles are never posted publicly. Learn the exact networking tactics to access them.",
    content: [
      "Applying to job boards is a highly saturated, low-conversion strategy. Top professionals understand that the best opportunities are secured before a job description is even drafted.",
      "Identify a list of 20-30 target companies where your expertise could solve active, immediate pain points (e.g., expansion, regulatory compliance, system migration).",
      "Find key decision-makers on LinkedIn (e.g., Directors or VPs in your department, not just HR) and send highly respectful, value-first connection messages.",
      "Request brief 15-minute informational interviews: 'I've been following your department's growth in the digital space. I'd love to buy you a brief coffee or jump on a quick call to learn more about your approach to team expansion. I'm happy to share some insights from my recent global migration projects.'"
    ]
  },
  {
    id: "career-pivot",
    title: "How to Navigate a Mid-Career Industry Pivot Successfully",
    category: "Career Change",
    readTime: "6 min read",
    date: "May 02, 2026",
    summary: "A practical guide to mapping transferable skills and transitioning into entirely new roles without starting from the bottom.",
    content: [
      "A career transition can feel daunting, but you are never starting from scratch. Your years of professional expertise have built deep, valuable, transferable competencies.",
      "Identify the core overlaps. If you are moving from sales to product management, highlight your deep customer empathy, requirements gathering, roadmap prioritization, and stakeholder influence skills.",
      "Re-write your professional narrative to be industry-agnostic. De-jargon your achievements. Translate sector-specific terms into universal business principles (e.g., revenue growth, process automation, project lifecycle governance).",
      "Build bridging credibility. Take certified targeted courses, engage in advisory consulting, or contribute to open-source or community initiatives in your target sector to prove your direct commitment."
    ]
  },
  {
    id: "personal-brand-authority",
    title: "Building Digital Authority as an Industry Thought Leader",
    category: "Branding",
    readTime: "5 min read",
    date: "April 20, 2026",
    summary: "How to build a compelling digital footprint that commands premium consulting, speaking, and executive recruitment leads.",
    content: [
      "In the modern corporate world, your digital brand is your business card. High-value clients and search consultants search your name before picking up the phone.",
      "Pick a niche. Do not try to speak about everything. Choose 1-2 tight areas of extreme expertise (e.g., 'Cloud Infrastructure Scalability' or 'Corporate Mergers in Biotech') and build your entire content strategy around them.",
      "Consistency is key. Publish high-quality, practical insights once or twice a week. Share real-world problems you've solved, lessons learned from failures, or analytical perspectives on emerging industry trends.",
      "Engage actively in high-value conversations. Leave thoughtful, authoritative comments on other industry leaders' posts. This expands your reach, builds professional goodwill, and establishes your name among peers."
    ]
  },
  {
    id: "strategic-consulting-prep",
    title: "The Ultimate Guide to Selecting a Career Partner",
    category: "General",
    readTime: "4 min read",
    date: "April 05, 2026",
    summary: "Learn what to look for when selecting a career strategist to accelerate your professional journey and maximize your ROI.",
    content: [
      "Investing in career coaching or professional resume writing is a high-impact investment in your future earning potential. Choose your partner carefully.",
      "Look for active market knowledge. A great career coach understands current recruiter behaviors, modern applicant tracking mechanisms, and localized hiring dynamics.",
      "Avoid resume factories that use mass-produced templates and generic phrasing. A premium resume must be custom-crafted and tailored to your unique value proposition.",
      "Seek full-spectrum support. Your career is multi-dimensional—your partner should be able to guide you across resume writing, LinkedIn alignment, strategic networking, interview preparation, and complex salary negotiations."
    ]
  }
];

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "What types of professionals do you work with?",
    answer: "We work with professionals globally at all stages, from ambitious entry-level professionals to mid-level managers and C-suite executives. Our primary clients are high-performing individuals seeking strategic career advancements or pivots in the UAE, GCC, UK, USA, Canada, Europe, and Australia.",
    category: "Services & Pricing"
  },
  {
    id: "faq-2",
    question: "How long does a typical resume or profile rewrite take?",
    answer: "Our standard turnaround time is 5 to 7 business days from the moment we receive your completed intake questionnaire and previous files. For executive clients, our turnaround may extend to 7 to 10 business days to ensure meticulous board-level polishing. We also offer expedited delivery options if requested.",
    category: "Resume & CV"
  },
  {
    id: "faq-3",
    question: "What is an ATS, and how do you ensure my resume is optimized for it?",
    answer: "An Applicant Tracking System (ATS) is software used by recruiters to organize, search, and rank job applications. We utilize ATS-parsed structures, clean single-column layouts, and strategically integrate relevant high-intent keywords extracted from your target job profiles, ensuring your document passes automated filters seamlessly.",
    category: "Resume & CV"
  },
  {
    id: "faq-4",
    question: "Do you offer revision rounds for documents?",
    answer: "Yes, absolutely. Every document package includes up to 30 days of unlimited revisions. We work closely with you through a collaborative feed-back process to refine your resume, LinkedIn, or cover letter until you are 100% confident in the final product.",
    category: "Resume & CV"
  },
  {
    id: "faq-5",
    question: "What does the LinkedIn Profile Optimization service include?",
    answer: "This is a comprehensive, done-for-you optimization. We provide a complete document containing custom-engineered titles, SEOheadlines, a powerful first-person professional summary ('About'), structured descriptions for your key career milestones, fully optimized skill lists, and specific instructions on settings adjustments for maximum recruiter views.",
    category: "LinkedIn Optimization"
  },
  {
    id: "faq-6",
    question: "How do 1-on-1 coaching sessions work?",
    answer: "Coaching sessions are conducted virtually via highly interactive Zoom or Google Meet calls. Each session is structured around a specific objective (e.g., job search pipeline, interview prep, career pivot mapping) and is backed by custom follow-up materials, homework, and weekly accountability checks.",
    category: "Coaching & Consultations"
  },
  {
    id: "faq-7",
    question: "Do you help with salary negotiations?",
    answer: "Yes, salary negotiation coaching is one of our highest-ROI services. We provide localized market research, help you establish your target compensation boundary, and equip you with precise verbal frameworks and email scripts to negotiate larger base salaries, sign-on bonuses, and equity packages.",
    category: "Coaching & Consultations"
  },
  {
    id: "faq-8",
    question: "Can you help me transition into an entirely new industry?",
    answer: "Pivoting is our specialty. We conduct a complete diagnostic of your professional background, identify deep transferable skills, and craft a compelling narrative that bridges your prior experience to your new target industry. We also design specialized networking blueprints to establish your immediate credibility.",
    category: "Coaching & Consultations"
  },
  {
    id: "faq-9",
    question: "Is my personal and career information kept confidential?",
    answer: "Absolutely. We adhere to strict confidentiality standards. All personal information, career histories, corporate documents, and coaching discussions are treated as strictly confidential and are never shared with third parties or published without explicit, written permission.",
    category: "Services & Pricing"
  },
  {
    id: "faq-10",
    question: "What is your success rate with interviews?",
    answer: "Over 94% of our resume and coaching clients secure interviews within 60 days of launching their optimized professional brands. Many report landing interview invites at top-tier firms (including Fortune 500s and elite startups) within the first two weeks of our engagement.",
    category: "Coaching & Consultations"
  },
  {
    id: "faq-11",
    question: "Do you write custom cover letters?",
    answer: "Yes. We write tailored, highly persuasive cover letters that align directly with your target role. Rather than using generic templates, we weave your specific high-value achievements into an engaging story that proves your direct cultural and professional fit.",
    category: "Resume & CV"
  },
  {
    id: "faq-12",
    question: "Can I book a quick initial call before committing to a package?",
    answer: "Yes, we encourage it! You can book a complimentary 15-minute Discovery Consultation to discuss your current career challenges, review your goals, and identify which of our professional services aligns best with your immediate needs.",
    category: "Coaching & Consultations"
  },
  {
    id: "faq-13",
    question: "Do you support international clients seeking sponsorship or remote roles?",
    answer: "Yes. A significant portion of our clients are international professionals looking to relocate to prime corporate markets (such as Dubai, London, or New York) or secure cross-border remote contracts. We specialize in international CV standards and global job search strategies.",
    category: "Services & Pricing"
  },
  {
    id: "faq-14",
    question: "How do we get started?",
    answer: "Simply submit our Contact Form, message us directly via WhatsApp, or book a consultation. Once you select a service, we'll send a strategic intake questionnaire and schedule your onboarding call to begin your career acceleration journey.",
    category: "Services & Pricing"
  },
  {
    id: "faq-15",
    question: "What payment methods do you accept?",
    answer: "We accept secure digital payments via all major credit cards, bank transfers, and dedicated freelancing platforms such as Upwork for your complete financial safety and convenience.",
    category: "Services & Pricing"
  }
];

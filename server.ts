import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

// Shared Gemini Client
let ai: GoogleGenAI | null = null;
const getGeminiClient = () => {
  if (!ai) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY environment variable is not defined. AI Chatbot responses will fall back to smart local response mapping.");
      return null;
    }
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return ai;
};

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for AI Chatbot
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const client = getGeminiClient();
      if (!client) {
        // Fallback responses if no API key is set
        const reply = getFallbackResponse(message);
        return res.json({ text: reply });
      }

      // Configure system instructions for Mohammad Jamiu's personal career coaching brand
      const systemInstruction = `You are an AI Assistant representing Mohammad Jamiu, an elite executive career coach and resume writer.
Your goal is to help visitors understand Mohammad Jamiu's offerings, guide them to book appointments, check their ATS CV score via the Diagnostic tool, and sign up for one of the three premium packages.

Musa A. Jamiu's LinkedIn profile: https://www.linkedin.com/in/musa-a-jamiu-a6908741b
Contact email: mohammad.jamiu.careers@gmail.com
Phone/WhatsApp: +44 7425 240833 / +234 813 543 3233

Pricing Plans:
1. Basic Package ($150): ATS-Optimized Professional Resume / CV, Editable Format, Cover Letter.
2. Professional Package ($450): Full LinkedIn SEO Optimization, Advanced Interview prep, Actionable Strategic networking plans. (Most Popular)
3. Premium Package (C-Suite & Board) ($1,250): Executive Boardroom CV overhaul, full mock C-level interview, salary scripting and equity negotiation coaching.

Guide users to take action:
- Drop their resume on the "CV Diagnostic" section.
- Book a free strategic call or standard appointment in the "Appointment booking" section.
- Choose a premium package under "Pricing".
- Reach out on WhatsApp or submit the Contact Form.

Be extremely professional, encouraging, and clear. Avoid overly verbose answers. Keep answers to 2-3 short, highly impactful paragraphs.`;

      // Format history into a simple clean prompt
      const formattedHistory = (history || [])
        .map((h: any) => `${h.role === 'user' ? 'User' : 'Assistant'}: ${h.content}`)
        .join("\n");
      const prompt = `${formattedHistory}\nUser: ${message}\nAssistant:`;

      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: "Something went wrong. Please try again later.", details: error.message });
    }
  });

  // Local fallback response helper for smooth resilience
  function getFallbackResponse(message: string): string {
    const msg = message.toLowerCase();
    if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
      return "Hello! I am Mohammad Jamiu's executive career assistant. How can I help you accelerate your career trajectory today? I can guide you through our executive CV revamps, booking an appointment, or testing your resume on our CV Diagnostic tool.";
    }
    if (msg.includes("price") || msg.includes("cost") || msg.includes("package") || msg.includes("fee")) {
      return "We offer three premium alignment tiers:\n• **Basic Package ($150)**: ATS-optimized CV & cover letter.\n• **Professional Package ($450)**: Includes LinkedIn SEO, 1-on-1 interview drills, and strategic networking plans.\n• **Premium Executive Tier ($1,250)**: Deep white-glove C-suite/Board overhaul, equity and salary scripting, and VIP access.\n\nWhich of these matches your current career stage?";
    }
    if (msg.includes("book") || msg.includes("schedule") || msg.includes("appointment") || msg.includes("call")) {
      return "You can schedule a strategic alignment call directly on our page in the **Appointment Booking** section! Simply select your preferred date, time, and target tier, then finalize your slot.";
    }
    if (msg.includes("resume") || msg.includes("cv") || msg.includes("ats") || msg.includes("diagnostic")) {
      return "I highly recommend dropping your current CV directly into our interactive **CV Diagnostic** section (Where to Drop Your Resume). It will instantly parse your content and score your boardroom scannability.";
    }
    if (msg.includes("whatsapp") || msg.includes("contact") || msg.includes("email") || msg.includes("phone")) {
      return "You can reach Mohammad Jamiu directly on WhatsApp at **+44 7425 240833** (UK) or **+234 813 543 3233** (NG), or email us at **mohammad.jamiu.careers@gmail.com**. You can also use the contact form at the bottom of the page!";
    }
    if (msg.includes("linkedin")) {
      return "You can connect with Mohammad on LinkedIn at https://www.linkedin.com/in/musa-a-jamiu-a6908741b to check out his leadership posts and direct network updates.";
    }
    return "Thank you for reaching out! Mohammad specializes in positioning executive and C-suite candidates to land high-tier corporate roles. I recommend booking an alignment slot below or dropping your CV into our CV Diagnostic scanner to check your ATS score.";
  }

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini client if API key is present
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }

  // API endpoint for AI assistant
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      if (!ai) {
        return res.json({
          text: "I am SV Plumbing's Assistant. I am currently running in demo mode, but I can answer your questions based on our services! For any direct service, please contact us at 8008693712 or visit us at Mohan Nagar, Kothapet, Hyderabad."
        });
      }

      const systemInstruction = `You are a helpful, professional, and friendly AI Plumbing Assistant for "SV PLUMBING SERVICES", located at 11-87-4, Vijayapuri Colony Main Road, Mohan Nagar, Srinagar Colony, Kothapet, Hyderabad - 500102. Contact Number: 8008693712.
Your goal is to assist customers with plumbing-related queries, troubleshoot minor problems, recommend relevant plumbing services from our list of 30 services, and encourage them to book a service with us.
Provide clear, structured, easy-to-understand explanations for issues like leakage, blocked drains, water heater (geyser) installation, water tank cleaning, and pipe replacements.
Always mention that for safe and reliable solutions, they should book a professional appointment with SV Plumbing Services.
Our 30 Services include:
1. General Plumbing Works
2. Water Pipeline Installation and Repair
3. Bathroom and Kitchen Plumbing
4. Tap and Faucet Installation & Repairs
5. Leakage Detection and Repair
6. Drain Cleaning and Blockage Removal
7. Sink Installation and Repairs
8. Toilet Installation and Maintenance
9. Water Tank Installation and Cleaning
10. Borewell and Motor Pump Connections
11. Overhead Tank Plumbing Works
12. Pipe Fitting and Replacement
13. Shower and Geyser Installation
14. Water Heater Installation and Repairs
15. Sewage and Drainage Solutions
16. PVC, CPVC, and GI Pipe Works
17. Commercial Plumbing Services
18. Residential Plumbing Services
19. Emergency Plumbing Services
20. Apartment Plumbing Maintenance
21. Office Plumbing Maintenance
22. Renovation and Remodeling Plumbing Works
23. Sanitary Fittings Installation
24. Wash Basin Installation and Repairs
25. Water Pressure Problem Solutions
26. Underground Pipeline Works
27. Rainwater Drainage Solutions
28. Bathroom Accessories Installation
29. Kitchen Sink and Drain Line Works
30. Plumbing Inspection and Maintenance Services

Be extremely respectful, helpful, and localized to Hyderabad (specifically referencing suburbs like Kothapet, Srinagar Colony, Mohan Nagar, Vijayapuri Colony, etc. if appropriate). Keep answers concise and user-friendly, using bullet points for instructions. Do not write extremely long text blocks. Recommend calling or WhatsApping SV Plumbing Services at 8008693712 for urgent issues.`;

      const contents = [];
      
      // Add history
      if (history && Array.isArray(history)) {
        for (const turn of history) {
          contents.push({
            role: turn.role === "assistant" ? "model" : "user",
            parts: [{ text: turn.text }]
          });
        }
      }

      // Add the latest message
      contents.push({
        role: "user",
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction,
        }
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: error.message || "An error occurred during generation." });
    }
  });

  // Serve static files in production / Vite middleware in dev
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

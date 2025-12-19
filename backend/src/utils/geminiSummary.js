const dotenv = require("dotenv").config()
const { GoogleGenAI } = require("@google/genai");


const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});


const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const extractJSON = (text) => {
  const firstBrace = text.indexOf("{");
  const lastBrace = text.lastIndexOf("}");

  if (firstBrace === -1 || lastBrace === -1) {
    throw new Error("No JSON found in AI response");
  }

  const jsonString = text.slice(firstBrace, lastBrace + 1);
  return JSON.parse(jsonString);
};


// generating ai summary 
const generateIssueMeta = async ({ category, location, description }) => {
  const prompt = `
You analyze college issue reports.

Respond ONLY with valid JSON.
Do not include markdown, comments, or extra text.

JSON schema:
{
  "summary": "string (max 20 words)",
  "priority": "LOW | MEDIUM | HIGH | CRITICAL",
  "priorityScore": 1 | 2 | 3 | 4,
  "reason": "string"
}

Issue:
Category: ${category}
Location: ${location || "Not specified"}
Description: ${description}
`;

  // Models to try (fast → smart)
  const models = [
    "gemini-2.5-flash",
    "gemini-2.5-pro",
  ];

  for (let i = 0; i < models.length; i++) {
    try {
      if (i > 0) await sleep(800); 

      const response = await ai.models.generateContent({
        model: models[i],
        contents: prompt,
      });

      return extractJSON(response.text);
    } catch (err) {
      // Retrying on overload
      if (
        err.message?.includes("overloaded") ||
        err.message?.includes("JSON")
      ) {
        continue;
      }
      throw err;
    }
  }

// if still fails
  return {
    summary: description.slice(0, 100),
    priority: "MEDIUM",
    priorityScore: 2,
    reason: "AI service temporarily unavailable",
  };
};

module.exports = generateIssueMeta;

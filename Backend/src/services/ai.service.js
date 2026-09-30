const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

async function generateContent(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash-lite",
    contents: prompt,
    config: {
      systemInstruction: `You are a code reviewer. Review the provided code and identify bugs, errors, performance issues, and possible improvements. Give clear explanations and corrected code where appropriate.`
    }
  });

  return response.text;
}

module.exports = generateContent;
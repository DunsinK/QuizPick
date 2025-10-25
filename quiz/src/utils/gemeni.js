import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function generateQuiz(text, numQuestions = 5) {
  const prompt = `
  You are a quiz generator. Based on the text below, create ${numQuestions} questions.
  Format as JSON array like this:
  [
    {"question":"...", "options":["A","B","C","D"], "answer":"A", "type":"multiple_choice"},
    {"question":"...", "answer":"...", "type":"open_ended"}
  ]
  Text:
  ${text}
  `;
  const result = await model.generateContent(prompt);
  const raw = result.response.text();

  try {
    const jsonStart = raw.indexOf("[");
    const jsonEnd = raw.lastIndexOf("]");
    return JSON.parse(raw.slice(jsonStart, jsonEnd + 1));
  } catch {
    console.error("Failed to parse quiz JSON:", raw);
    return [];
  }
}

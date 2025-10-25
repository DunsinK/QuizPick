import { useState } from "react";
import { generateQuiz } from "../utils/gemeni";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = 
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export default function FileUpload({ setQuizData }) {
  const [mode, setMode] = useState("text");
  const [inputText, setInputText] = useState("");
  const [num, setNum] = useState(5);
  const [loading, setLoading] = useState(false);

  // Extract text from PDF
  async function extractTextFromPDF(file) {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let text = "";
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      text += content.items.map((item) => item.str).join(" ") + "\n";
    }
    return text;
  }

  // Handles the upload or text input
  async function handleGenerate(e) {
    e.preventDefault();
    setLoading(true);
    let text = "";

    try {
      if (mode === "text") {
        text = inputText;
      } else if (mode === "pdf") {
        const file = document.getElementById("fileInput").files[0];
        if (!file) throw new Error("No file selected");
        text = await extractTextFromPDF(file);
      } else if (mode === "image") {
        const file = document.getElementById("fileInput").files[0];
        if (!file) throw new Error("No image selected");

        // Convert to base64 for Gemini
        const reader = new FileReader();
        text = await new Promise((resolve) => {
          reader.onload = async () => {
            const base64 = reader.result.split(",")[1];
            const quiz = await generateQuiz(base64, num, true); // pass "true" for image mode
            setQuizData(quiz);
            setLoading(false);
            resolve();
          };
          reader.readAsDataURL(file);
        });
        return;
      }

      const quiz = await generateQuiz(text, num);
      setQuizData(quiz);
    } catch (err) {
      console.error("Error generating quiz:", err);
      alert("Failed to generate quiz. Check console for details.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <h2 className="text-2xl font-semibold">Choose Input Type</h2>

      <div className="flex gap-3">
        {["text", "pdf", "image"].map((type) => (
          <button
            key={type}
            onClick={() => setMode(type)}
            className={`px-3 py-1 rounded border ${
              mode === type ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      {mode === "text" && (
        <textarea
          placeholder="Paste or type your study notes here..."
          className="border p-2 w-80 h-40 rounded"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      )}

      {mode !== "text" && (
        <input
          id="fileInput"
          type="file"
          accept={mode === "pdf" ? ".pdf" : "image/*"}
          className="border p-2 rounded"
        />
      )}

      <div className="flex items-center gap-2 mt-2">
        <label>Number of Questions:</label>
        <input
          type="number"
          min={1}
          max={10}
          value={num}
          onChange={(e) => setNum(e.target.value)}
          className="border p-1 rounded w-16"
        />
      </div>

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="bg-green-500 text-white px-4 py-2 rounded mt-3"
      >
        {loading ? "Generating..." : "Generate Quiz"}
      </button>
    </div>
  );
}

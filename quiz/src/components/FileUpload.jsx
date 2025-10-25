import { useState } from "react";
import { generateQuiz } from "../utils/gemeni"

export default function FileUpload({ setQuizData }) {
  const [loading, setLoading] = useState(false);
  const [num, setNum] = useState(5);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    const text = await file.text(); // works for PDFs if you pre-convert, or test with .txt for MVP
    const quiz = await generateQuiz(text, num);
    setQuizData(quiz);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center gap-3 mt-10">
      <h2 className="text-2xl font-semibold">Upload Notes or PDF</h2>
      <input type="file" accept=".txt,.pdf,.png,.jpg" onChange={handleFile} />
      <input
        type="number"
        min={1}
        max={10}
        value={num}
        onChange={(e) => setNum(e.target.value)}
        className="border p-1 rounded"
      />
      {loading && <p>Generating quiz with Gemini...</p>}
    </div>
  );
}

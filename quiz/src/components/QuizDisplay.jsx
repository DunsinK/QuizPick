import { useState } from "react";

export default function QuizDisplay({ quizData, setResults }) {
  const [answers, setAnswers] = useState({});

  const handleSubmit = () => {
    const correct = quizData.filter(q =>
      q.answer.toLowerCase().trim() === (answers[q.question] || "").toLowerCase().trim()
    ).length;
    setResults({ total: quizData.length, correct });
  };

  return (
    <div className="p-4">
      {quizData.map((q, i) => (
        <div key={i} className="mb-4">
          <p className="font-semibold">{i + 1}. {q.question}</p>
          {q.type === "multiple_choice" ? (
            q.options.map((opt, j) => (
              <label key={j} className="block">
                <input
                  type="radio"
                  name={`q${i}`}
                  value={opt}
                  onChange={() => setAnswers({ ...answers, [q.question]: opt })}
                /> {opt}
              </label>
            ))
          ) : (
            <input
              type="text"
              className="border p-1 rounded w-full"
              onChange={(e) => setAnswers({ ...answers, [q.question]: e.target.value })}
            />
          )}
        </div>
      ))}
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </div>
  );
}

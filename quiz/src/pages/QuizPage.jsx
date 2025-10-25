import { useState } from "react";
import FileUpload from "../components/FileUpload";
import QuizDisplay from "../components/QuizDisplay";
import Results from "../components/Results";

export default function App() {
  const [quizData, setQuizData] = useState(null);
  const [results, setResults] = useState(null);

  const resetQuiz = () => {
    setQuizData(null);
    setResults(null);
  };

  return (
    <>
    <div className="flex w-screen justify-center">
    </div>
    <div className="min-h-screen bg-gray-100 text-center p-6">
      
      <h1 className="text-3xl font-bold text-blue-600">Quiz Pick 🎓</h1>

      {!quizData && !results && <FileUpload setQuizData={setQuizData} />}
      {quizData && !results && <QuizDisplay quizData={quizData} setResults={setResults} />}
      {results && <Results results={results} resetQuiz={resetQuiz} />}
    </div>
    </>
  );
}

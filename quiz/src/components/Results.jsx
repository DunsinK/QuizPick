export default function Results({ results, resetQuiz }) {
  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold">Results</h2>
      <p>You got {results.correct} out of {results.total} correct!</p>
      <button onClick={resetQuiz} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
        Try Another
      </button>
    </div>
  );
}

import { Link } from "react-router-dom";
import Logo from "../assets/LogoBG.png";

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800 flex flex-col items-center">
      {/* === Hero Section === */}
      <section className="w-full flex flex-col items-center text-center px-6 md:px-12 py-20 bg-gradient-to-b from-white to-green-50">
        

        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Welcome to <span className="text-green-600">QuizPick</span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-gray-600 mb-10">
          The smarter way to study. QuizPick uses{" "}
          <span className="font-semibold text-green-700">Gemini AI</span> to
          instantly turn your notes, slides, and study materials into
          personalized quizzes — helping you learn faster and remember more.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/quiz"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full text-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Get Started
          </Link>
          <a
            href="#learn-more"
            className="bg-white text-green-700 border border-green-600 hover:bg-green-50 font-semibold px-8 py-3 rounded-full text-lg transition-all duration-200 shadow-sm"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* === Features Section === */}
      <section
        id="learn-more"
        className="w-full py-24 px-6 md:px-12 bg-white text-center"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          How QuizPick Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-green-50 p-8 rounded-3xl shadow hover:shadow-lg transition-all duration-300 border border-green-100">
            <div className="text-green-600 text-4xl font-bold mb-3">1️⃣</div>
            <h3 className="text-xl font-semibold mb-3 text-green-700">
              Upload or Input Text
            </h3>
            <p className="text-gray-600">
              Upload notes, PDFs, or just type a topic — QuizPick understands
              your material and prepares it for quiz generation.
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-3xl shadow hover:shadow-lg transition-all duration-300 border border-green-100">
            <div className="text-green-600 text-4xl font-bold mb-3">2️⃣</div>
            <h3 className="text-xl font-semibold mb-3 text-green-700">
              Gemini-Powered Quizzes
            </h3>
            <p className="text-gray-600">
              Using Google’s Gemini AI, QuizPick crafts high-quality, dynamic
              quizzes based on your content — tailored to how you learn best.
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-3xl shadow hover:shadow-lg transition-all duration-300 border border-green-100">
            <div className="text-green-600 text-4xl font-bold mb-3">3️⃣</div>
            <h3 className="text-xl font-semibold mb-3 text-green-700">
              Learn Smarter
            </h3>
            <p className="text-gray-600">
              Take your AI-generated quizzes, track your improvement, and study
              efficiently — all in one platform.
            </p>
          </div>
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="w-full py-24 bg-green-600 text-white text-center flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to make studying smarter?
        </h2>
        <p className="text-lg mb-10 max-w-xl text-green-100">
          Join thousands of learners using QuizPick to master their subjects
          with AI-powered quizzes.
        </p>
        <Link
          to="/quiz"
          className="bg-white text-green-700 font-semibold px-10 py-4 rounded-full text-lg hover:bg-green-100 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Start Creating Quizzes
        </Link>
      </section>

      {/* === Footer === */}
      <footer className="bg-gray-100 py-8 text-center text-gray-500 text-sm w-full">
        © {new Date().getFullYear()} QuizPick · Built with 💚 using Gemini AI
      </footer>
    </div>
  );
}

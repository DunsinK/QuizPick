import { Link } from "react-router-dom";
import Logo from "../assets/LogoBG.png";

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      {/* === Hero Section === */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16">
        {/* Left Text */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Welcome to <span className="text-green-600">QuizPick</span>
          </h1>
          <p className="text-lg text-gray-600">
            Turn your study materials into interactive quizzes — powered by{" "}
            <span className="font-semibold text-green-700">Gemini AI</span>.
            QuizPick helps you learn faster by automatically generating smart,
            personalized quiz questions from your uploaded notes, PDFs, or
            topics.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/quiz"
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200"
            >
              Get Started
            </Link>
            <a
              href="#learn-more"
              className="text-green-700 font-medium hover:underline"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src={Logo}
            alt="QuizPick logo"
            className="w-64 md:w-80 object-contain drop-shadow-lg"
          />
        </div>
      </section>

      {/* === Features Section === */}
      <section id="learn-more" className="bg-gray-50 py-20 px-10 md:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          How QuizPick Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 text-green-600">
              1. Upload or Input Text
            </h3>
            <p className="text-gray-600">
              Start by uploading your notes, slides, or typing a topic. QuizPick
              reads and understands your material.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 text-green-600">
              2. Gemini-Powered Generation
            </h3>
            <p className="text-gray-600">
              Using Google’s Gemini AI, QuizPick creates personalized quizzes
              that match your learning style and knowledge level.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3 text-green-600">
              3. Learn & Track Progress
            </h3>
            <p className="text-gray-600">
              Take the quizzes, review your results, and track improvement over
              time — all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="py-20 bg-green-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to make studying smarter?
        </h2>
        <p className="text-lg mb-8 text-green-100">
          Join students using QuizPick to study faster with AI-powered quizzes.
        </p>
        <Link
          to="/quiz"
          className="bg-white text-green-700 font-semibold px-8 py-3 rounded-lg hover:bg-green-100 transition-all duration-200"
        >
          Start Creating Quizzes
        </Link>
      </section>

      {/* === Footer === */}
      <footer className="bg-gray-100 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} QuizPick · Built with 💚 using Gemini AI
      </footer>
    </div>
  );
}

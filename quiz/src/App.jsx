import FileUpload from "./components/FileUpload";
import QuizDisplay from "./components/QuizDisplay";
import Results from "./components/Results";
import {Routes, Route, Link} from 'react-router-dom'
import LandingPage from "./pages/LandingPage"
import QuizPage from "./pages/QuizPage"
import Logo from "./assets/LogoBG.png"
function Navbar() {
  return (
    <nav className="w-full h-16 bg-green-600 flex items-center justify-between px-8 shadow-md">
      {/* Left: Logo + Brand */}
      <Link to="/" className="flex items-center space-x-3">
        <span className="text-2xl font-semibold text-white">QuizPick</span>
      </Link>

      {/* Right: Links */}
      <div className="flex space-x-6 text-white font-medium">
        <Link
          to="/quiz"
          className="hover:text-green-200 transition-colors duration-200"
        >
          Quiz
        </Link>
        <Link
          to="/autograder"
          className="hover:text-green-200 transition-colors duration-200"
        >
          Autograder
        </Link>
      </div>
    </nav>
  );
}



export default function App() {
 

   
    return (
        <>
        <Navbar/>
        <Routes >
            <Route path="/" element={<LandingPage/>} />
            <Route path="/quiz" element={<QuizPage/>} />
        </Routes>
        </>
      );
    
  
}

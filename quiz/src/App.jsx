import FileUpload from "./components/FileUpload";
import QuizDisplay from "./components/QuizDisplay";
import Results from "./components/Results";
import {Routes, Route, Link} from 'react-router-dom'
import LandingPage from "./pages/LandingPage"
import QuizPage from "./pages/QuizPage"
import Logo from "./assets/LogoBG.png"
function Navbar() {
  return (
    <div className="w-full flex items-center justify-between px-12 py-4 bg-green-600">
      {/* Left Links */}
      <div className="flex space-x-6">
        <Link to="/" className="bg-green-700 hover:bg-green-500 text-white text-lg font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-md">
          <button className="bg-[#00a85a]"> Home </button>
        </Link>

        <Link to="/about" className="bg-green-700 hover:bg-green-500 text-white text-lg font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-md">
          <button className="bg-[#007a40]"> About </button>
        </Link>
      </div>

      {/* Center Logo */}
      <div className="flex justify-center items-center">
        <img src={Logo} alt="Quiz Pick logo" width = "500" height = "300"
          className="px-5 object-contain" // smaller logo, no border
        />
      </div>

      {/* Right Links */}
      <div className="flex space-x-6">
        <Link
          to="/link3"
          className="bg-green-700 hover:bg-green-500 text-white text-lg font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-md"
        >
          Link 3
        </Link>
        <Link
          to="/link4"
          className="bg-green-700 hover:bg-green-500 text-white text-lg font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-md"
        >
          Link 4
        </Link>
      </div>
    </div>
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

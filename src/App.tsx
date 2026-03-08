import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import { aboutData } from "./data/aboutData";



function App() {
  return (
    <Router>
      <div className="min-h-screen w-full text-white overflow-x-hidden m-0 p-0">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About data={aboutData}/>} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

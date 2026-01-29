import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import Methodolgy from "./pages/Methodolgy";
import TryForFree from "./pages/TryForFree";
import Footer from "./components/Footer";
import Results from "./pages/Results";

function App() {
  return (
    <Router>
      <div className="bg-[#050201] min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/methodology" element={<Methodolgy />} />
          <Route path="/tryforfree" element={<TryForFree />} />
          <Route path="/results" element={<Results />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

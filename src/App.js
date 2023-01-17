import React from "react";
import './App.css';
import Hero from "./components/Hero"
import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer";
import { Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import CV from "./components/pages/CV";
// import Hero from "./components/Hero";


function App() {
  return (
    <>
      <Hero />
      <div className='page'>
        < Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/CV" element={<CV />} />
          </Routes>
        </div>
      </div>
      < Footer />
    </>
  );
}

export default App;

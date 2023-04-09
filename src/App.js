import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import CV from "./components/pages/CV";

// import ScrollButton from "./components/ScrollButton/Scroll";

function App() {
  return (
    <>
      < Navbar />
      <div className='page'>
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
      {/* <ScrollButton /> */}
      < Footer />
    </>
  );
}

export default App;

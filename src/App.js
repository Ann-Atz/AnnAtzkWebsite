import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Educare from "./components/pages/projects/Educare";
import HastaLaFiesta from "./components/pages/projects/HastaLaFiesta";
import Metavar from "./components/pages/projects/Metavar";
import DBforWomen from "./components/pages/projects/DBforWomen";
import SkinGuide from "./components/pages/projects/SkinGuide";
import Typografie from "./components/pages/projects/Typografie";

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
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Educare" element={<Educare />} />
            <Route path="/HastaLaFiesta" element={<HastaLaFiesta />} />
            <Route path="/Metavar" element={<Metavar />} />
            <Route path="/DBforWomen" element={<DBforWomen />} />
            <Route path="/SkinGuide" element={<SkinGuide />} />
            <Route path="/Typografie" element={<Typografie />} />
          </Routes>
        </div>
      </div>
      {/* <ScrollButton /> */}
      < Footer />
    </>
  );
}

export default App;

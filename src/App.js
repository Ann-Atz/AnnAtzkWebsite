import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Educare from "./components/pages/Educare";
import Portfolio from "./components/pages/Portfolio";
import HastaLaFiesta from "./components/pages/HastaLaFiesta";
import Metavar from "./components/pages/Metavar";
import DBforWomen from "./components/pages/DBforWomen";
import SkinGuide from "./components/pages/SkinGuide";
import Typografie from "./components/pages/Typografie";

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

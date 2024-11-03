import React from 'react';
import './About.css';
import ann from '../img/HeroPic1.png';
import resume from '../pages/Lebenslauf_Atzkern_Ann-Marie.pdf';
import portfolio from '../pages/Portfolio_Projects_Atzkern_Ann-Marie.pdf';
import { FiExternalLink } from 'react-icons/fi';

function About() {
  const downloadFile = (filePath) => {
    const win = window.open(filePath, '_blank');
    win.focus();
  };

  return (
    <div className='about'>
      <img src={ann} className="hero-pic" alt="img" />
      <div className='about-text'>
      <div className='about-text-text'>
      <div class="title4">Über mich</div>
      Hey, ich bin Ann-Marie! Ich studiere Informatik und Design in München und bin ein großer Fan von allem, was kreativ ist. In meiner Freizeit sammle ich exotische Pflanzen und liebe es, Filme zu analysieren. Mein Ziel ist es, Designs zu kreieren, die sowohl schön als auch benutzerfreundlich sind. Ich freue mich, euch in meiner kreativen Welt willkommen zu heißen!      <br></br>Wenn du Interesse an meiner Arbeit hast oder Fragen hast, schreib mir gerne!
      </div>
      <div className="btnDiv">
          <div className="btnDiv">
            <button id="downloadBtn" onClick={() => downloadFile(resume)} value="download">
              Lebenslauf <FiExternalLink className="icon-fi" />
            </button>
          </div>
          <div className="btnDiv">
            <button id="downloadBtn" onClick={() => downloadFile(portfolio)} value="download">
              Portfolio <FiExternalLink className="icon-fi" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

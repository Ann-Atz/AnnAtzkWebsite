import React from 'react';
import './About.css';
import ann from '../img/HeroPic.jpg';
import resume from '../pages/Lebenslauf.pdf';

function About() {
  const downloadTxtFile = () => {
    const win = window.open(resume, '_blank');
    win.focus();
  };

  return (
    <div className='about'>
      <img src={ann} className="hero-pic" alt="img" />
      <div className='about-text'>
        Ich bin ein leidenschaftlicher Problemlöser und ein Gestalter im Bereich der UI/UX- und Frontend-Entwicklung.
        Durch mein Studium habe ich bereits umfangreiche Erfahrungen und Kenntnisse in diesem Bereich gesammelt und bin
        bestrebt, mein Wissen ständig zu erweitern und zu vertiefen.
        <div className="btnDiv">
          <button id="downloadBtn" onClick={downloadTxtFile} value="download">Download CV</button>
        </div>
      </div>
    </div>
  );
}

export default About;

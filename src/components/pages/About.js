import React from 'react';
import './About.css';
import ann from '../img/HeroPic.jpg';
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
        Mein Name ist Ann-Marie und ich bin ein leidenschaftlicher Problemlöser und Gestalter im Bereich der UI/UX- und Frontend-Entwicklung.
        Durch meine langjährige Aufgewachsenheit in Asien und meine Liebe zur Digitalkunst habe ich einen einzigartigen kulturellen Hintergrund und eine künstlerische Ader, die ich auch in meine Arbeit einfließen lasse.
        Aktuell studiere ich Informatik und Design im 4. Semester und sammle dabei umfangreiche Erfahrungen und Kenntnisse. Ich bin stets bestrebt, mein Wissen zu erweitern und zu vertiefen, um durch meine Arbeit einen positiven Beitrag zur Verbesserung der digitalen Welt zu leisten.
        <br></br>Wenn du Interesse an meiner Arbeit hast oder Fragen hast, schreib mir gerne!
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

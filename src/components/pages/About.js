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
      Mein Name ist Ann-Marie und ich bin ein leidenschaftlicher Problemlöser und Gestalter im Bereich der UI/UX- und Frontend-Entwicklung. 
      Durch meine langjährige Aufgewachsenheit in Asien und meine Liebe zur Digitalkunst habe ich einen einzigartigen kulturellen Hintergrund und eine künstlerische Ader, die ich auch in meine Arbeit einfließen lasse. 
      Aktuell studiere ich Informatik und Design im 4. Semester und sammle dabei umfangreiche Erfahrungen und Kenntnisse. Ich bin stets bestrebt, mein Wissen zu erweitern und zu vertiefen, um durch meine Arbeit einen positiven Beitrag zur Verbesserung der digitalen Welt zu leisten. 
      <br></br>Wenn Sie Interesse an meiner Arbeit haben oder Fragen haben, zögern Sie nicht, mich zu kontaktieren. Ich freue mich darauf, von Ihnen zu hören!<div className="btnDiv">
          <button id="downloadBtn" onClick={downloadTxtFile} value="download">Lebenslauf</button>
        </div>
      </div>
    </div>
  );
}

export default About;
// Hey, ich bin Ann-Marie und meine Leidenschaft ist das Lösen von Problemen und das Gestalten von Benutzeroberflächen im Bereich UI/UX- und Frontend-Entwicklung. 
// <br></br>Durch mein Studium habe ich bereits umfangreiche Erfahrungen und Kenntnisse in diesem Bereich gesammelt und ich bin stets bestrebt, mein Wissen weiter auszubauen und zu vertiefen. Ich arbeite mit großer Begeisterung und Hingabe daran, die Bedürfnisse und Anforderungen meiner Kunden in innovative und benutzerfreundliche Lösungen zu übersetzen. 
// <br></br>Mein Ziel ist es, durch meine Arbeit einen positiven Beitrag zur Verbesserung der digitalen Welt zu leisten. Wenn Sie Fragen haben oder einfach nur Hallo sagen möchten, zögern Sie nicht, mich zu kontaktieren!

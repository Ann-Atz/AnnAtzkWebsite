import React from 'react'
import './About.css'
import ann from '../img/HeroPic.jpg'
// import { Link } from 'react-router-dom'

function About() {
  const downloadTxtFile = () => {
    console.log("download logic goes here")
  }
  <div className="btnDiv">
    <button id="downloadBtn" onClick={downloadTxtFile} value="download">Download</button>
  </div>
  return (
    <div className='about'>
      <img src={ann} className="hero-pic" alt="img" />
      <div className='about-text'>
        Hallo, mein Name ist Ann-Marie und ich liebe es, Probleme zu lösen und kreativ zu sein.
        Genauer gesagt interessiere ich mich für den Bereich UI/UX und Frontend Entwicklung.
        Ich konnte bereits in meinem Studium erste Erfahrungen und Berührungspunkte mit Projekten
        sammeln und beschäftige mich außerdem in meiner Freizeit gern mit Kunst und Design.
        <br></br>
        <br></br>
        Ich bin ein leidenschaftlicher Problemlöser und ein Gestalter im Bereich der UI/UX- und Frontend-
        Entwicklung. Durch mein Studium habe ich bereits umfangreiche Erfahrungen und Kenntnisse in diesem
        Bereich gesammelt und bin bestrebt, mein Wissen ständig zu erweitern und zu vertiefen.
      <div className="btnDiv">
        <button id="downloadBtn" value="download">Download CV</button>
      </div></div>
      
    </div >
  )
}

export default About
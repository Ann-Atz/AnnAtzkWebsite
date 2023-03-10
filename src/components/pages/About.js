import React from 'react'
import './About.css'
import ann from '../img/HeroPic.jpg'

function About()  {
  return (
    <div className='about'>
    <img src={ann} className="hero-pic" alt="img" />
      <div className='about-text'>
        Hallo, mein Name ist Ann und ich liebe es, Probleme zu lösen und kreativ zu sein.
        Genauer gesagt interessiere ich mich für den Bereich UI/UX und Frontend Entwicklung. 
        Ich konnte bereits in meinem Studium erste Erfahrungen und Berührungspunkte mit Projekten 
        sammeln und beschäftige mich außerdem in meiner Freizeit gern mit Kunst und Design.
        <br></br>
        <br></br>
        Ich bin ein leidenschaftlicher Problemlöser und ein Gestalter im Bereich der UI/UX- und Frontend-
        Entwicklung. Durch mein Studium habe ich bereits umfangreiche Erfahrungen und Kenntnisse in diesem 
        Bereich gesammelt und bin bestrebt, mein Wissen ständig zu erweitern und zu vertiefen.
      </div>
      </div>
  )
}

export default About
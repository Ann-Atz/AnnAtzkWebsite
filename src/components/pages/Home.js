import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'

import educare from '../projects/Educare.png'
import hasta from '../projects/Hasta.png'
import meta from '../projects/Metavar.png'
import db from '../projects/DB.png'
import skinguide from '../projects/Skinguide.png'
import typo from '../projects/Typografie.png'

function Home() {
  return (
<div class="code-block">
<hometitle>Featured Work</hometitle>
<homeundertitle>Projekten aus Hochschule München</homeundertitle>
      <div className="project">
        <div className='project-box'>
          <img src={educare} className="project-image" alt="img" />
          <div className='project-text'>
            <t1>Educare</t1>
            <t2>3 Semester</t2>
            <t3>Die App für Flüchtlingseltern, um die Kommunikation mit Lehrern zu erleichtern und die Bildungschancen ihrer Kinder zu verbessern.</t3>
            <t4>Tools: VS Code, Github, Figma</t4>
            <form className="home">
              <button type="submit"><Link className='link' to="/Educare">View Project</Link></button>
            </form>
          </div></div>

        <div className='project-box'>
          <img src={hasta} className="project-image" alt="img" />
          <div className='project-text'>
            <t1>Hasta La Fiesta</t1>
            <t2>2 Semester</t2>
            <t3>Die perfekte Webseite zur Partyplanung! Wir helfen Gastgebern und Gästen, Essen, Musik und Spiele einfacher zu organisieren.</t3>
            <t4>Tools: Gitlab, Figma, Scrum</t4>
            <form className="home">
              <button type="submit"><Link className='link' to="/HastaLaFiesta">View Project</Link></button>
            </form>
          </div></div>

        <div className='project-box'>
          <img src={meta} className="project-image" alt="img" />
          <div className='project-text'>
            <t1>Metavar</t1>
            <t2>2 Semester</t2>
            <t3>Entdecke mit METAVAR die gigantische Welt der Charaktere. Gestalte noch heute deinen eigenen Avatar. Sei individuell, sei du selbst!</t3>
            <t4>Tools: Unreal Engine 5, Github</t4>
            <form className="home">
              <button type="submit"><Link className='link' to="/Metavar">View Project</Link></button>
            </form>
          </div></div>

        <div className='project-box'>
          <img src={db} className="project-image" alt="img" />
          <div className='project-text'>
            <t1>DB for Women</t1>
            <t2>2 Semester</t2>
            <t3>Für mehr Sicherheit in der Bahn. Die App für Frauen bietet sichere Wege und schnelle Notfallvorbereitung.</t3>
            <t4>Tools: Figma, Design Thinking</t4>
            <form className="home">
              <button type="submit"><Link className='link' to="/DBforWOmen">View Project</Link></button>
            </form>
          </div></div>

        <div className='project-box'>
          <img src={skinguide} className="project-image" alt="img" />
          <div className='project-text'>
            <t1>SkinGuide</t1>
            <t2>1 Semester</t2>
            <t3>Dein persönlicher Sprachassistent, der dir hilft, deinen Hauttyp zu bestimmen und die richtigen Pflegemittel zu finden.</t3>
            <t4>Tools: Amazon Developer, VoiceFlow</t4>
            <form className="home">
              <button type="submit"><Link className='link' to="/SkinGuide">View Project</Link></button>
            </form>
          </div></div>

        <div className='project-box'>
          <img src={typo} className="project-image" alt="img" />
          <div className='project-text'>
            <t1>Typografie</t1>
            <t2>1 Semester</t2>
            <t3>Typografische Poster zum Thema soziale Angst, um zu zeigen, wie belastend soziale Ängste sein können.</t3>
            <t4>Tools: Photoshop</t4>
            <form className="home">
              <button type="submit"><Link className='link' to="/Typografie">View Project</Link></button>
            </form>
          </div></div>

      </div>
    </div>
  )
}


export default Home;
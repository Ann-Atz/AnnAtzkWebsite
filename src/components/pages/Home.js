import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'

import educare from '../pages/thumbnails/Educare.png'
import hasta from '../pages/thumbnails/Hasta.png'
import meta from '../pages/thumbnails/Metavar.png'
import db from '../pages/thumbnails/DB.png'
import skinguide from '../pages/thumbnails/Skinguide.png'
import typo from '../pages/thumbnails/Typografie.png'
import Ellipse from '../img/Ellipse.png'

function Home() {
  return (
    <>
      <div className='hero_container'>
        <div className='title1'>Hi, I'm</div>
        <div className='title2'>Ann-Marie<br />Atzkern</div>
        <div className='title3'>Student of IT and Design</div>
        <div className='ellipse-title'>
          <img src={Ellipse} className="ellipse_png" alt="img" />
        </div>
      </div>


      <div className='welcome'>
        <div className='title4'>Hallo!</div>
        <div className='Welcome_Text'>Willkommen auf meinem Portfolio. Dies soll Ihnen einen kleinen Einblick in meine Fähigkeiten und Projekte geben. Mein Name ist Ann und ich liebe es, Probleme zu lösen und kreativ zu sein. Genauer gesagt interessiere ich mich für den Bereich UI/UX und Frontend Entwicklung. Ich konnte bereits in meinem Studium erste Erfahrungen und Berührungspunkte mit Projekten sammeln und beschäftige mich außerdem in meiner Freizeit gern mit Kunst und Design. Durch mein Studium habe ich bereits umfangreiche Erfahrungen und Kenntnisse im UX/UI Bereich gesammelt und bin bestrebt, mein Wissen ständig zu erweitern und zu vertiefen.
        </div>
      </div>    


      <div className='ellipse-welcome'>
        <img src={Ellipse} className="ellipse-png" alt="img" />
      </div>

      <div className="code-block">
        <div className='title-container'>
          <div className="hometitle">Featured Work</div>
          <h3 className="homeundertitle">Projekte für Hochschule München</h3></div>
        <div className="project">
          <div className='project-box'>
            <img src={educare} className="project-image" alt="img" />
            <div className='project-text'>
              <t1>Educare</t1>
              <t2>3. Semester</t2>
              <t3>Eine App für Flüchtlingseltern, um den Austausch mit Lehrern zu erleichtern und so die Bildungschancen ihrer Kinder zu erhöhen.</t3>
              <t4>Tools: VS Code, Github, Figma</t4>
              <form className="home">
                <button type="submit"><Link className='link' to="/Educare">View Project</Link></button>
              </form>
            </div></div>

          <div className='project-box'>
            <img src={hasta} className="project-image" alt="img" />
            <div className='project-text'>
              <t1>Hasta La Fiesta</t1>
              <t2>2. Semester</t2>
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
              <t2>2. Semester</t2>
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
              <t2>2. Semester</t2>
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
              <t2>1. Semester</t2>
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
              <t2>1. Semester</t2>
              <t3>Typografische Poster zum Thema soziale Angst, um zu zeigen, wie belastend soziale Ängste sein können.</t3>
              <t4>Tools: Photoshop</t4>
              <form className="home">
                <button type="submit"><Link className='link' to="/Typografie">View Project</Link></button>
              </form>
            </div></div>

        </div>
      </div>

      <div class='wrapper'>
        <div class='container'>

        </div>
      </div>



      <skills>
        <div class="skills_section">
          <div class="skills_head">
            <h2>My <span>Skills</span></h2>
            <p>Meine Kenntnisse in Design und Informatik</p>
          </div>

          <div class="skills_main">
            <div class="skill_bar">
              <div class="info">
                <p>Photoshop</p>
              </div>
              <div class="bar">
                <span class="html"></span>
              </div>
            </div>
            <div class="skill_bar">
              <div class="info">
                <p>Java</p>
              </div>
              <div class="bar">
                <span class="css"></span>
              </div>
            </div>
            <div class="skill_bar">
              <div class="info">
                <p>After Effects</p>
              </div>
              <div class="bar">
                <span class="sass"></span>
              </div>
            </div>
            <div class="skill_bar">
              <div class="info">
                <p>CSS</p>
              </div>
              <div class="bar">
                <span class="js"></span>
              </div>
            </div>
            <div class="skill_bar">
              <div class="info">
                <p>Figma</p>
              </div>
              <div class="bar">
                <span class="react"></span>
              </div>
            </div>
            <div class="skill_bar">
              <div class="info">
                <p>Python</p>
              </div>
              <div class="bar">
                <span class="node"></span>
              </div>
            </div>
            <div class="skill_bar">
              <div class="info">
                <p>Illustrator</p>
              </div>
              <div class="bar">
                <span class="express"></span>
              </div>
            </div>
            <div class="skill_bar">
              <div class="info">
                <p>React</p>
              </div>
              <div class="bar">
                <span class="mongo"></span>
              </div>
            </div>
          </div>
        </div>

      </skills>
    </>
  )
}


export default Home;
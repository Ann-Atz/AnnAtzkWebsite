import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'

import educare from '../pages/thumbnails/Educare.png'
import hasta from '../pages/thumbnails/Hasta.png'
import meta from '../pages/thumbnails/Metavar.png'
import db from '../pages/thumbnails/DB.png'
import skinguide from '../pages/thumbnails/Skinguide.png'
import typo from '../pages/thumbnails/Typografie.png'
import Ellipse from '../img/Ellipse.png'
import "./Home.css"

function Home() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight && bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='hero_container'>
        <div className='title1'>Hi, I'm</div>
        <div className='title2'>Ann-Marie<br />Atzkern
        </div>
        <div className='title3'>Student of IT and Design</div>
        {/* <div className='container'>
          <div className='ellipse-title'>
          <img src={Ellipse} className="ellipse-png" alt="img" />
          </div>
          </div> */}
      </div>

      <div className='welcome'>
        <div className='title4'>Hallo!</div>
        <div className='Welcome_Text'>Willkommen auf meinem Portfolio. Dies soll Ihnen einen kleinen Einblick in meine Fähigkeiten und Projekte geben. Mein Name ist Ann-Marie und ich bin ein leidenschaftlicher Problemlöser und ein Gestalter im Bereich der UI/UX- und Frontend-Entwicklung. Durch mein Studium habe ich bereits umfangreiche Erfahrungen und Kenntnisse in diesem Bereich gesammelt und bin bestrebt, mein Wissen ständig zu erweitern und zu vertiefen.
        </div>
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
              {/* <form className="home">
                <button type="submit"><Link className='link' to="/Educare">View Project</Link></button>
              </form> */}
              <form className="home" action="https://educaregruppef.onrender.com/" target="_blank">
                <button type="submit">View Project</button>
              </form>
            </div></div>

          <div className='project-box'>
            <img src={hasta} className="project-image" alt="img" />
            <div className='project-text'>
              <t1>Hasta La Fiesta</t1>
              <t2>2. Semester</t2>
              <t3>Die perfekte Webseite zur Partyplanung! Wir helfen Gastgebern und Gästen, Essen, Musik und Spiele einfacher zu organisieren.</t3>
              <t4>Tools: Gitlab, Figma, Scrum</t4>
              {/* <form className="home">
                <button type="submit"><Link className='link' to="/HastaLaFiesta">View Project</Link></button>
              </form> */}
              <form className="home" action="https://www.figma.com/proto/1lj1ArHfLqTqzSPqbxgJF9/Hasta-Link?page-id=0%3A1&node-id=1-1857&viewport=722%2C549%2C0.06&scaling=min-zoom&starting-point-node-id=1%3A1857&show-proto-sidebar=1" target="_blank">
                <button type="submit">View Project</button>
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
      <skills>
        <div ref={ref}>
          {isVisible ? (
            <div className="skills_section">
              <div className="skills_head">
                <div className='hometitle'>My Skills</div>
                <p>Meine Kenntnisse in Design und Informatik</p>
              </div>
              <div className="skills_main">
                <div className="skill_bar">
                  <div className="info">
                    <p>Photoshop</p>
                  </div>
                  <div class="bar">
                    <span class="html"></span>
                  </div>
                </div>
                <div class="skill_bar">
                  <div class="info">
                    <p>JavaScript</p>
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
                    <span className="mongo"></span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            'Ann-Marie'
          )}
        </div>
      </skills>
    </>
  )
}


export default Home;
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

import educare from '../pages/thumbnails/Educare.png'
import hasta from '../pages/thumbnails/Hasta.png'
import meta from '../pages/thumbnails/Metavar.png'
import db from '../pages/thumbnails/DB.png'
import skinguide from '../pages/thumbnails/Skinguide.png'
// import typo from '../pages/thumbnails/Typografie.png'
import generative from '../pages/thumbnails/Generative.png'
import "./Home.css"

const Reveal = ({ children }) => {
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

  const controls = isVisible
    ? {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    }
    : {
      opacity: 0,
      y: 75,
    };

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div ref={ref} initial={{ opacity: 0, y: 75 }} animate={controls} style={{ position: 'relative' }}>
        {children}
      </motion.div>
    </div>
  );
};

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
      <motion.div className="hero_container"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1.1 } }}>
        <div className="title1">Hi, I'm </div>
        <div className="title2">
          Ann-Marie
          <br />
          Atzkern
        </div>
        <div className="title3">Student of IT and Design</div>
      </motion.div>

      <Reveal>
        <div className='welcome'>
          <div className='title4'>Willkommen!</div>
          <div className='Welcome_Text'>Schön, dass du auf meiner Webseite gelandet bist. Hier bekommst du einen kleinen Einblick in meine Fähigkeiten und Projekte. Mein Name ist Ann-Marie und ich bin begeistert von der Problemlösung und dem Design im Bereich UI/UX und Frontend-Entwicklung. Mit meiner Kombination aus Kreativität und technischem Know-how entwickle ich innovative Lösungen für ansprechendes Design und nahtlose Benutzererfahrungen. 
          </div>
        </div>
      </Reveal>

      <div className="code-block">
        <Reveal>
          <div className='title-container'>
            <div className="hometitle">Featured Work</div>
            <h3 className="homeundertitle">Hier findet ihr einen Einblick in meine Projekte</h3></div>
        </Reveal>
        <div className="project">
          <Reveal>
            <div className='project-box'>
              <img src={db} className="project-image" alt="img" />
              <div className='project-text'>
                <t1>DB for Women</t1>
                {/* <t2>2. Semester</t2> */}
                <t3>Für mehr Sicherheit in der Bahn. Die App für Frauen bietet sichere Wege und schnelle Notfallvorbereitung.</t3>
                <t4>Tools: Figma, Miro, Design Thinking</t4>
                <form className="home">
                  <button type="submit"><Link className='link' to="/DBforWOmen">View Project</Link></button>
                </form>
              </div></div>
          </Reveal>

          <Reveal>
            <div className='project-box'>
              <img src={generative} className="project-image" alt="img" />
              <div className='project-text'>
                <t1>Generatives Design</t1>
                <t3>Visualisierung der Lichtverschmutzung und ihre Auswirkungen auf das Verhalten von Vögeln in generative Poster und Animationen.</t3>
                <t4>Tools: After Effects, Photoshop, p5.js</t4>
                <form className="home">
                  <button type="submit"><Link className='link' to="/Generative">View Project</Link></button>
                </form>
              </div></div>
          </Reveal>
          <Reveal>
            <div className='project-box'>
              <img src={educare} className="project-image" alt="img" />
              <div className='project-text'>
                <t1>Educare</t1>
                <t3>Ein Webservice für geflüchtete Eltern, um den Austausch mit Lehrern zu erleichtern und so die Bildungschancen ihrer Kinder zu erhöhen.</t3>
                <t4>Tools: React Native, Github, Figma</t4>
                <form className="home">
                  <button type="submit"><Link className='link' to="/Educare">View Project</Link></button>
                </form>
                {/* <form className="home" action="https://educaregruppef.onrender.com/" target="_blank">
      <button type="submit">View Project</button>
    </form> */}
              </div></div>
          </Reveal>

          <Reveal>
            <div className='project-box'>
              <img src={meta} className="project-image" alt="img" />
              <div className='project-text'>
                <t1>Metavar</t1>
                {/* <t2>2. Semester</t2> */}
                <t3>Entdecke mit METAVAR die gigantische Welt der Charaktere. Gestalte noch heute deinen eigenen Avatar. Sei individuell, sei du selbst!</t3>
                <t4>Tools: Unreal Engine 5, Github</t4>
                <form className="home">
                  <button type="submit"><Link className='link' to="/Metavar">View Project</Link></button>
                </form>
              </div></div>
          </Reveal>

          <Reveal>
            <div className='project-box'>
              <img src={skinguide} className="project-image" alt="img" />
              <div className='project-text'>
                <t1>SkinGuide</t1>
                {/* <t2>1. Semester</t2> */}
                <t3>Dein persönlicher Sprachassistent, der dir hilft, deinen Hauttyp zu bestimmen und die richtigen Pflegemittel zu finden.</t3>
                <t4>Tools: Amazon Developer, VoiceFlow</t4>
                <form className="home" action="https://github.com/ID-Start-Winter21/SkinGuide/wiki" target="_blank">
                  <button type="submit">View Github</button>
                </form>
              </div></div>
          </Reveal>

          <Reveal>
            <div className='project-box'>
              <img src={hasta} className="project-image" alt="img" />
              <div className='project-text'>
                <t1>Hasta La Fiesta</t1>
                <t3>Die perfekte Webseite zur Partyplanung! Wir helfen Gastgebern und Gästen, Essen, Musik und Spiele einfacher zu organisieren.</t3>
                <t4>Tools: Gitlab, Figma, Scrum</t4>
                {/* <form className="home">
      <button type="submit"><Link className='link' to="/HastaLaFiesta">View Project</Link></button>
    </form> */}
                <form className="home" action="https://www.figma.com/proto/1lj1ArHfLqTqzSPqbxgJF9/Hasta-Link?page-id=0%3A1&node-id=1-1857&viewport=722%2C549%2C0.06&scaling=min-zoom&starting-point-node-id=1%3A1857&show-proto-sidebar=1" target="_blank">
                  <button type="submit">View Figma</button>
                </form>
              </div></div>
          </Reveal>

          {/* <div className='project-box'>
      <img src={typo} className="project-image" alt="img" />
      <div className='project-text'>
        <t1>Typografie</t1>
        <t3>Typografische Poster zum Thema soziale Angst, um zu zeigen, wie belastend soziale Ängste sein können.</t3>
        <t4>Tools: Photoshop</t4>
        <form className="home">
          <button type="submit"><Link className='link' to="/Typografie">View Project</Link></button>
        </form>
      </div></div>
  </div> */}
        </div>
      </div>
      <Reveal>
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
      </Reveal>

    </>
  )
}



export default Home;
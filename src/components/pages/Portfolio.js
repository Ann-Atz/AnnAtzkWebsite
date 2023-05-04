import React, { useEffect } from 'react';
import './Portfolio.css'

import clown from '../img/Clown.jpg'
import jazz from '../img/JazzyColors.jpg'
import kimono from '../img/KimonoCat.jpg'
import king from '../img/King.jpg'
import whelmed from '../img/Overwhelmed.jpg'
import peach from '../img/PeachBoy.jpg'
import sandman from '../img/Sandman.jpg'
import portrait from '../img/WCPortrait1.jpg'
import viking from '../img/WCPortrait2.jpg'
import birb from '../img/BirbGirl.png'
import bouqet from '../img/bouqet.png'
import chinese from '../img/ChineseBlue.jpg'
import clancy from '../img/Clancy.png'
import diji from '../img/diji.jpg'
import line from '../img/line.png'
import nam from '../img/nam.png'
import promise from '../img/promise.png'
import reddress from '../img/RedDress.jpg'
import sickle from '../img/sickle.png'


function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <portfolio>
      <div className='portfolio'>
        <div className='port-text'>
          <t1>Digital and Watercolor Artworks</t1>
          <t3>Ich bin ein großer Fan von Aquarell- und digitaler Kunst. Ich habe mit traditioneller Kunst angefangen, mich aber schnell in die unendlichen Möglichkeiten der digitalen Kunst verliebt. Meine Arbeit reicht von realistisch bis cartoonhaft und ich erkunde immer neue Stile und Techniken.</t3>
        </div>
        <div className='portfolio-column'>
          <img src={diji} className="gallery-image" alt="img" />
          <img src={line} className="gallery-image" alt="img" />
          <img src={nam} className="gallery-image" alt="img" />
          <img src={promise} className="gallery-image" alt="img" />
        </div>

        <div className='portfolio-column'>
          <img src={reddress} className="gallery-image" alt="img" />
          <img src={clown} className="gallery-image" alt="img" />
          <img src={jazz} className="gallery-image" alt="img" />
          <img src={kimono} className="gallery-image" alt="img" />
          <img src={king} className="gallery-image" alt="img" />
        </div>

        <div className='portfolio-column'>
          <img src={whelmed} className="gallery-image" alt="img" />
          <img src={peach} className="gallery-image" alt="img" />
          <img src={sandman} className="gallery-image" alt="img" />
          <img src={portrait} className="gallery-image" alt="img" />
          <img src={viking} className="gallery-image" alt="img" />
        </div>

        <div className='portfolio-column'>
          <img src={birb} className="gallery-image" alt="img" />
          <img src={bouqet} className="gallery-image" alt="img" />
          <img src={chinese} className="gallery-image" alt="img" />
          <img src={clancy} className="gallery-image" alt="img" />
          <img src={sickle} className="gallery-image" alt="img" />

        </div>

      </div>
    </portfolio>

  )
}

export default Portfolio




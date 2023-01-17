import React from 'react'
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


window.addEventListener("load", function () {
  document.getElementById('image').style.backgroundColor = 'transparent';
});


function Portfolio() {
  return (
    <>
      <div className='portfolio'>
      <img className="gallery-image" src={diji} alt="example" id="image" style={{ backgroundColor: "gray" }}/>
      <img className="gallery-image" src={line} alt="example" id="image" style={{ backgroundColor: "gray" }}/>
      <img className="gallery-image" src={nam} alt="example" id="image" style={{ backgroundColor: "gray" }}/>
      <img className="gallery-image" src={promise} alt="example" id="image" style={{ backgroundColor: "gray" }}/>
      <img className="gallery-image" src={reddress} alt="example" id="image" style={{ backgroundColor: "gray" }}/>
      <img className="gallery-image" src={sickle} alt="example" id="image" style={{ backgroundColor: "gray" }}/>
      <img className="gallery-image" src={clown} alt="example" id="image" style={{ backgroundColor: "gray" }}/>
      <img className="gallery-image" src={jazz} alt="example" id="image" style={{ backgroundColor: "gray" }}/>
      <img className="gallery-image" src={kimono} alt="example" id="image" style={{ backgroundColor: "gray" }}/>
      <img className="gallery-image" src={king} alt="example" id="image" style={{ backgroundColor: "gray" }}/>
      <img className="gallery-image" src={whelmed} alt="example" id="image" style={{ backgroundColor: "gray" }}/>
      <img className="gallery-image" src={peach} alt="example" id="image" style={{ backgroundColor: "gray" }}/>
      <img className="gallery-image" src={sandman} alt="example" id="image" style={{ backgroundColor: "gray" }}/>
      <img className="gallery-image" src={portrait} alt="example" id="image" style={{ backgroundColor: "gray" }}/>
      <img className="gallery-image" src={viking} alt="example" id="image" style={{ backgroundColor: "gray" }}/>
      <img className="gallery-image" src={birb} alt="example" id="image" style={{ backgroundColor: "gray" }}/>
      <img className="gallery-image" src={bouqet} alt="example" id="image" style={{ backgroundColor: "gray" }}/>
      <img className="gallery-image" src={chinese} alt="example" id="image" style={{ backgroundColor: "gray" }}/>
      <img className="gallery-image" src={clancy} alt="example" id="image" style={{ backgroundColor: "gray" }}/>
      <img className="gallery-image" src={birb} alt="example" id="image" style={{ backgroundColor: "gray" }}/>
      </div>
    </>

  )
}

export default Portfolio


/* <img src={diji} className="gallery-image" alt="img" />
<img src={line} className="gallery-image" alt="img" />
<img src={nam} className="gallery-image" alt="img" />
<img src={promise} className="gallery-image" alt="img" />
<img src={reddress} className="gallery-image" alt="img" />
<img src={sickle} className="gallery-image" alt="img" />
<img src={clown} className="gallery-image" alt="img" />
<img src={jazz} className="gallery-image" alt="img" />
<img src={kimono} className="gallery-image" alt="img" />
<img src={king} className="gallery-image" alt="img" />
<img src={whelmed} className="gallery-image" alt="img" />
<img src={peach} className="gallery-image" alt="img" />
<img src={sandman} className="gallery-image" alt="img" />
<img src={portrait} className="gallery-image" alt="img" />
<img src={viking} className="gallery-image" alt="img" />
<img src={birb} className="gallery-image" alt="img" />
<img src={bouqet} className="gallery-image" alt="img" />
<img src={chinese} className="gallery-image" alt="img" />
<img src={clancy} className="gallery-image" alt="img" /> */


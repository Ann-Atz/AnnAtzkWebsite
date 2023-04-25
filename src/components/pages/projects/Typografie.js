import React from 'react';
import './Typografie.css';
import official from './typo/typoanimation.mp4';
import news from './typo/news.mp4';
import spiral from './typo/spiral.mp4';
import tictoc from './typo/tictoc.mp4';
import typo1 from './typo/typo1.jpg';
import typo2 from './typo/typo2.jpg';
import typo3 from './typo/typo3.jpg';
import Ellipse from './typo/typo-ellipse.png'

function Typografie() {
  return (
    <>
      <div className='video'>
        <video className="video-play" autoPlay loop muted>
          <source src={official} type="video/mp4" />
        </video>
        <div className='typo-text'>
        <t1>Semesterarbeit: <br></br>Offen und Geschlossen</t1>
        <t3>Die Arbeit beschäftigt sich mit Menschen, die Schwierigkeiten haben, sich anderen Menschen gegenüber zu öffnen und sich verschlossen halten.</t3>
        </div>
        </div>
      <div className='typo-row'>
        <img src={typo1} className="typo-image" alt="typo-img" />
        <img src={typo2} className="typo-image" alt="typo-img" />
        <img src={typo3} className="typo-image" alt="typo-img" />
      </div>
      <div className='animations2'>
        <div className='typo-info'></div>
        <div className='animation-row'>
          <video className="video-play" autoPlay loop muted>
            <source src={news} type="video/mp4" />
          </video>
          <video className="video-play" autoPlay loop muted>
            <source src={spiral} type="video/mp4" />
          </video>
          <video className="video-play" autoPlay loop muted>
            <source src={tictoc} type="video/mp4" />
          </video>
        </div></div>
      </>

  );
}

export default Typografie;

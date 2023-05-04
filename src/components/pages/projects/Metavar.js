import React, { useEffect } from 'react';
import './Metavar.css';
import metavar from './pic_metavar/Metavar.png'
import userjourney from './pic_metavar/userjourney.png'
import fpa from './pic_metavar/fpa.jpg'
import fpcm from './pic_metavar/fpcm.jpg'

function Metavar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='meta'>
        <img src={metavar} className='meta-pic' alt='img' />
        <t3>Entdecke mit METAVAR die gigantische Welt der Charaktere. <br></br>
          Gestalte noch heute deinen eigenen Avatar.<br></br>
          Sei individuell, sei du selbst!</t3>
      </div>
      <div className='meta-info'>
        <div className='meta-info1'>
          <t1>Das Avatar Design Studio</t1>
          <t3>Die Möglichkeit einen Avatar nach den eigenen Vorlieben zu gestalten ist nur begrenzt möglich. Mit METAVAR hast du die Möglichkeit anhand von vielfältigen Auswahlmöglichkeiten deinen Avatar ganz nach deinen Belieben zu Designen. </t3>
          <t3>Sei kreativ bei der Auswahl deines Aussehens und entfalte deine Fantasie</t3>
        </div>
        <div className='meta-info2'>
          <t1>Fühlst du dich wohl in deinem Körper?</t1>
          <t3>In der echten Welt sind wir von unserem Körper eingeschrankt, aber in der Metaverse befreien wir dich von diesem Hindernis. Mit METAVAR kommst du weg von den langweiligen und immer gleich aussehenden Charakteren im Metaverse und hast somit mehr Spaß in der Nutzung. Nie wieder müsst ihr Stunden verbringen in einem Salon, bei uns im Design Studio kannst du innerhalb von Sekunden alle mögliche Haarfarben ausprobieren</t3>
        </div>
      </div>

      <div className='meta-def'>
        <t1>Was ist das metaverse</t1>
        <t3>Das Metaverse ist ein virtuelles 3D-Universum, das von einer gemeinsamen digitalen Plattform aus betreten und von Benutzern aus der ganzen Welt erlebt werden kann. Es ist im Grunde genommen eine erweiterte Version des Internets, die es den Benutzern ermöglicht, in einer virtuellen Welt zu interagieren, zu kommunizieren und zu agieren, ähnlich wie in der physischen Welt.
          <br></br>Im Metaverse können Benutzer digitale Avatare erstellen, die ihre Präsenz in der virtuellen Welt repräsentieren. Diese Avatare können dann mit anderen Avataren interagieren, digitale Objekte erstellen und verkaufen, Spiele spielen, Veranstaltungen besuchen und vieles mehr.</t3>
      </div>
      <div className='meta-process'>
        <metpics>
          <t1>Prozess: Wie wir unsere Idee entwickelt haben</t1>
          <img src={fpa} className='process-pic' alt='img' />
          <img src={fpcm} className='process-pic' alt='img' />
          <img src={userjourney} className='process-pic' alt='img' />
        </metpics>
      </div>

    </>
  );
}

export default Metavar;

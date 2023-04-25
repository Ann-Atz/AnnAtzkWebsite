import React, { useEffect } from 'react';
import './SkinGuide.css';

function SkinGuide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='sorry-text'>
        Diese Seite ist noch in Arbeit und wird bald fertiggestellt.<br></br> Schau bald wieder vorbei! :)
      </div>
      <space></space>
    </>
  );
}

export default SkinGuide;

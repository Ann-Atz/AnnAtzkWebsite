import React, { useEffect } from 'react';
import './Metavar.css';

function Metavar() {
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

export default Metavar;

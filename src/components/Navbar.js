import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click] = useState(false);
  const [button, setButton] = useState(true);


  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            {/* <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'>
                Ann-Marie Atzkern
              </Link>
            </li> */}

          <li className='nav-item'>
            <Link
              to='/'
              className='nav-links'>
              Home
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/About'
              className='nav-links'>
              About
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/Portfolio'
              className='nav-links'>
              Portfolio
            </Link>
          </li>

          <li>
            <Link
              to='/Contact'
              className='nav-links'>
              Contact
            </Link>
          </li>

        </ul>
        {/* {button && <Button buttonStyle='btn--outline'>Download CV</Button>} */}
      </nav>
    </>
  );
}

export default Navbar;
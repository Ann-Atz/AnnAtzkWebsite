// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import * as GoIcons from "react-icons/go";
import * as CgIcons from "react-icons/cg";
import { MenuPageContent } from "./pages/NavbarContent";

const style = { color: "black", fontSize: "1em" }

function Navbar() {
  // const [click] = useState(false);
  // const [button, setButton] = useState(true);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
 
  
  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);

  return (
    <>
      <div className='menupage'>
        <Link to='#' className='menu-bars'>
          <GoIcons.GoThreeBars onClick={showSidebar} style={style} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='menupage-toggle'>
            <Link to='#' className='menu-bars'>
              <CgIcons.CgClose style={style} />
            </Link>
          </li>
          {MenuPageContent.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
      export default Navbar;



import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';

const NavContainer = (props) => {
  const location = useLocation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const getClassName = () => {
    let className = "";

    if (!visible) {
      className += "scrolling";
    }

    if (prevScrollPos === 0) {
      className += " top";
    }

    return className;
  };

  return (
    <nav className={`nav-container ${getClassName()}`}>
      <div className="nav">
        <Link to="/" className="nav-logo">PORTFOLIO</Link>
        <ul className="nav-links">
          <li>
          <Link to="/" className={`home ${location.pathname === "/" ? "active" : ""}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className={`About ${location.pathname === "/About" ? "active" : ""}`}>
              About
            </Link>
          </li>
          <li>
            <Link to="/Portfolio" className={`Portfolio ${location.pathname === "/Portfolio" ? "active" : ""}`}>
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
      <hr className="horizontal-line" />
    </nav>
  );
};

export default NavContainer;

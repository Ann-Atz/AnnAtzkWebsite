import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';

const Navbar = (props) => {
  const location = useLocation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="Navbar">
        <Link to="/" className="nav-logo">ANN-MARIE</Link>
        <div className={`nav-items ${isOpen && "open"}`}>
          <Link to="/" className={`home ${location.pathname === "/" ? "active" : ""}`}>
            Home
          </Link>
          <Link to="/Portfolio" className={`Portfolio ${location.pathname === "/Portfolio" ? "active" : ""}`}>
            Artworks
          </Link>
          <Link to="/About" className={`About ${location.pathname === "/About" ? "active" : ""}`}>
            About
          </Link>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
      <hr className="horizontal-line" />
    </nav>
  );
};

export default Navbar;


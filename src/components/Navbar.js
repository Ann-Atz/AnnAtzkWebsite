import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import './Navbar.css';

const HorizontalLine = styled.hr`
  border: none;
  height: 1px;
  background-color: white;
  margin: auto;
  margin-bottom: 2%;
  width: 97%;
  top: 70%;
  `;

const NavContainer = styled.nav`
  height: 50px;
  font-family: 'Satoshi', sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: all 0.5s ease-in-out;

  &.scrolling {
    transform: translateY(-100%);
  }

  &.top {
    transform: translateY(0);
  }
`;

const Nav = styled.div`
  font-family: 'Satoshi', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1%;
  height: 45px;
  color: white;
  padding: 0 20px;
`;

const NavLogo = styled(Link)`
  font-family: 'Satoshi', sans-serif;
  color: white;
  font-size: 1.5rem;
  // font-size: 3vmin;  ALTERNATIVE FONT SIZE CHANGE!!  
  text-decoration: none;
`;

const NavLinks = styled.ul`
  font-family: 'Satoshi', sans-serif;
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const NavLink = styled(Link)`
  font-family: 'Satoshi', sans-serif;
  color: white;
  text-decoration: none;
  margin-left: 20px;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    box-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;
    
  }

  &:focus {
    color: white;
    font-weight: bold;
  }

`;

const PeekabooNavbar = () => {
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
    <NavContainer className={getClassName()}>
      <Nav>
        <NavLogo to="/">PORTFOLIO</NavLogo>
        <NavLinks>
          <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </NavLink>
          <NavLink to="/About" className={location.pathname === "/About" ? "active" : ""}>
            About
          </NavLink>
          <NavLink to="/Portfolio" className={location.pathname === "/Portfolio" ? "active" : ""}>
            Portfolio
          </NavLink>
        </NavLinks>
      </Nav>
      <HorizontalLine />
    </NavContainer>
  );
};

export default PeekabooNavbar;

import React, { useState } from "react";
import { GiChargingBull } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  height: 10vh;
  display: flex;
  padding: 0 2rem;
  width: 100%;
  background: transparent;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  position: ${({ click }) => (click ? "fixed" : "absolute")};
  top: 0;
`;

const NavLink = styled(Link)`
  color: #fffffa;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 15px 30px;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid #4a6fa5;
    color: #4a6fa5;
  }

  @media screen and (max-width: 504px) {
    height: 20%;
    padding: 0px 30px;
  }
  @media screen and (min-width: 1500px) {
    font-size: 2rem;
  }
`;

const Burger = styled.div`
  display: none;
  color: white;

  @media screen and (max-width: 504px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5rem;

  @media screen and (max-width: 504px) {
    position: fixed;
    flex-direction: column;
    top: 0;
    left: ${({ click }) => (click ? 0 : "-100%")};
    background: #000103;
    justify-content: center;
    text-align: center;
    height: 100vh;
    width: 100%;
    margin: 0;
    transition: all 150ms ease-in-out;
    z-index: -1;
  }
`;

const Logo = styled(Link)`
  color: #fffffa;
  cursor: pointer;
`;

const NavbarComp = () => {
  const [click, setClick] = useState(false);

  const ChangeClick = () => {
    setClick(!click);
  };
  return (
    <>
      <Nav click={click}>
        <Logo to="/">
          <GiChargingBull size={40} />
        </Logo>
        <NavMenu click={click}>
          <NavLink to="/" exact activeStyle>
            Inicio
          </NavLink>
          <NavLink to="/about" activeStyle>
            Información
          </NavLink>
          <NavLink to="/art" activeStyle>
            Galería
          </NavLink>
        </NavMenu>
        <Burger onClick={() => ChangeClick()}>
          {click ? <FaTimes size={25} /> : <FaBars size={25} />}
        </Burger>
      </Nav>
    </>
  );
};

export default NavbarComp;

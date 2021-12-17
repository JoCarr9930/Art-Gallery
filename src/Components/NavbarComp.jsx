import React from "react";
import { GiChargingBull } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  height: 10vh;
  display: flex;
  background: rgba(0, 0, 0, 0.9);
  width: 100%;
  justify-content: flex-start;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;
const NavLink = styled(Link)`
  color: #8F8389;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  margin-right: 5rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: white;
  }
`;

const Burger = styled(FaBars)`
  display: none;
  color: white;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.div`
  color: white;
`;

const NavbarComp = () => {
  return (
    <>
      <Nav>
          <NavLink to="/">
            <Logo>
              <GiChargingBull size={40} />
            </Logo>
          </NavLink>
          <Burger />
          <NavMenu>
            <NavLink to="/about" activeStyle>
              About
            </NavLink>
            <NavLink to="/art" activeStyle>
              Art
            </NavLink>
          </NavMenu>
      </Nav>
    </>
  );
};

export default NavbarComp;

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
  color: white;
`;

const Info = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Button = styled.button`
  border: 1px solid white;
  border-radius: 3px;
  padding: 10px 20px;
  background: none;
  color: white;
  font-size: 1.5rem;
  font-weight: 400;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-5px);
    border: 1px solid white;
  }
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  filter: brightness(0.5);
`;

const HomeSection = () => {
  return (
    <>
      <Container>
        <Img src="https://scontent.fgdl5-1.fna.fbcdn.net/v/t1.6435-9/53061944_2524312214309950_7419359981532610560_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Sk8Aixhy8X4AX-k-F_M&_nc_ht=scontent.fgdl5-1.fna&oh=00_AT-sOZzbwic3BCOFXNjctTdVLTIApbpcSbZL0ftgVlZssQ&oe=61EABD00" />
        <Info>
          <NavLink to="/Art-Gallery/about" activeStyle>
            <Button>Contáctame</Button>
          </NavLink>
        </Info>
      </Container>
      <Container>
        <Img src="https://scontent.fgdl5-1.fna.fbcdn.net/v/t31.18172-8/20543731_1586010551473459_2041133174688418614_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=YgHwQRczN0YAX94d0zI&_nc_ht=scontent.fgdl5-1.fna&oh=00_AT8c0x_1x588L-YUFtymfAov4BX4sDhag-vZ_I5FLPWnVw&oe=61EC29F0" />
        <Info>
          <NavLink to="/Art-Gallery/art" activeStyle>
            <Button>Ver arte</Button>
          </NavLink>
        </Info>
      </Container>
    </>
  );
};

export default HomeSection;

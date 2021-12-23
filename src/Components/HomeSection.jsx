import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
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
        <Img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" />
        <Info>
          <NavLink to="/about" activeStyle>
            <Button>Contáctame</Button>
          </NavLink>
        </Info>
      </Container>
      <Container>
        <Img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" />
        <Info>
        <NavLink to="/art" activeStyle>
            <Button>Ver arte</Button>
          </NavLink>
        </Info>
      </Container>
    </>
  );
};

export default HomeSection;

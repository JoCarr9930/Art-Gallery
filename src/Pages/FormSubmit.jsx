import React from "react";
import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MessageContainer = styled.div`
  height: 50%;
  width: 50%;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-right: 1rem;
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 2rem;
  }
`;

const Section = styled.div`
  display: flex;
`;

const FormSubmit = () => {
  return (
    <Container>
      <MessageContainer>
        <Section>
          <h1>Presentada</h1>
          <AiOutlineCheck size={30} style={{ color: "green" }} />
        </Section>
        <p>Mensaje enviado correctamente</p>
        <Link to="/Art-Gallery/">
          <button>Regrecar</button>
        </Link>
      </MessageContainer>
    </Container>
  );
};

export default FormSubmit;

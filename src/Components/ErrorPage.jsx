import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 5rem;
    margin-bottom: 2rem;
  }
`;

const Button = styled.button`
  background: rgba(74, 111, 165, 1);
  padding: 10px 15px;
  margin: 3rem;
`;

const ErrorPage = () => {
  return (
    <Container>
      <Content>
        <h1>404</h1>
        <p>Página no encontrada</p>
        <Link to={"/Art-Gallery/"}>
          <Button>Pagina de inicio</Button>
        </Link>
      </Content>
    </Container>
  );
};

export default ErrorPage;

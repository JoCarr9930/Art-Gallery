import React from "react";
import styled from "styled-components";
import "./ContactForm.css";

const FormContainer = styled.div`
  height: 50vh;
  background: black;
  padding: 20px 0;
`;

const Contact = styled.h1`
  color: #fffffa;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100%;
  padding: 20px 0;
`;

const ContactForm = () => {
  return (
    <FormContainer>
      <Contact>Contact Me</Contact>
      <Form>
        <label htmlFor="name"></label>
        <input type="text" placeholder="nombre" className="name" id="name" />
        <label htmlFor="email"></label>
        <input
          type="text"
          placeholder="Correo Electrónico"
          className="email"
          id="email"
        />
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="Descripción"
        ></textarea>
        <button>Entregar</button>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;

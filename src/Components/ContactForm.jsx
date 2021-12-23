import React from "react";
import styled from "styled-components";
import "./ContactForm.css";

const FormContainer = styled.div`
  height: 50vh;
  background: #FFFFFA;
  padding: 20px 0;
`;

const Contact = styled.h1`
    color: #000103;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Footer = styled.footer`
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
      <Footer>
        <label htmlFor="name"></label>
        <input type="text" placeholder="nombre" className="name" id="name" />
        <label htmlFor="email"></label>
        <input type="text" placeholder="email" className="email" id="email" />
        <textarea name="description" id="description" cols="30" rows="10" placeholder="Description"></textarea>
        <button>Submit</button>
      </Footer>
    </FormContainer>
  );
};

export default ContactForm;

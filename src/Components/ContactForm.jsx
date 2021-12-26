import React from "react";
import styled from "styled-components";
import "./ContactForm.css";

const FormContainer = styled.div`
  height: 90vh;
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
      <Contact>Contáctame</Contact>
      <Form
        action="https://formsubmit.co/f23ee78251f79b7415b1120a8f9453c7
        "
        method="POST"
      >
        {/* HoneyPot */}
        <input type="text" name="_honey" style={{ display: "none" }} />

        {/* Disable Captcha */}
        <input type="hidden" name="_captcha" value="false" />

        <input
          type="hidden"
          name="_next"
          value="http://localhost:3000/submit"
        />

        <input type="text" placeholder="nombre" name="Nombre" required />
        <input
          type="email"
          placeholder="correo@ejemplo.com"
          name="Correo&nbsp;Electrónico"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.com"
          required
        />
        <input type="tel" name="Telephono" placeholder="telephono (opcional)" />
        <textarea
          name="Descripción"
          cols="30"
          rows="10"
          placeholder="descripción"
          required
        ></textarea>
        <button>Entregar</button>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;

import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const FooterContainer = styled.div`
  display: flex;
  height: 8vh;
  background: #000103;
  position: relative;
  padding: 30px;
  justify-content: space-between;
  z-index: 9999;

  @media screen and (max-width: 380px) {
    justify-content: center;
    align-items: center;
  }
`;

const Name = styled.div`
  display: flex;
  color: #8e8e8e;
  align-items: center;
  flex: 1;
  font-weight: 100;
  font-size: 0.8rem;

  @media screen and (max-width: 380px) {
    display: none;
  }
`;

const Media = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.a`
  color: #fffffa;
  cursor: pointer;
  padding: 0 10px;

  &:hover {
    transform: scale(1.2);
    color: #4a6fa5;
  }

  @media screen and (max-width: 380px) {
    font-size: 2rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Name>Mauricio Carrizalez &copy;</Name>

      <Media>
        <Icon
          href="https://www.facebook.com/mauricio.carrizalez.7"
          target="_blank"
        >
          <BsFacebook size={23} />
        </Icon>
        <Icon
          href="https://instagram.com/mauriciocarrizalezvidrialez"
          target="_blank"
        >
          <BsInstagram size={23} />
        </Icon>
      </Media>
    </FooterContainer>
  );
};

export default Footer;

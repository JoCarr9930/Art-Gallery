import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";

const FooterContainer = styled.div`
  display: flex;
  height: 8vh;
  background: #000103;
  position: relative;
  padding: 30px;
  justify-content: space-between;
  z-index: 999;

  @media screen and (max-width: 380px){
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

  @media screen and (max-width: 380px){
    display:none;
  }
`;

const Media = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.a`
  color: #FFFFFA;
  cursor: pointer;
  padding: 0 10px;

  &:hover {
    transform: scale(1.2);
    color: #4A6FA5;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Name>Mauricio Carrizales &copy;</Name>

      <Media>
        <Icon href="https://www.facebook.com">
          <AiOutlineFacebook size={20} />
        </Icon>
        <Icon>
          <AiOutlineInstagram size={20} />
        </Icon>
      </Media>
    </FooterContainer>
  );
};

export default Footer;

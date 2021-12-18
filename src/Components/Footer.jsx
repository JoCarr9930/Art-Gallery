import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";

const FooterContainer = styled.div`
  display: flex;
  height: 5vh;
  background: rgba(0, 0, 0, 0.9);
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
`

const Name = styled.div`
    display: flex;
    color: #8F8389;
    align-items: center;
    flex: 1;
    font-weight: 100;
    font-size: 0.8rem;
`

const Media = styled.div`
    display: flex;
    align-items: center;
`

const Icon = styled.a`
    color: white;
    cursor: pointer;

    &:hover{
        transform: scale(1.2);
    }
`

const Footer = () => {
  return (
    <FooterContainer>
      <Name>Mauricio Carrizales &copy;</Name>
      <Media>
        <Icon href="https://www.facebook.com"><AiOutlineFacebook size={20}/></Icon>
      </Media>
    </FooterContainer>
  );
};

export default Footer;

import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  height: 100vh;
  background: orange;

  @media screen and (max-width: 504px) {
    flex-direction: column;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFA;
  height: 100%;
  width: 50%;
  padding: 30px;
  color: #000103;

  @media screen and (max-width: 504px) {
    width: 100%;
  }
`;

const Title = styled.h1`
    margin-bottom: 2rem;
    font-weight: 400;
    font-size: 2rem;
    color: #4A6FA5;
`;

const Description = styled.p`
    text-align: center;
    line-height: 1.5rem;
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 50%;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  filter: brightness(0.5);
`;

const AboutSection = () => {
  return (
    <AboutContainer>
      <Info>
        <Title>About Me</Title>
        <Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus corporis laboriosam accusantium atque quia excepturi recusandae! Quibusdam laborum veniam totam veritatis nesciunt perferendis quia commodi tenetur. Nisi consequatur ut sed non, cumque fugit at adipisci, ducimus cupiditate recusandae officia rem in sit nostrum ad nam. Perspiciatis perferendis incidunt veniam suscipit!
        </Description>
      </Info>
      <ImgContainer></ImgContainer>
    </AboutContainer>
  );
};

export default AboutSection;

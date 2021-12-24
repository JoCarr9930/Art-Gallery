import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  height: 100%;
  width: 75%;
  /* padding: 30px; */
  color: white;
  position: absolute;
  z-index: 1;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  font-weight: 400;
  font-size: 2.3rem;
  letter-spacing: 3px;
  color: white;
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5rem;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: black center no-repeat
    url("https://scontent.fgdl5-1.fna.fbcdn.net/v/t1.6435-9/35646002_2006263199448190_2890756965825249280_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=-xYeCbodFGcAX_Oxx6V&_nc_ht=scontent.fgdl5-1.fna&oh=00_AT-7bwaNuNhIV4pG58_ynUdOE8fgiM-GIWNj6Jcdi2Jy2A&oe=61EAADAE");
  filter: brightness(0.6);
`;

const AboutSection = () => {
  return (
    <AboutContainer>
      <Info>
        <Title>About Me</Title>
        <Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
          corporis laboriosam accusantium atque quia excepturi recusandae!
          Quibusdam laborum veniam totam veritatis nesciunt perferendis quia
          commodi tenetur. Nisi consequatur ut sed non, cumque fugit at
          adipisci, ducimus cupiditate recusandae officia rem in sit nostrum ad
          nam. Perspiciatis perferendis incidunt veniam suscipit!
        </Description>
      </Info>
      <ImgContainer></ImgContainer>
    </AboutContainer>
  );
};

export default AboutSection;

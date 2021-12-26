import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import styled from "styled-components";
import galleryPhotos from "../Photos/PhotoData";

const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-itemms: center;
  height: 100%;
  background: black;
`;

const GalleryItem = styled.div`
  display: flex;
  justify-content: center;
  min-height: 250px;
  width: 100%;
`;

const ImgContainer = styled.div`
  margin: 3rem 20px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Img = styled.img`
  width: 33.33%;
  padding: 20px;
  object-fit: cover;

  @media screen and (max-width: 780px) {
    width: 50%;
  }
  @media screen and (max-width: 504px) {
    width: 100%;
  }
`;

const BackToTop = styled.div`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  align-items: right;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  bottom: 8vh;
  right: 0;
  margin-right: 10px;
  color: rgba(255, 255, 255, 0.5);
  z-index: 9999;
  cursor: pointer;
  transition: all 150ms ease-in-out;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
  p{
      font-size: 0.9rem;
      margin-top: 0.5rem;
    }
`;

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <GalleryContainer>
      <GalleryItem>
        <ImgContainer>
          {galleryPhotos.map((obj, index) => {
            return <Img src={obj.source} />;
          })}
        </ImgContainer>
      </GalleryItem>
      <BackToTop isVisible={isVisible} onClick={scrollToTop}>
        <FaArrowCircleUp size={25} />
        <p>Top</p>
      </BackToTop>
    </GalleryContainer>
  );
};

export default Gallery;

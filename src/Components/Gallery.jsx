import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
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
  width: 25%;
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
  align-items: center;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  bottom: 25vh;
  right: 0;
  margin-right: 10px;
  color: rgba(255, 255, 255, 0.5);
  z-index: 9999;
  cursor: pointer;
  transition: all 150ms ease-in-out;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
  p {
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
`;

const PageContainer = styled.div`
  height: 25vh;
  width: 100%;
  background: black;
  display: flex;
  justiify-content: center;
  align-items: center;
`;
const PageContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  position: absolute;
`;

const LeftArrow = styled.div`
  margin-left: 1.9rem;
`;

const RightArrow = styled.div`
  margin-left: 1.9rem;
`;

const Icon = styled.div`
  color: white;
  margin-top: 2px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Gallery = () => {
  //Create the option to scroll to the top to save time
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

  // Iterate through gallery
  const [arrStart, setArrStart] = useState(0);
  const [page, setPage] = useState(1);
  const pageLimit = Math.ceil(galleryPhotos.length / 8);

  const nextPage = () => {
    if (page !== pageLimit) {
      setPage(page + 1);
      setArrStart(arrStart + 9);
    } else {
      return null;
    }
  };
  const prevPage = () => {
    if (page !== 1) {
      setPage(page - 1);
      setArrStart(arrStart - 9);
    } else {
      return null;
    }
  };

  return (
    <>
      <GalleryContainer>
        <GalleryItem>
          <ImgContainer>
            {galleryPhotos.slice(arrStart, arrStart + 8).map((obj, index) => {
              return <Img src={obj.source} key={obj.id} />;
            })}
          </ImgContainer>
        </GalleryItem>
      </GalleryContainer>
      <PageContainer>
        <PageContent>
          <Icon onClick={scrollToTop}>
            {page === 1 ? (
              <LeftArrow />
            ) : (
              <BiLeftArrowAlt size={30} onClick={prevPage} />
            )}
          </Icon>
          <h2>{page}</h2>
          <Icon onClick={scrollToTop}>
            {page === pageLimit ? (
              <RightArrow />
            ) : (
              <BiRightArrowAlt size={30} onClick={nextPage} />
            )}
          </Icon>
          <BackToTop isVisible={isVisible} onClick={scrollToTop}>
            <FaArrowCircleUp size={25} />
            <p>Top</p>
          </BackToTop>
        </PageContent>
      </PageContainer>
    </>
  );
};

export default Gallery;

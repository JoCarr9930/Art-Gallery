import React from "react";
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

const Gallery = () => {
  return (
    <GalleryContainer>
      <GalleryItem>
        <ImgContainer>
          {galleryPhotos.map((obj, index) => {
            return <Img src={obj.source} />;
          })}
        </ImgContainer>
      </GalleryItem>
    </GalleryContainer>
  );
};

export default Gallery;

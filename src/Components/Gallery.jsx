import React from 'react'
import styled from 'styled-components'

const GalleryContainer = styled.div`
    height: 100vh;
    background: #FFFFFA;
`

const GalleryItem = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 25%;
    height: 25%;
    background: teal;
    margin: 1rem;;
`

const Gallery = () => {
    return (
        <GalleryContainer>
            <GalleryItem/>
        </GalleryContainer>
    )
}

export default Gallery

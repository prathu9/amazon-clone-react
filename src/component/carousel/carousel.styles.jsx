import styled, { keyframes } from 'styled-components';

export const CarouselContainerPS = styled.div`
    width:100%;
    height:250px;
    position:relative;    
`;

export const CarouselPS =styled.div`
    position:absolute;
    width:100%;
    height:500px;
`;


export const CarouselImgPS = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    background-image: ${({ image }) => `url(${image})`};
    background-repeat:no-repeat;
    background-size: 100% auto;
    z-index:-5;

    @media screen and (max-width:640px){
        background-size:200% 70%;
        background-position:top center;
    }
`;

export const CarouselOverlayPS = styled.div`
    position: absolute;
    width:100%;
    height:100%;
    background-image: linear-gradient(to bottom, transparent,rgba(255,255,255,0.01), rgba(255,255,255,0.2), #fff);
    z-index:-1;
    @media screen and (max-width:640px){
        top:-120px;
    }
`;
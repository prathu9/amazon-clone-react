import styled from 'styled-components';


export const ProductCarouselListPS = styled.li`
    margin: 0 10px 0 0;
    max-width:340px;
    min-width:175px;
    height:275px;
    text-align:center;
    flex-direction:column;
    cursor: pointer;
    list-style-type:none;

    &:forVideo{
        width: 350px;
    }
`;

export const ProductcarouselImgContainerPS = styled.div`
    min-width:145px;
    flex-grow:1;
`;

export const ProductCarouselImgPS = styled.img`
/* width:306px; */
    max-width:270px;
    height:200px;
    object-fit:contain;
`;

export const ProductCarouselCaptionPS = styled.div`
    text-align:left;
`;

export const ProductCarouselVidListPS = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    position:relative;
    margin:0 20px 0 0;
    width:340px;
    height:249px;
    border-radius:10px;
    box-sizing:border-box;
    overflow:hidden;
    padding:0;
`;

export const ProductCarouselVidImgPS = styled.img`
    width:100%;
    height:75%;
    object-fit:cover;
    z-index:10px;
`;

export const ProductCarouselVidCaptionPS = styled.div`
    width:100%;
    height:25%;
    border:1px solid #000;
    outline:none;
    /* border-radius:0 0 8px 8px; */
    background-image:url(${props => props.imageUrl});
    background-position: 45% 110%;
    background-size: 100% 250%;
    background-repeat:no-repeat;
    filter:blur(9px);
    transform: scale(1.8);
    overflow:hidden;
    z-index:-1;
    background-color:#000;
`;

export const VideoOverlayPS = styled.div`

`; 

export const PlayBtnPS = styled.img`
    position:absolute;
    top:40%;
    left:50%;
    transform:translate(-50%, -50%);
    width:46px;
    height:46px;
`;

export const VideoCaptionPS = styled.div`

`;
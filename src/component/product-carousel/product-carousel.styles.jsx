import styled from 'styled-components';

export const ProductCarouselContainerPS =  styled.div`
    position:relative;
    padding:20px 40px;
`;

export const TitlePS = styled.h2`
    font-size:21px;
    font-weight:400;
    color:#444;
    margin:0;
    text-align:left;
`;

export const ProductCarouselWrapperPS = styled.div`
    position:relative;
    width:100%;
    min-height:275px;
    /* border: 1px solid #f00; */
    overflow:hidden;
`;

export const ProductCarouselPS = styled.ul`
    display:flex;
    position:absolute;
    left: ${props => props.pos}px;
    /* border: 1px solid #000; */
    margin-top:0;
    padding:10px 0;
    transition: all 0.8s ease-in-out;
    
    &:hover ~ span{
        opacity:1;
    }
`;

export const ProductCarouselControlPS = styled.span`
    width:45px;
    height:100px;
    background-color: rgba(255, 255, 255, 0.5);
    position:absolute;
    left:${(props) => (props.direction === "left"? "0" : "initial")};
    right: ${(props) => (props.direction === "right"? "0" : "initial")};
    top:50%;
    transform: translateY(-50%);
    border:1px solid #000;
    cursor: pointer;
    opacity:0;
    transition:opacity 1s;
    z-index:100;

    &:hover{
        opacity: 1;
    }
    
`;

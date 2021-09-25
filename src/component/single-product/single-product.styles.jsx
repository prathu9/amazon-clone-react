import styled from 'styled-components';

export const SingleProductContainerPS = styled.div`
    position: relative;
    width:306px;
    min-height:400px;
    background-color:#fff;
    padding:20px;
    margin-bottom:20px;
    z-index:100;

    @media screen and (max-width:640px){
        width:100%;
        min-width:320px;
        border-top:4px solid rgb(200,200,200);
    }
`;

export const SingleProductTitlePS = styled.h2`
    font-size:21px;
    text-align:left;
    margin:0 0 10px 0;
`;

export const SingleProductImageContainerPS = styled.div`
    width:auto;
    height:100%;
    position:relative;
    overflow:hidden;
`;

export const SingleProductImagePS = styled.img`
    position:absolute;
    left:-50px;
    max-width:320px;

    @media screen and (max-width:640px){
        left:0;
    }
`;
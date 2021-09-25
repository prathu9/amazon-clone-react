import styled from 'styled-components';

export const CollectionBoxContainerPS = styled.div`
    position: relative;
    max-width:306px;
    background-color:#fff;
    padding:20px;
    margin-bottom:15px;
    z-index:100;

    @media screen and (max-width:640px){
        max-width:100%;
        min-width:320px;
        padding:15px;
        margin-top:10px;
        border-top:4px solid rgb(200,200,200);
    }
`;

export const CollectionBoxTitlePS = styled.h2`
    font-size:21px;
    text-align:left;
    margin:0 0 15px 0;

    @media screen and (max-width:640px){
        font-weight:300;
    }
`;

export const CollectionBoxItemPS = styled.div`

`;

export const CollectionItemContainerPS = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    width:100%;
    height:275px;
    
    @media screen and (max-width:640px){
        justify-content:space-evenly;
        gap:20px;
        height:auto;
    }
`;

export const CollectionItemImgPS = styled.img`
    display:block;
    width:126px;
    height:116px;
    object-fit:cover;

    @media screen and (max-width:640px){
        width:8em;
        height:8em;
        object-fit:contain;
    }
`;

export const CollectionItemLabelPS = styled.div`
    max-width:126px;
    font-family: Arial, Helvetica, sans-serif;
    line-height:20px;
    font-size:12px;
    text-align:left;
    margin: 2px 0 10px 0;

    @media screen and (max-width:640px){
        font-size:15px;
        margin:10px 0 0 0;
        font-weight:300;
    }
`;
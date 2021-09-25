import styled from 'styled-components';

export const MultiProductContainerPS = styled.div`
    position: relative;
    width:100%;
    min-height:400px;
    background-color:#fff;
    padding:20px;
    margin-bottom:20px;
    z-index:100;
    border-top:4px solid rgb(200,200,200);
`;

export const MultiProductTitlePS = styled.h2`
    font-size:21px;
    text-align:left;
    margin:0 0 10px 0;
    font-weight:300;
`;

export const MultiProductImageContainerPS = styled.div`
    width:auto;
    height:100%;
    position:relative;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:4px;
`;

export const MultiProductImagePS = styled.img`
    width:5.5em;
    object-fit:contain;
`;
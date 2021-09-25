import styled from "styled-components";

export const  PageContentContainerPS = styled.div`
    width:100%;
    min-width:1000px;

    @media screen and (max-width:640px){
        min-width:320px;
    }
`

export const DeskPageContentPS = styled.div`
    @media screen and (max-width:640px){
        display:none;
    }
`;

export const MobPageContentPS = styled.div`

    .dealOfDay{
        width:100%;
        min-width:320px;
        height:400px;
        border:1px solid red;
    }

    @media screen and (min-width:640px){
        display:none;
    }
`;

export const AdBlockPS = styled.div`
    margin:0 auto 20px;

    @media screen and (max-width:640px){
        width:100%;
    }
`;

export const AdImgPS = styled.img`
    @media screen and (max-width:640px){
        width:100%;
    }
`;

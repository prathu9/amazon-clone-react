import styled from 'styled-components';

export const LocationLinkPS = styled.div`
    display:flex;
    color:#fff;
    margin:5px 2px 5px 0;
    padding:2px 9px 0;

    @media screen and (max-width:640px){
        width:100%;

        div:nth-child(2){
            width:85%;
        }

        div span:nth-child(4){
            display:inline-block;
            width:100%;
            text-overflow:ellipsis;
            overflow:hidden;
        }

        div span:nth-child(1),
        div span:nth-child(3){  
            display:none;
        }
    }
`;

export const LocationIconPS = styled.div`

`;

export const LocationTextPS = styled.div`
    white-space:nowrap;
    text-align:left;
    height:35px;
    font-size:14px;
    font-weight:800;
    font-family:Arial, Helvetica, sans-serif;

    span:nth-child(1){
        font-weight:100;
        font-size:12px;
    }

    span:nth-child(4){
        display:none;
    }
`;
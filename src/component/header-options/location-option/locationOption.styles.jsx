import styled from 'styled-components';

export const LocationLinkPS = styled.div`
    display:flex;
    color:#fff;
    max-width:180px;
    overflow:hidden;
    padding:2px 5px 0 2px;

    @media screen and (max-width:640px){
        width:100%;
        max-width:100%;
        height:100%;
    }
`;

export const LocationIconPS = styled.div`
    width:25px;
    height:50px;
    line-height:70px;
    img{
        width:100%;
    }

    @media screen and (max-width:640px){
        img{
            margin-bottom:5px;
        }
    }
`;

export const LocationTextPS = styled.div`
    white-space:nowrap;
    width:80%;
    text-align:left;
    height:35px;
    font-size:14px;
    font-weight:550;
    font-family:Arial, Helvetica, sans-serif;
    line-height:20px;
    display:flex;
    flex-direction:column;

    span{
        display:inline-block;
        height:18px;
    }

    span:nth-child(1){
        font-weight:50;
        font-size:12px;
    }

    span:nth-child(2){
        width:85%;
    }

    span:nth-child(3){
        display:none;
    }

    @media screen and (max-width:640px){
        height:100%;

        span:nth-child(1),
        span:nth-child(2){
            display:none;
        }

        span:nth-child(3){
            display:inline-block;
            width:100%;
            text-overflow:ellipsis;
            overflow:hidden;
            margin:12px 0 10px 5px;
        }
    }
`;
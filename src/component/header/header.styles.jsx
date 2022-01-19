import styled from 'styled-components';

import  {ReactComponent as AmazonLogoImg} from '../../asset/Amazon_logo.svg';

export const HeaderContainerPS = styled.div`
    width:100%;
    max-height: 60px;
    background-color: #000;
    display: flex;
    flex-direction: row;
    /* overflow:hidden; */
    padding:0px 10px 0px 10px;
    z-index:1000;

    @media screen and (max-width:640px){
        position:initial;
        flex-direction:column;
        min-height:200px;
        padding:0;        
        background-color: #232f3e;
    }
`;

export const OptionPS = styled.div`
    position:relative;
    border: 1px solid #000;
    font-family:Arial, Helvetica, sans-serif;
    display:flex;
    cursor:pointer;
    margin:8px 0;
    
    &:hover{
        border: 1px solid #fff;
    }

    &:nth-child(2){
        margin-left:12px;
    }
    
    &:nth-child(3){
        width:48%;
        font-size:14px;
        margin:0 10px;
        padding:6px 4px 10px 3px;
        border:none;
    }

    &:nth-child(4){
        padding:0;
    }

    &:nth-child(7) span:nth-child(2){
        color:#fff;
        line-height:60px;
        font-weight:800;
        font-size:14px;
        margin-right:8px;
    }

    @media screen and (max-width:640px){
        border:none;
        &:nth-child(1){
            height:48px;
            margin:0;
            display:flex;
            justify-content:space-between;

            svg{
                margin-top:15px;
                height:40px;
            }

            span{
                bottom:18px;
                right:-8px;
                padding:0;
            }

            div:nth-child(2){
                display:flex;
            }
        }

        &:nth-child(3){
            width:100%;
            margin:0;
            padding:2px 10px 5px;
        }

        &:nth-child(2){
            order:4;
            background-color:#37475A;
            margin-top:0;
        }

        &:nth-child(4),
        &:nth-child(5),
        &:nth-child(6),
        &:nth-child(7){
            display:none;
        }

    }
`;

export const HamburgerMenuIconPS = styled.div`
    width:48px;
    height:48px;

    .hamburgerIcon{
        width:48px;
        height:48px;
        padding-left:10px;
        margin:5px 0 5px 0 !important;
    }

    @media screen and (min-width:640px){
        display:none;
    }
`;

export const AmazonLogoContainerPS = styled.div`
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 1px 5px 0px 2px;
    padding:5px 5px 5px 2px;

    svg{
        width:6em;
        height:60px;
    }

`;

export const AmazonLogoPS = styled(AmazonLogoImg)`
    margin-top:25px;
    height:50px;
`;

export const LogoTextPS = styled.span`
    position:absolute;
    right:-12px;
    color:#fff;
    padding:8px 0;
    transform:translatex(-8px);
    font-size:1rem;
`;

export const MobSignInPS = styled.div`
    position:relative;
    display:none;
    justify-content:space-between;
    font-size:13px;
    color:#fff;
    line-height:80px;
    width:150px;

    span{
        display:inline-block;
    }
    
    span:nth-child(1){
        position:relative;
    }

    span:nth-child(1):after{
        content:"";
        position:absolute;
        top:80%;
        right:-25px;
        transform:translateY(-50%);
        width:10px;
        height:10px;
        border:2px solid #fff;
        border-radius:50%;
    }

    span:nth-child(1):before{
        content:"";
        position:absolute;
        bottom:-10px;
        right:-30px;
        transform:translateY(-25%);
        width:20px;
        height:8px;
        border:2px solid #fff;
        border-radius:5px 5px 2px 2px;
    }

    span:nth-child(2){
        width:62px;
        line-height:40px;
        //background-color:orange;

        svg{
            margin:5px;

            .heavy{
                color:red;
            }
        }
    }
`;

export const SubNavPS = styled.div`
    position:relative;
    display:flex;
    justify-content:flex-start;
    color:#fff;
    background-color: #232f3e;
    padding:12px 0 0;

    &:before{
        content:"Shop by";
        position:absolute;
        top:0;
        left:15px;
        font-size:11px;
    }

    @media screen and (min-width:640px){
        display:none;
    }
`;

export const SubNavOptionPS = styled.div`
    margin: 0 0 20px 15px;
`;




import styled from 'styled-components';
import  {ReactComponent as AmazonLogoImg} from '../../asset/Amazon_logo.svg';

export const FooterContainerPS = styled.div`
    background-color:#232F3E;
    width:100%;
    min-height: 400px;

    @media screen and (max-width:640px){
        min-height:auto;
    }
`;

export const FooterScrollTopPS = styled.button`
    width:100%;
    height:49px;
    color:#fff;
    background-color:#37475A;
    font-size:13px;
    padding:15px 0;
    cursor: pointer;
    border:none;

    &:hover{
        background-color:#455b75;
    }
`;

export const FooterNavContainerPS = styled.div`
    width:65%;
    display:flex;
    justify-content:space-between;
    margin:20px auto;

    @media screen and (max-width:640px){
        display:none;
    }
`;

export const FooterMobNavContainerPS = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    gap:10px;
    font-size:15px;
    color:#fff;
    padding:20px 20px 25px 20px;

    @media screen and (min-width:640px){
        display:none;
    }
`;

export const FooterMobNavPS = styled.div`
    display:flex;
    flex-direction:column;
    width:50%;

    span{
        width:100%;
        margin-bottom:20px;
        text-align:left;
    }
`;

export const FooterLangOptContainerPS = styled.div`
    width:100%;
    margin:10px auto;
    height:80px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-top:0.2px solid #455b75;

    @media screen and (max-width:640px){
        background-color:#000;
        margin-bottom:0;

        div:nth-child(2){
            border:none;
        }
    }
`; 

export const FooterAmazonLogoPS = styled(AmazonLogoImg)`
    display:inline-block;
    margin:35px 0 10px;
    font-size:12px;
    cursor: pointer;

    @media screen and (max-width:640px){
        display:none;
    }
`;

export const FooterLangOptionPS = styled.div`
    display:inline-block !important;
    color:#fff;
    border:1px solid #fff;
    border-radius:3px;
    padding:6px 18px;
    font-size:13px;
    cursor: pointer;
`;

export const FooterCountryOptPS = styled.div`
    width:100%;
    max-width:1000px;
    margin:0 auto;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;

    @media screen and (max-width:640px){
        display:none;
    }
`;

export const CountryOptPS = styled.span`
    display:inline-block;
    width:auto;
    color:#fff;
    font-size:12px;
    margin:5px 0 5px 0;
    padding:0 7.2px;
    word-wrap:nowrap;

    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const FooterOtherSectionPS = styled.div`
    width:100%;
    background-color:#000;
`;

export const FooterOtherOptPS = styled.div`
    width:100%;
    max-width:1000px;
    margin: 30px auto 0 auto;
    padding:30px 0;
    display:flex;
    flex-wrap:wrap;
    box-sizing:border-box;
    background-color:#000;

    @media screen and (max-width:640px){
        margin:0;
    }
    
`;

export const OtherOptContainerPS = styled.div`
    margin:20px 45px 0 0;
    flex-basis:150px;
    &:hover div{
            text-decoration:underline;
            cursor: pointer;
    }

    &:nth-child(5){
        padding-left:80px;
    }

    @media screen and (max-width:640px){
        display:none;
    }
`;

export const OtherOptPS = styled.div`
    color:#fff;
    font-size:10px;
    text-align:left;

    &:nth-child(1){
        font-weight: 800;
    }

    @media screen and (max-width:640px){
        width:100%;
        text-align:center;
        font-size:18px;
    }
`;

export const CopyrightAndOtherOptPS = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    color:#fff;
    padding:10px 0 30px 0;
    font-size:12px;

    span{
        margin-right:10px;

        &:hover{
            text-decoration:underline;
            cursor: pointer;
        }
    }

    @media screen and (max-width:640px){
        flex-wrap:wrap;

        span:last-child{
            width:100%;
            margin-top:10px;
            align-self:baseline;
        }
    }
`;

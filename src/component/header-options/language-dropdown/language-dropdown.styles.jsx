import styled from 'styled-components';

export const LanguageDropDownContainerPS = styled.div`
    width: 90%;
    margin:10px auto;
`; 

export const PrimaryLanguagePS = styled.div`
    width:100%;
    padding: 10px 0;
`;

export const OtherLanguagesPS = styled.div`
    font-size:0.8rem;
    padding:12px 0;
    border-top:1px solid rgba(0,0,0,0.1);
    border-bottom:1px solid rgba(0,0,0,0.1);
`;

export const RadioButtonContainerPS = styled.div`
    position:relative;
    width:100%;
    display:flex;
    jusdtify-content:flex-start;
    padding:4px 0;
    line-height:18px;
    cursor:pointer;

    &:after, &:before{
        content:"";
        position:absolute;
        top:40%;
        border-radius:100%;
        transform:translateY(-50%);
        z-index:7000;
    }

    &:before{
        width:15px;
        height:15px;
        border:1px solid #000;
        left:5px;
    }

    &:after{
        display:none;
        width:8px;
        height:8px;
        background-color:orange;
        left:9px;
    }

    &:hover:after{
        display:block;
    }
`;

export const LabelPS = styled.label`
    font-size:12px;
    height:20px;
    padding-left:10px;
    cursor:pointer;

    &:hover{
        color:orange;
        text-decoration:underline;
    }
`;

export const RadioButtonPS = styled.input`
    visibility:hidden;
`;

export const CurrentCountryPS = styled.div`
    font-size:14px;
    height:28px;
`;

export const ChangeCountryPS = styled.div`
    font-size:14px;
    height:28px;
    color:blue;

    &:hover{
        text-decoration:underline;
    }
`;
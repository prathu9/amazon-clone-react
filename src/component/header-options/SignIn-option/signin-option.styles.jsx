import styled from 'styled-components';

export const SignInOptionContainerPS = styled.div`
    display:flex;
    padding:8px 9px 10px;
    font-size:14px;
    font-family:Arial, Helvetica, sans-serif;

    .dropIcon{
        align-self:flex-end;
        margin-top:10px;
    }

    &:hover .overlay{
        display:block;
    }
`;

export const SignInOptionTextPS = styled.div`
    color:#fff;
    margin-right:5px;
    text-align:left;
    white-space:nowrap;

    span{
        display:block;
    
        &:nth-child(1){
            font-size:12px;
        }

        &:nth-child(2){
            font-weight:bold;
        }
    }
`;
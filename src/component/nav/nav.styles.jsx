import styled from 'styled-components';

import {Link} from 'react-router-dom';

export const NavContainerPS = styled.div`
    width:100%;
    height:39px !important;
    font-size:12px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color: #232f3e;
    overflow:hidden;
    /* padding:5px 0 6px; */

    @media screen and (max-width:640px){
        display:none;
    }
`;

export const NavOptionContainerPS = styled.div`
    display:flex;
    flex-grow:2;
    flex-wrap:wrap;
    height:38px;
    overflow:hidden;
    margin-left:20px;
`;

export const NavOptionPS =  styled(Link)`
    margin:1px 0 6px;
    padding:8px 9px;
    text-decoration:none;
    color:#fff;
    font-size:14px;
    border:1px solid #232f3e;
    border-radius:1px;
    font-family: Arial, Helvetica, sans-serif;

    &:hover{
        border:1px solid #fff;
    }

    &:nth-child(8){
        display:flex;
        align-items:center;

        span{
            display:block;
            margin-right:5px;
        }   

        .dropIcon{
            align-self:center;
        }
    }

`;

export const NavAd = styled(Link)`
    margin:0;
    padding:0;
    flex-grow:2;
    text-align:right;
    border:0;

    img{
        height:38px;
        border:1px solid #000;
    }

    &:hover img{
        border:1px solid #fff;
    }
`;
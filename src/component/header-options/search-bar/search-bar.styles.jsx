import styled from 'styled-components';

export const SearchBarContainerPS = styled.div`
    width:99%;
    height:45px;
    border:2.8px solid #000;
    background-color:#000;
    display:flex;
    justify-content:stretch;
    align-items:stretch;
    align-content:stretch;
    border-radius:8px;

    &:focus-within{
        border:2.8px solid orange;
        background-color:orange;
    }

    @media screen and (max-width:640px){
        width:100%;
        border:none;
        
        &:focus-within{
            border:none;
        }

        div:nth-child(1){
            display:none;
        }

        div:nth-child(3){
            flex:1 1 50px;


            .stick{
                right:-4.5px;
                bottom:-8px;
            }
        }
    }
`

export const SearchInputPS = styled.input` 
    flex-grow:8;
    padding:7px 10px 10px 5px;
    font-size:14px;
    outline:none;
    border:none;

    @media screen and (max-width:640px){
        border-radius:8px 0 0 8px;
    }
`;

export const SearchIconPS = styled.div`
    position:relative;
    border-radius: 0 2px 2px 0;
    background-color:#febd69;
    flex-grow:1;
    min-width:45px;
    border-radius:0 8px 8px 0;

    .circle{
        position:absolute;
        top:45%;
        left:45%;
        transform:translate(-50%,-50%);
        display:inline-block;
        border:2px solid #000;
        border-radius: 50%;
        width: 16px;
        height:16px;
    }

    .stick{
        position:absolute;
        bottom:-8px;
        right:-5px;
        height:10px;
        border:2px solid #000;
        border-radius: 0 0 2px 2px;
        transform:rotate(-45deg);
    }

    &:hover{
        background-color:orange;
    }

    @media screen and (max-width:640px){
        border-radius:0 8px 8px 0;
    }
`;

export const SearchDropdownIconPS = styled.div`
    position:relative;
    flex-grow:1.2;
    background-color:#f0f0f0;
    font-size:12px;
    border-radius:2px 0 0 2px;
    border-right: 0.1px solid rgba(0,0,0,0.2);
    overflow:hidden;
    min-width:52px;

    span{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-80%, -50%);
        font-family: Arial, Helvetica, sans-serif;

        &:after{
            content:"";
            width:0;
            height:0;
            position:absolute;
            top:4px; 
            right:-15px;
            border-top: 4px solid #888;
            border-left: 4px solid transparent;
            border-right:4px solid transparent;
        }
    }
`;

export const SearchDropdownPS = styled.select`
    position:absolute;
    top:2px;
    left:2px;
    height:35px;
    background-color:#f0f0f0;
    cursor:pointer;
    padding: 0;
    opacity:0;
    z-index:10;
`;
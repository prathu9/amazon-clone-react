import styled from 'styled-components';


export const DropIconPS = styled.div`
    display:block;
    width: 0; 
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #aaa;

    .overlay{
        display:none;
        top:60px;
        background-color:rgba(0,0,0,0.5);

        &:hover{
            display:none;
        }
    }

`;

import styled from 'styled-components';


export const CollectionContainerPS = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:20px;
    background-color:transparent;
    margin-bottom:10px;

    @media screen and (max-width:640px){
        width:100%;
        gap:10px;
    }
`;

import styled from 'styled-components';

export const LanguageDropDownPS = styled.div`
    position:absolute;
    top:45px;
    left:0;
    display:none;
    background-color:#ff0;
    width: 240px;
    height:100px;   
    padding:0 9px 5px;
    z-index:100; 
    line-height:44px;

    &:before{
        content:"";
        position:absolute;
        left:32px;
        transform:translateY(-50%) rotate(45deg);
        width:10px;
        height:10px;
        background-color:#fff;
    }
`;

export const LanguageOptionsPS = styled.div`
    width: 63px;
    height:100%;
    padding:15px 1px 10px 10px;
    display:flex;
    align-items:flex-end;
    box-sizing:border-box;

    .dropIcon{
        margin-bottom:2px;
    }

    &:hover .overlay{
        display:block;
    }

    &:hover ${LanguageDropDownPS}{
        display:block;
    }
`;

// export const DropIcon = styled.div`
//     display:block;
//     width: 0; 
//     height: 0; 
//     margin-bottom:2px;
//     border-left: 4px solid transparent;
//     border-right: 4px solid transparent;
//     border-top: 4px solid #aaa;

//     .overlay{
//         display:none;
//         top:60px;
//         background-color:rgba(0,0,0,0.5);

//         &:hover{
//             display:none;
//         }
    
//         &:hover ~ ${LanguageDropDownPS}{
//             display:none;
//             background-color:red;
//         }
//     }

// `;

export const IndianFlagPS = styled.div`
    position:relative;
    width:24px;
    height:18px;
    margin:0 5px 0 0;
    overflow:hidden;  

    img{
        position:absolute;
        top:-165px;
        left:0;
    }
`;



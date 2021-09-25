import styled from 'styled-components';

export const MobProdCarouselContainerPS = styled.div`
    width:100%;
    padding-top:20px;
    border-top:4px solid rgb(200,200,200);
    font-family: Arial, Helvetica, sans-serif; 

    &:nth-of-type(3){
        border:none;
        padding-top:0;
    }

    .multiservice{
        height:70px;

        img{
            width:45px;
            height:45px;
        }
    }

    .multiservice p{
        font-size:12px;
    }

    .bugdetfriendly img{
        width:122px;
    }


    @media screen and (min-width:640px){
        display:none;
    }
`;

export const MobProdCarouselTitlePS = styled.h2`
    margin:0;
    font-size:20px;
    font-weight:300;
    text-align:left;
    padding-left:10px;
`;

export const MobProdCarouselPS = styled.div`
    width:100%;
    padding:10px 0;
    overflow-X:scroll;
    overflow-Y:hidden;

    &:after{
        content:"";
        position:absolute;
        left:0;
        background-color:#fff;
        height:10px;
        width:99%;
        z-index:10;
    }
`;

export const MobProdCarouselItemContPS = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
`;

export const MobProdCarouselItemPS = styled.div`
    width:122px;
    margin:0 12px 6px;
    height:200px;
`;

export const MobProdCarouselImgPS = styled.img`
    object-fit:cover;
    width:122px;
`;

export const MobProdCarouselCaptionPS = styled.p`
    height:50px;
    text-overflow:ellipsis;
    overflow:hidden;
    padding-top:14px;
    font-size:15px;
    font-weight:300;
    margin:0;
    text-align:left;
    font-family:Arial, Helvetica, sans-serif;
`;

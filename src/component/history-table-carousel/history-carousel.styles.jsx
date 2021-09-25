import styled from  'styled-components';

export const  HistoryCarouselContainerPS = styled.div`
    overflow:hidden;
    padding: 20px 20px 30px;
    box-sizing:border-box;
`;

export const HistoryCarouselTitlePS = styled.h2`
    text-align:left;
`;

export const HistoryCarouselTableContainerPS = styled.div`
    position:relative;
    /* border:1px solid #000; */
    padding:10px 20px;
`;

export const HistoryTablePS = styled.table`
    /* border:1px solid #000; */
    margin:0 auto;
    border-spacing:15px;
`;

export const HistoryTableRowPS = styled.tr`
    width:70%;

    /* border:1px solid #962c2c; */
`;

export const HistoryTableCellPS = styled.td`
    /* border:1px solid #000; */
    width:160px;
    height:386px;
    font-size:14px;
    margin-right:20px;
    padding-right: 10px;
    display:inline-flex;
    flex-direction:column;


    img{
        width:160px;
    }

    a{
        display:inline-block;
        color: #007185;
        text-align:left;
        width:100%;

        &:hover{
            color:maroon;
            cursor:pointer;
        }
    }
`;

export const HistoryCarouselControlPS = styled.div`
    display:inline-block;
    position:absolute;
    top:50%;
    width:40px;
    height:40px;
    font-size:bold;
    padding-right:0;
    padding:10px;
    border:1px solid #000;
    cursor:pointer;
    transform:translateY(-50%);

    &:nth-child(1){
        left:20px;
        
    }

    &:nth-child(3){
        right:20px;
        border:1px solid red;
    }
`;

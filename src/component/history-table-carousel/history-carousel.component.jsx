import {useState, useEffect, useRef} from 'react';

import { HistoryCarouselContainerPS, 
         HistoryCarouselTableContainerPS, 
         HistoryCarouselTitlePS, 
         HistoryTableCellPS, 
         HistoryTablePS, 
         HistoryTableRowPS,
         HistoryCarouselControlPS } from "./history-carousel.styles";

const HistoryCarousel = ({productData}) => {

    const [startingIndex, setStartingIndex] = useState(0);
    const [tableCellCount, setTableCellCount] = useState(0);
    const tableRef = useRef(null); 
    
    const {title, products} = productData;

    const handleIncrement = () => {
        setStartingIndex(startingIndex + tableCellCount)
    }

    const handleDecrement = () => {
        setStartingIndex(startingIndex - (tableCellCount -1))
    }

    useEffect(()=>{

        const updateSize = () =>{
            if(window.innerWidth > 1000){
                setTableCellCount(Math.ceil((tableRef.current.offsetWidth-(2*95))/(171+40)));
            }
        }
        updateSize();
        window.addEventListener("resize", updateSize);
        console.log(startingIndex, tableCellCount, tableRef.current.offsetWidth)

        return () => window.removeEventListener("resize", updateSize);
    }, [startingIndex,tableCellCount])

    return(
        <HistoryCarouselContainerPS>
            <HistoryCarouselTitlePS>{title}</HistoryCarouselTitlePS>
            <HistoryCarouselTableContainerPS ref={tableRef}>
                <HistoryCarouselControlPS onClick={handleDecrement}>
                    <span>
                        {"<"}
                    </span>
                </HistoryCarouselControlPS >
                <HistoryTablePS>
                    <tbody>
                        <HistoryTableRowPS>
                            {
                                products.filter((product, i) => {
                                    if(products.length-1 < startingIndex){
                                        setStartingIndex(0);
                                    }

                                    if(startingIndex < 0) {
                                        setStartingIndex((products.length-1)-tableCellCount);
                                    }

                                    return i >= startingIndex && i < (startingIndex + tableCellCount)
                                
                                }).map(({imageUrl, description}, id) => (
                                            <HistoryTableCellPS key={id}>
                                                <img src={imageUrl} />
                                                <a>
                                                    {description}
                                            </a>
                                            </HistoryTableCellPS>
                                ))
                            }
                        </HistoryTableRowPS>
                    </tbody>
                </HistoryTablePS>
                <HistoryCarouselControlPS onClick={handleIncrement}>
                    <span>
                        {">"}
                    </span>
                </HistoryCarouselControlPS>
            </HistoryCarouselTableContainerPS>
        </HistoryCarouselContainerPS>
    )
}

export default HistoryCarousel;

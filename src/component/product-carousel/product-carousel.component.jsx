import {useState, useRef} from 'react';

import ProductCarouselList from "../product-carousel-list/product-carousel-list.component";
import { TitlePS, 
         ProductCarouselContainerPS,
         ProductCarouselPS, 
         ProductCarouselControlPS,
         ProductCarouselWrapperPS} from "./product-carousel.styles";

const ProductCarousel = ({productData}) => {
    const {title, products, isVideoList} = productData;

    const [listPos, setListPos] = useState(0);
    const carouselWrapperRef = useRef(null);
    const carouselRef = useRef(null);

    const handleCarouselControlClick = (direction) => {
        const carouselWrapperWidth = carouselWrapperRef.current.offsetWidth;
        const carouselWidth = carouselRef.current.offsetWidth;

        if(direction === "left"){
            const calcLeft = -listPos > carouselWrapperWidth? carouselWrapperWidth: -listPos;
            
            return listPos === 0 ? null : 
                setListPos(listPos + calcLeft)
        }
        else{
            const diff = carouselWidth - (carouselWrapperWidth - listPos);
            const calcLeft =  diff > carouselWrapperWidth ? carouselWrapperWidth - 100: diff;
            console.log(calcLeft, listPos, - calcLeft + listPos, diff);
            return listPos > carouselWidth ? null : 
                setListPos(-calcLeft + listPos)
        }   
    }

    return(
        <ProductCarouselContainerPS>
            <TitlePS>{title}</TitlePS>
            <ProductCarouselWrapperPS ref={carouselWrapperRef}>
                <ProductCarouselPS pos={listPos} ref={carouselRef}>
                    {
                       products.map((product, id)=> <ProductCarouselList key={id} 
                                                                         product={product}
                                                                         isVideoList={isVideoList}/>)
                    }
                </ProductCarouselPS>
                <ProductCarouselControlPS 
                    onClick={() => handleCarouselControlClick("left")} direction={"left"}
                ></ProductCarouselControlPS>
                <ProductCarouselControlPS 
                    onClick={() => handleCarouselControlClick("right")} direction={"right"}
                ></ProductCarouselControlPS>
            </ProductCarouselWrapperPS>
        </ProductCarouselContainerPS>
    )
}

export default ProductCarousel;
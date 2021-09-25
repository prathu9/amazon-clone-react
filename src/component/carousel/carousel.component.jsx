import { CarouselPS,
         CarouselContainerPS, 
         CarouselImgPS, 
         CarouselOverlayPS } from "./carousel.styles";
import CAROUSEL_IMG from "./carousel-img";

const Carousel = () => {
    return(
        <CarouselContainerPS>
            <CarouselPS>
                <CarouselOverlayPS/>
                {
                    CAROUSEL_IMG.map(item =>  <CarouselImgPS key={item.id} image={item.image}/>)
                }
            </CarouselPS>
        </CarouselContainerPS>
    )
}

export default Carousel;
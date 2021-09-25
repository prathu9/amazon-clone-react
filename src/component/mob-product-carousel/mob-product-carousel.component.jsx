import { MobProdCarouselContainerPS,
         MobProdCarouselItemContPS,
         MobProdCarouselPS,
         MobProdCarouselTitlePS,
         MobProdCarouselItemPS,
         MobProdCarouselImgPS,
         MobProdCarouselCaptionPS
         } from "./mob-product-carousel.styles";

import create_UUID from "../../utils/UID_generator"; 


const MobProductCarousel = ({productData}) => {
    const {title, products, showCaption, className} = productData;

    return(
        <MobProdCarouselContainerPS>
            {title?
                <MobProdCarouselTitlePS>
                    {title}    
                </MobProdCarouselTitlePS> : null
            }
            <MobProdCarouselPS>
                <MobProdCarouselItemContPS>
                    {showCaption?
                        products.map(product =>  (
                            <MobProdCarouselItemPS className={className} key={create_UUID()}>
                                <MobProdCarouselImgPS src={product.imageUrl}/>
                                <MobProdCarouselCaptionPS>
                                    {product.caption}
                                </MobProdCarouselCaptionPS>
                            </MobProdCarouselItemPS>)
                        ):
                        products.map(image => (
                            <MobProdCarouselItemPS className={className} key={create_UUID()}>
                                <MobProdCarouselImgPS src={image}/>
                            </MobProdCarouselItemPS>
                        ))
                    }
                </MobProdCarouselItemContPS>
            </MobProdCarouselPS>
        </MobProdCarouselContainerPS>
    )
}

export default MobProductCarousel;
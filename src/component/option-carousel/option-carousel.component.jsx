import {useState} from 'react';
import create_UUID from '../../utils/UID_generator';
 
import { OptionCarouselContainerPS,
         OptionCarouselTitlePS,
         OptionCarouselPS,
         OptionCarouselImgContainerPS,
         OptionCarouselImgPS,  
         OptionCarouselCapPS, 
         OptionCarouselCapTextPS,
         OptionCarouselCapPricePS,
         OptionCarouselCapTimePS, 
         OptionCarouselThumbnailPS, 
         OptionCarouselThumbnailLinkPS,
         OptionCarouselThumbnailImgPS, 
          } from './option-carousel.styles';


const OptionCarousel = ({title, productList}) => {
    const [productIndex, setProductIndex] = useState(0);
console.log(productList);
    const handleClick = (index) => {
        setProductIndex(index);
    }
    
    return(
        <OptionCarouselContainerPS>
            <OptionCarouselTitlePS>
                {title}
            </OptionCarouselTitlePS>
            <OptionCarouselPS>
                <OptionCarouselImgContainerPS>
                    <OptionCarouselImgPS src={productList[productIndex].imageUrl}/>
                </OptionCarouselImgContainerPS>
                <OptionCarouselCapPS>
                    <OptionCarouselCapTextPS>
                        {productList[productIndex].label}
                    </OptionCarouselCapTextPS>
                    <OptionCarouselCapPricePS>
                        {productList[productIndex].price}
                    </OptionCarouselCapPricePS>
                    <OptionCarouselCapTimePS>
                        {productList[productIndex].time}
                    </OptionCarouselCapTimePS>
                </OptionCarouselCapPS>
            </OptionCarouselPS>
            <OptionCarouselThumbnailPS>
                {
                    productList.map(({imageUrl}, index) => (
                        <OptionCarouselThumbnailLinkPS key={create_UUID()} onClick={() => {handleClick(index)}}>
                            <OptionCarouselThumbnailImgPS src={imageUrl} alt="product"/> 
                        </OptionCarouselThumbnailLinkPS>
                    ))
                }
            </OptionCarouselThumbnailPS>
        </OptionCarouselContainerPS>
    )
}


export default OptionCarousel;

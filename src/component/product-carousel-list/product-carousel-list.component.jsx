import { ProductCarouselListPS,
         ProductcarouselImgContainerPS, 
         ProductCarouselImgPS,
         ProductCarouselCaptionPS,
         ProductCarouselVidListPS,
         ProductCarouselVidImgPS,
         ProductCarouselVidCaptionPS,
         PlayBtnPS} from "./product-carousel-list.styles";

import playBtnLogo from '../../asset/playBtn.png';


const ProductCarouselList = ({product, isVideoList}) => {
    const {imageUrl, caption} = product.imageUrl? product : {imageUrl: product, caption:""}
    
    return(
        !isVideoList? <ProductCarouselListPS isVideoList={isVideoList}>
            <ProductcarouselImgContainerPS>
                <ProductCarouselImgPS src={imageUrl} alt="earpod"/>
            </ProductcarouselImgContainerPS>
            <ProductCarouselCaptionPS>
                {caption}
            </ProductCarouselCaptionPS>
        </ProductCarouselListPS>: 
        <ProductCarouselVidListPS>
            <PlayBtnPS src={playBtnLogo} alt="playButton"/>
            <ProductCarouselVidImgPS src={imageUrl} alt="earpod"/>
            <ProductCarouselVidCaptionPS imageUrl={imageUrl}>
                 {/* <VideoOverlayPS/> */}
                {product.VideoCaption}
            </ProductCarouselVidCaptionPS>
        </ProductCarouselVidListPS>
    )
}

export default ProductCarouselList;
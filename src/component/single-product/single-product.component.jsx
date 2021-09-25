import { SingleProductContainerPS, 
         SingleProductImagePS, 
         SingleProductTitlePS,
         SingleProductImageContainerPS } from "./single-product.styles";

const SingleProduct = ({title, imageUrl}) => {
    return(
        <SingleProductContainerPS>
            <SingleProductTitlePS>{title}</SingleProductTitlePS>
            <SingleProductImageContainerPS>
                <SingleProductImagePS src={imageUrl}/>
            </SingleProductImageContainerPS>
        </SingleProductContainerPS>
    )
}

export default SingleProduct;
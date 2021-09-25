import {MultiProductContainerPS, 
   MultiProductImagePS, 
   MultiProductTitlePS,
   MultiProductImageContainerPS } from "./multi-product.styles";

import create_UUID from "../../utils/UID_generator";

const MultiProduct = ({title, imageList}) => {
    return(
    <MultiProductContainerPS>
        <MultiProductTitlePS>{title}</MultiProductTitlePS>
        <MultiProductImageContainerPS>
            {imageList.map(image => <MultiProductImagePS src={image} key={create_UUID()}/>)}
        </MultiProductImageContainerPS>
    </MultiProductContainerPS>
    )
}

export default MultiProduct;
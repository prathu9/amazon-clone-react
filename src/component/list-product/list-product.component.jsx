import { ListLabelPS, ListPricePS, ListProductContainerPS, ListProductItemCaptionPS, ListProductItemContainerPS, ListProductItemImgPS, ListProductItemPS, ListProductTitlePS, ListTimePS } from "./list-product.styles"

import create_UUID from "../../utils/UID_generator";

const ListProduct = ({title, listItem}) => {
    return(
        <ListProductContainerPS>
            <ListProductTitlePS>{title}</ListProductTitlePS>
            <ListProductItemContainerPS>
                {
                    listItem.map(({imageUrl, price,label, time} )=> <ListProductItemPS key={create_UUID()}>
                        <ListProductItemImgPS src={imageUrl}/>
                        <ListProductItemCaptionPS>
                            <ListPricePS>{price}</ListPricePS>
                            <ListLabelPS>{label}</ListLabelPS>
                            <ListTimePS>{time}</ListTimePS>
                        </ListProductItemCaptionPS>
                    </ListProductItemPS>)
                }
            </ListProductItemContainerPS>
        </ListProductContainerPS>
    )
}

export default ListProduct;
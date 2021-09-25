import { CollectionBoxContainerPS,
    CollectionBoxTitlePS,
    CollectionBoxItemPS,
    CollectionItemImgPS,
    CollectionItemLabelPS,
    CollectionItemContainerPS} from "./collection-box.styles";

import create_UUID from '../../utils/UID_generator';


const CollectionBox = ({collectionItem, title}) => {
    
    const collectionItemList = Object.keys(collectionItem.lists).map(list => collectionItem.lists[list]);

    return(
    <CollectionBoxContainerPS>
        <CollectionBoxTitlePS>{title}</CollectionBoxTitlePS>
        <CollectionItemContainerPS>
            {
                collectionItemList.map(
                    ({imageUrl, label})=> {
                        return(
                            <CollectionBoxItemPS key={create_UUID()}>
                                <CollectionItemImgPS src={imageUrl} alt ={label}/>
                                <CollectionItemLabelPS>{label}</CollectionItemLabelPS>
                            </CollectionBoxItemPS>
                        )
                    }
                )
            }
        </CollectionItemContainerPS>
    </CollectionBoxContainerPS>
    )
}

export default CollectionBox;
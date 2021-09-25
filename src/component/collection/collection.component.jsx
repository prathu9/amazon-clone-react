import CollectionBox from '../collection-box/collection-box.component';

import { CollectionContainerPS } from "./collection.styles";

import create_UUID from '../../utils/UID_generator';


const Collection =  ({collectionData}) => {

    const collectionDataArray = Object.keys(collectionData).map(item => collectionData[item]);

    return(
        <CollectionContainerPS>
            {
                collectionDataArray.map((collectionItem) => {
                    return collectionItem.isCustom?
                    <collectionItem.component key={create_UUID()} {...collectionItem.data}/>:
                    <CollectionBox key={create_UUID()} title={collectionItem.title} collectionItem = {collectionItem}/>
                })
            }
        </CollectionContainerPS>
    )   
}

export default Collection;
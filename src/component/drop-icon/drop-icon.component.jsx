import Overlay from '../overlay/overlay.component';

import {DropIconPS} from "./drop-icon.styles";

const DropIcon = ({children, customDropIconStyles}) => {
    return(
        <DropIconPS className={customDropIconStyles?"dropIcon":""}>
            <Overlay customOverlayStyles/> 
            {children}
        </DropIconPS>
    )
}

export default DropIcon;
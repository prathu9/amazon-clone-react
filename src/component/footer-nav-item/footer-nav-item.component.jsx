import { FooterNavItemContainerPS, 
         FooterNavItemTitlePS,
         FooterNavItemListContainerPS,
         FooterNavItemListPS} from "./footer-nav-item.styles"; 

import create_UUID from "../../utils/UID_generator";

const FooterNavItem = ({title, navItemList}) => {
    return(
        <FooterNavItemContainerPS>
            <FooterNavItemTitlePS>{title}</FooterNavItemTitlePS>
            <FooterNavItemListContainerPS>
               {
                   navItemList.map(
                       (listText) => <FooterNavItemListPS key={create_UUID()}>{listText}</FooterNavItemListPS>
                   )
               }
            </FooterNavItemListContainerPS>
        </FooterNavItemContainerPS>
    )
}

export default FooterNavItem;
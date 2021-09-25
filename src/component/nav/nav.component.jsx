import { NavContainerPS,
         NavOptionPS,
         NavOptionContainerPS,
         NavAd } from "./nav.styles"

import DropIcon from "../drop-icon/drop-icon.component";

import navAd from "../../asset/navAd.jpg";

const Nav = () => {
    return(
        <NavContainerPS>
            <NavOptionContainerPS>
                <NavOptionPS to={'/'}>All</NavOptionPS>
                <NavOptionPS to={'/'}>Mobiles</NavOptionPS>
                <NavOptionPS to={'/'}>Best Sellers</NavOptionPS>
                <NavOptionPS to={'/'}>Fashion</NavOptionPS>
                <NavOptionPS to={'/'}>Electronics</NavOptionPS>
                <NavOptionPS to={'/'}>Customer Service</NavOptionPS>
                <NavOptionPS to={'/'}>Amazon Pay</NavOptionPS>
                <NavOptionPS to={'/'}>
                    <span>Prime</span>
                    <DropIcon customDropIconStyles></DropIcon>
                </NavOptionPS>
                <NavOptionPS to={'/'}>Today's Deals</NavOptionPS>
                <NavOptionPS to={'/'}>New Releases</NavOptionPS>
            </NavOptionContainerPS>
            <NavAd to={'/'}>
                <img src={navAd} alt={'nav_ad'}/>
            </NavAd>
        </NavContainerPS>
    )
}

export default Nav;
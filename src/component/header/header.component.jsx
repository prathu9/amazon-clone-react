import LanguageOption from '../header-options/language-option/languageOption.component';
import SearchBar from '../header-options/search-bar/search-bar.component';
import LocationOption from '../header-options/location-option/locationOption.component';
import SignInOption from '../header-options/SignIn-option/signin-option.component';
import OrderOption from '../header-options/order-option/order-option.component';

import { HeaderContainerPS, 
         OptionPS, 
         AmazonLogoContainerPS,
         AmazonLogoPS,
         LogoTextPS,
         MobSignInPS, 
         SubNavPS,
         SubNavOptionPS,
         HamburgerMenuIconPS} from './header.styles';

const Header = () => {
    return(
        <HeaderContainerPS id="#nav-top">
            <OptionPS>
                <AmazonLogoContainerPS>
                    <HamburgerMenuIconPS>
                        <svg className= "hamburgerIcon" width="48px" height="48px" viewBox="0 0 48 48">
                            <line x1='5' y1='12' x2='30' y2='12' stroke='#fff' strokeWidth='3'/>
                            <line x1='5' y1='22' x2='30' y2='22' stroke='#fff' strokeWidth='3'/>
                            <line x1='5' y1='32' x2='30' y2='32' stroke='#fff' strokeWidth='3'/>
                        </svg>
                    </HamburgerMenuIconPS>
                    <AmazonLogoPS/>
                    <LogoTextPS>
                        .in
                    </LogoTextPS>
                </AmazonLogoContainerPS>
                <MobSignInPS>
                    <span>{`Sign In ›`}</span>
                    <span></span>
                </MobSignInPS>
            </OptionPS>
            <OptionPS>
                <LocationOption/>
            </OptionPS>
            <OptionPS>
                <SearchBar/>
            </OptionPS>
            <OptionPS>
                <LanguageOption/>
            </OptionPS>
            <OptionPS>
                <SignInOption/>
            </OptionPS>
            <OptionPS>
                <OrderOption/>
            </OptionPS>
            <OptionPS>
            </OptionPS>
            <SubNavPS>
                <SubNavOptionPS>
                    Category
                </SubNavOptionPS>
                <SubNavOptionPS>
                    Wishlist
                </SubNavOptionPS>
                <SubNavOptionPS>
                    Deal
                </SubNavOptionPS>
                <SubNavOptionPS>
                    Sell
                </SubNavOptionPS>
            </SubNavPS>
        </HeaderContainerPS>
    )
}



export default Header;
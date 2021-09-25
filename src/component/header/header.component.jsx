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
         SubNavOptionPS} from './header.styles';

const Header = () => {
    return(
        <HeaderContainerPS id="#nav-top">
            <OptionPS>
                <AmazonLogoContainerPS>
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
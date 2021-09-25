import { FooterContainerPS, 
         FooterScrollTopPS,
         FooterNavContainerPS,
         FooterLangOptContainerPS,
         FooterAmazonLogoPS,
         FooterLangOptionPS,
         FooterCountryOptPS,
         FooterMobNavContainerPS,
         FooterMobNavPS,
         CountryOptPS,
         FooterOtherSectionPS,
         FooterOtherOptPS,
         OtherOptContainerPS,
         OtherOptPS,
         CopyrightAndOtherOptPS  } from "./footer.styles";

import FooterNavItem from "../footer-nav-item/footer-nav-item.component";

import Nav_Data from "../../data/nav-data";
import create_UUID from "../../utils/UID_generator";

const country = [
    "Australia", "Brazil", "Canada", "China", "France", "Germany", "Italy", "Japan", "Mexico", "Netherlands", 
    "Poland", "Singapore","Spain", "Turkey", "United Arab Emirates", "United Kingdom", "United States"
]

const otherOpt = [
    ["AbeBooks", "Books, art", " & collectibles"],
    ["Amazon Web Services", "Scalable Cloud", "Computing Services"],
    ["Audible", "Download", "Audio Books"],
    ["DPReview", "Digital", "Photography"],
    ["IMDb", "Movies, TV", "& Celebrities"],
    ["Shopbop", "Designer", "Fashion Brands"],
    ["Amazon Business", "Everything For", "Your Business"],
    ["Prime Now", "2-Hour Delivery", "on Everyday Items"],
    ["Amazon Prime Music", "75 million songs, ad-free", "Over 10 million podcast episodes"]
]

const mobNavOption = [
    "Your Amazon.in", "Amazon Pay", "Wish List",
    "Your Account", "Returns", "Customer Service", "Your Orders",
    "Amazon App Download", "Find a Wish List", "Your Recently Viewed Items"
    , "Sell"
]

const Footer = () => {
    return(
        <FooterContainerPS>
            <FooterScrollTopPS>Back to top</FooterScrollTopPS>
            <FooterNavContainerPS>
                {
                    Nav_Data.slice(0, 5).map(
                        ({title, navItemList}) => 
                                <FooterNavItem 
                                    key={create_UUID()}
                                    title={title} 
                                    navItemList={navItemList}
                                    className="deskTopNav"
                                />
                    )
                }
            </FooterNavContainerPS>
            <FooterMobNavContainerPS>
                <FooterMobNavPS>
                    {
                        mobNavOption.slice(0,6).map(
                            option => <span key={create_UUID()}>
                                            {option}
                                      </span>
                        )
                    }
                </FooterMobNavPS>
                <FooterMobNavPS>
                    {
                        mobNavOption.slice(7,11).map(
                            option => <span key={create_UUID()}>
                                            {option}
                                     </span>
                        )
                    }
                </FooterMobNavPS>
            </FooterMobNavContainerPS>
            <FooterLangOptContainerPS>
                <FooterAmazonLogoPS/>
                <FooterLangOptionPS>English</FooterLangOptionPS>
            </FooterLangOptContainerPS>
            <FooterCountryOptPS>
                {
                    country.map(country => <CountryOptPS key={create_UUID()}>{country}</CountryOptPS>)
                }
            </FooterCountryOptPS>
            <FooterOtherSectionPS>
                <FooterOtherOptPS>
                    {
                        otherOpt.map(option => <OtherOptContainerPS key={create_UUID()}>
                            {
                                option.map(item => <OtherOptPS key={create_UUID()}>
                                    {item}
                                </OtherOptPS>)
                            }
                        </OtherOptContainerPS>)
                    }
                    <OtherOptPS>Already a customer? Sign In</OtherOptPS>
                </FooterOtherOptPS>
                <CopyrightAndOtherOptPS>
                    <span>Conditions of Use & Sale</span>
                    <span>Privacy Notice</span>
                    <span>Interest-Based Ads</span>
                    <span>&copy; 1996-2021, Amazon.com, Inc. or its affiliates</span>
                </CopyrightAndOtherOptPS>
            </FooterOtherSectionPS>
        </FooterContainerPS>
    )
}

export default Footer;
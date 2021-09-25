import { LanguageOptionsPS,
         IndianFlagPS,
         LanguageDropDownPS} from "./languageOption.styles";

import LanguageDropDown from "../language-dropdown/language-dropdown.component";
import DropIcon from "../../drop-icon/drop-icon.component";

import indiaFlag from '../../../asset/flag.png';

const LanguageOptions = () => {
    return(
        <LanguageOptionsPS>
            <IndianFlagPS>
                <img src={indiaFlag} alt={'indian flag'}/>
            </IndianFlagPS>
            <DropIcon  customDropIconStyles> 
                <LanguageDropDownPS>
                    <LanguageDropDown />      
                </LanguageDropDownPS>
            </DropIcon>
        </LanguageOptionsPS>
    )
}

export default LanguageOptions;
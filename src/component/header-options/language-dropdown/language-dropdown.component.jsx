import {LanguageDropDownContainerPS,
        PrimaryLanguagePS,
        OtherLanguagesPS,
        CurrentCountryPS,
        ChangeCountryPS,
        RadioButtonContainerPS,
        LabelPS,
        RadioButtonPS} from './language-dropdown.styles';
        

const languageData = [
    'English - EN',
    'हिन्दी - HI',
    'தமிழ் - TA',
    'తెలుగు - TE',
    'ಕನ್ನಡ - KN',
    'മലയാളം - ML',
    'বাংলা - BN',
    'मराठी - MR'
]

const LanguageDropDown = () => {
    return(
        <LanguageDropDownContainerPS>
            <PrimaryLanguagePS>
                <RadioButtonContainerPS>
                    <RadioButtonPS type='radio'
                                   id={'EN'}
                                   name='language'/>
                    <LabelPS htmlFor={'EN'}>{languageData[0]}</LabelPS>
                </RadioButtonContainerPS>
            </PrimaryLanguagePS>
            <OtherLanguagesPS>
                {
                    languageData.map((lang,i) => {
                    const idName = lang.substring(lang.length-2)
                       return  i !== 0? 
                        <RadioButtonContainerPS key={idName}>
                                <RadioButtonPS type='radio'
                                               id={idName}
                                               name='language'/>
                                <LabelPS htmlFor={idName}>{lang}</LabelPS>
                        </RadioButtonContainerPS>:null
                    })
                }
            </OtherLanguagesPS>
            <CurrentCountryPS>
                You are shopping on Amazon.in
            </CurrentCountryPS>
            <ChangeCountryPS>
                Change country/region.
            </ChangeCountryPS>
        </LanguageDropDownContainerPS>
    )
}


export default LanguageDropDown;
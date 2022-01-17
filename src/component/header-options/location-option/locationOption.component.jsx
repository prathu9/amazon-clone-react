import {LocationLinkPS,
        LocationTextPS,
        LocationIconPS} from './locationOption.styles';

import locationIcon from '../../../asset/location-icon.png'; 

const LocationLink = () => {
    return(
        <LocationLinkPS>
            <LocationIconPS>
                <img src={locationIcon} alt=""/>
            </LocationIconPS>
            <LocationTextPS>
                <span>Hello,</span>
                <span>Select your address</span>
                <span>Select a location to see product availability</span>
            </LocationTextPS>
        </LocationLinkPS>
    );
}

export default LocationLink;
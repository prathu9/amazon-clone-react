import {LocationLinkPS,
        LocationTextPS,
        LocationIconPS} from './locationOption.styles';

const LocationLink = () => {
    return(
        <LocationLinkPS>
            <LocationIconPS>
                &#127880;
            </LocationIconPS>
            <LocationTextPS>
                <span>Hello,</span><br/>
                <span>Select your address</span>
                <span>Select a location to see product availability</span>
            </LocationTextPS>
        </LocationLinkPS>
    );
}

export default LocationLink;
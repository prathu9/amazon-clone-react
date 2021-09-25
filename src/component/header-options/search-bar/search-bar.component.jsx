import SearchItem from '../search-item/search-item.component';

import { SearchBarContainerPS,
         SearchIconPS,
         SearchInputPS,
         SearchDropdownPS,
         SearchDropdownIconPS } from "./search-bar.styles";

const SearchBar = () => {
    return(
        <SearchBarContainerPS>
            <SearchDropdownIconPS>
                <span>All</span>
                <SearchDropdownPS>
                    <SearchItem/>
                </SearchDropdownPS>
            </SearchDropdownIconPS>
            <SearchInputPS/>
            <SearchIconPS>
                <span className="circle">
                    <span className="stick"></span>
                </span>
            </SearchIconPS>
        </SearchBarContainerPS>
    )
}

export default SearchBar;
import { useState, useEffect } from 'react';

import SearchItem from '../search-item/search-item.component';

import { SearchBarContainerPS,
         SearchIconPS,
         SearchInputPS,
         SearchDropdownPS,
         SearchDropdownIconPS } from "./search-bar.styles";

const SearchBar = () => {

    const [placeholder, setPlaceholder] = useState('');

    useEffect(() => {
        const changePlaceholder = () => {
            if(window.innerWidth < 640){
                setPlaceholder('Search in Special offers')
            }
            else{
                setPlaceholder('')
            }
            console.log("run")
        }

        changePlaceholder();

        window.addEventListener('resize',changePlaceholder)

        return () => {
            window.removeEventListener('resize', changePlaceholder)
        }
    }, [])

    return(
        <SearchBarContainerPS>
            <SearchDropdownIconPS>
                <span>All</span>
                <SearchDropdownPS>
                    <SearchItem/>
                </SearchDropdownPS>
            </SearchDropdownIconPS>
            <SearchInputPS placeholder={placeholder}/>
            <SearchIconPS>
                <span className="circle">
                    <span className="stick"></span>
                </span>
            </SearchIconPS>
        </SearchBarContainerPS>
    )
}

export default SearchBar;
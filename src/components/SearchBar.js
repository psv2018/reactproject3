import React from 'react';
const SearchBar=(props)=>{
    return (
        <input type="text" id="myInput" onKeyUp={props.search} placeholder="Search for names.." ref={searchInput => (this.searchInput = searchInput)}
        title="Type in a name"/>

    )
}
export default SearchBar;
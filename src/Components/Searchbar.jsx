import React from 'react';
import './Searchbar.css';

function SearchBar({userSearch}){
    return(
        <div class="input-group">
            <input type="search" placeholder={userSearch} class="form-control rounded" placeholder="Search" aria-label="Search"
            aria-describedby="search-addon" />
         <button type="button" class="btn btn-outline-primary">search</button>
        </div>
    )
}

export default SearchBar;
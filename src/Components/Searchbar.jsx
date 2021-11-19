import React from 'react';
import './Searchbar.css';

function SearchBar({search}){
    return(
        <div class="input-group">
            <input type="search" placeholder={search} class="form-control rounded" placeholder="Search" aria-label="Search"
            aria-describedby="search-addon" />
         <button type="button" class="btn btn-outline-primary">search</button>
        </div>
    )
}

export default SearchBar;
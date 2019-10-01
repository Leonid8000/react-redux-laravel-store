import React from 'react';
import './searchBox.css';

const SearchBox = ({ searchQuery, setSearch }) => (

    <div className="search__box">
        <input type="text" className="search__txt" placeholder="search..."  value={searchQuery} onChange={e => setSearch(e.target.value)}/>
            <span  className="search__btn">
                <span className="icon-search ml-1" />
            </span>
    </div>

        );

export default SearchBox;
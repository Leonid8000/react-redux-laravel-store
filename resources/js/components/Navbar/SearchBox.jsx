import React from 'react';
import './searchBox.css';

const toggleSearchBox = () => {
        let SearchBoxIcon = document.getElementById('sb');
    // SearchBoxIcon.style.width = (SearchBoxIcon.style.width == '150px') ? 'width' : '0px'
    SearchBoxIcon.style.width = '100px';
};

const SearchBox = ({ searchQuery, setSearch }) => (

    <div className="search__box">
        <input type="text" className="search__txt" id="sb" placeholder="search..."  value={searchQuery} onChange={e => setSearch(e.target.value)}/>
            <span  className="search__btn">
                <span className="icon-search ml-1" onClick={toggleSearchBox}/>
            </span>
    </div>

        );

export default SearchBox;
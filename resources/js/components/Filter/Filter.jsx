import React from 'react';
import './filter.css';

const Filter = ({ setFilter }) => (
        <div className="mb-3 d-flex justify-content-center">
            <button className="filter__btn mr-3 btn btn-secondary "  onClick={setFilter.bind(this, 'all')}>All</button>
            <button className="filter__btn mr-3 btn btn-secondary"  onClick={setFilter.bind(this, 'hightPrice')}>Hight price</button>
            <button className="filter__btn btn btn-secondary"  onClick={setFilter.bind(this, 'lowPrice')}>Low price</button>
        </div>
);

export default Filter;






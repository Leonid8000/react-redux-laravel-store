import React from 'react';


import SearchBox from '../../containers/Search';
import Cart from '../../containers/Cart';
import './navbar.css';



const Navbar = () => (

        <nav className="navbar">
            
            <span className="icon-apple ml-2" />
            
            <SearchBox />
            
            <Cart />
        </nav>
    );


export default Navbar;

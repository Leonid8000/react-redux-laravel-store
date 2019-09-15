import React from 'react';
import './preloader.css';

 const Preloader = () => {

        return (
            <React.Fragment>
                <div className="preloader__wrapper">
                    <div className="preloader">
                        <p align="center" className="loading teko">Loading</p>
                        <hr className="loading__hr"/>
                    </div>
                </div>
            </React.Fragment>

        )
};
export default Preloader
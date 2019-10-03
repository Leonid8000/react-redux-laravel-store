import React from 'react';
import './preloader.css';

 const Preloader = () => {

        return (
            <React.Fragment>
                <div className="preloader">
                    <div className="preloader__content">
                        <div className="preloader__first"></div>
                        <div className="preloader__second"></div>
                        <div className="preloader__third"></div>
                    </div>
                </div>
            </React.Fragment>

        )
};
export default Preloader

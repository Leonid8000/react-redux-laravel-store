import React from 'react';
import  './title.css';

export default function Title ({title}){

        return (
            <div>
                <h1 className="teko text-center mt-4 title font-weight-bold">{title}</h1>
                <hr className="title__hr bg-grey"/>
            </div>
        )

}

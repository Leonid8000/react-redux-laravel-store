import React from 'react';
import  './productList.css';


 const ProductList = (product) => {

     const { name, price, image, addProduct, addedCount } = product;

     return (
         <div className="col-6 col-md-6 col-lg-3 d-inline-block">
             <div className="card mb-4">

                 <img className="card-img-top" src={image} alt="product"/>
                 
                 <div className="char">
                     <p className="char__text text-center mt-4">Screen: 7,7</p>
                     <p className="char__text text-center">RAM: 120GB</p>
                     <p className="char__text text-center">Camera: 12,0Мп</p>
                     <p className="char__text text-center">CPU: Apple 11</p>
                 </div>

                 <div className="card-body">
                     <h5 className="card-title text-center">{name}</h5>
                 <h5 className="card-title text-center">{price} $</h5>

                     <div className="text-center mx-auto btns__block">
                         <button className="btn__buy" onClick={addProduct.bind(this,product)}>BUY {addedCount> 0 && addedCount}</button>
                     </div>

                     </div>

             </div>
         </div>
     )
 };

export default ProductList;

// <img className="card-img-top" src="../../../../img/iphone-8-segment.png"/>

// <img className="card-img-top" src={image} alt="product"/>

// <img className="card-img-top" src="https://vast-depths-19179.herokuapp.com/img/iphone-8-segment.png"/>
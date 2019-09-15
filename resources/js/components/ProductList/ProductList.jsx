import React from 'react';
import  './productList.css';

 const ProductList = (product) => {

     const { title, price, img, addProduct, addedCount } = product;

     return (
         <div className="col-6 col-md-6 col-lg-3 d-inline-block">
             <div className="card mb-4">

                 <img className="card-img-top" src={img} alt="product"/>
                 <div className="card-body">
                     <h5 className="card-title text-center">{title}</h5>
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
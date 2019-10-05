import React from 'react';
import './navbar.css';

const CartComponent = (product) => {

    const { name, price, image, id, removeProduct } = product;

     return  ( <li>
            <div className="cart__card">
                <div className="card__header">
                    <hr className="card__hr"/>
                    <p className="text-center mt-2 teko">{name}</p>
                </div>
                <div className="card__body d-flex justify-content-center">
                    <img className="cart__img" alt="cartProduct" src={image}/>
                </div>

                <div className="d-flex justify-content-center mt-1">
                    <button className="yantr btn__delete" onClick={removeProduct.bind(this, id)}>Delete</button>
                </div>
                <div className="card__footer">
                    <p className="text-center mt-2 teko">Price: {price}$</p>
                    <hr className="card__hr"/>
                </div>
            </div>
        </li>
     )
};

const purchase = () => {
    alert("Purchase is made ");
};

const Menu = ({totalPrice, count, items}) => (
    <div>
        <ul className="list__main mt-3">
            <li>
                <span className="icon-cart mr-2">
                    <span>{count > 0 && <span className="cart__count">{count}</span>}</span>
                </span>

                <ul className="list">
                {items.map((product, i) => <CartComponent key={i} {...product}/>)}
                    {count > 0 &&
                     <div className="transaction__block">
                    <p className="yantr text-center">Total: {totalPrice}$</p>
                         <div className="d-flex justify-content-center mb-2">
                         <button className="" onClick={purchase}>send</button>
                          </div>
                    </div>
                    }
                </ul>
            </li>
        </ul>
    </div>


);

export default Menu;

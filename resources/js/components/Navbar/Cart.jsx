import React from 'react';
import './navbar.css';

const CartComponent = ({title, img, price, id, removeProduct}) => (
        <li>
            <div className="cart__card">
                <div className="card__header">
                    <hr className="card__hr"/>
                    <p className="text-center mt-2 teko">{title}</p>
                </div>
                <div className="card__body d-flex justify-content-center">
                    <img className="cart__img" alt="cartProduct" src={img}/>
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

);

const transActionOk = ({ totalPrice}) => {
   console.log(totalPrice)
};


const Menu = ({totalPrice, count, items}) => (
    <div>
        <ul className="list__main mt-3">
            <li>
                <span className="icon-cart " />
            <span>{count > 0 && <span className="cart__count">{count}</span>}
                 </span>
                <ul className="list">
                {items.map((product, i) => <CartComponent key={i} {...product}/>)}
                    {count > 0 &&
                     <div className="transaction__block">
                    <p className="yantr text-center">Total: {totalPrice}$</p>
                         <div className="d-flex justify-content-center mb-2">
                         <button className="yantr" onClick={transActionOk({totalPrice})}>send</button>
                          </div>
                    </div>
                    }
                </ul>
            </li>
        </ul>
    </div>


);

export default Menu;

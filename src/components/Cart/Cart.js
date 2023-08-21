import React from 'react';
import "./Cart.css";

const Cart = ({cart}) => {
    // const cart = props.cart; //option 1
    // const {cart} = props; //option 2

    console.log(cart);
    return (
        <div className='cart'> 
            <h4> Order Summary </h4>
            <div>
                <p> Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Cart;    
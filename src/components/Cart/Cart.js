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
                <p> Total Price: ${} </p>
                <p> Total Shipping Charge: ${} </p>
                <p> Tax: ${} </p>
                <p> Grand Total: ${} </p>
            </div>
            <div>
                <button className='clear-btn'> Clear Cart </button>
                <button className='review-btn'> Review Order </button>
            </div>
        </div>
    );
};

export default Cart;    
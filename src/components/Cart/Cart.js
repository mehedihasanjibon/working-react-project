import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = () => {
    const [product, setProduct] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[]);
    
    return (
        <div className='shop-container'>
            <div className='products-container'>
                <h1> this product coming: {product.length} </h1>
            </div>
            <div className='cart-container'>
                <h4> Order Summary </h4>
            </div>
        </div>
    );
};

export default Cart;
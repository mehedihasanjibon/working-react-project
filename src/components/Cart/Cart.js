import React, { useEffect, useState } from 'react';
import './Cart.css';
import Product from '../Product/Product';

const Cart = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id} 
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h4> Order Summary </h4>
            </div>
        </div>
    );
};

export default Cart;
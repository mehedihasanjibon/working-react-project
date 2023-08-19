import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [shop, setShop] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const handleAddToCart = (product) => {
        // console.log("Added product");
        const newShop = [...shop, product];
        setShop(newShop);
    }
    
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id} 
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h4> Order Summary </h4>
                <p> Selected Items: {shop.length}</p>
            </div>
        </div>
    );
};

export default Shop;
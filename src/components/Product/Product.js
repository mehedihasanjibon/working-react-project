import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);

    const {img, name, ratings, seller, price} = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6> {name} </h6>
            </div>
        </div>
    );
};

export default Product;
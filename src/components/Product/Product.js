import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // console.log(props.product);

    const {img, name, ratings, seller, price} = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'> {name} </h6>
                <p> Price: ${price} </p>
                <p> Manufacturer : {seller} </p>
                <p> Rating : {ratings} start </p>
            </div>
            <button className='btn-cart'> 
                Add to Cart
                <span> <FontAwesomeIcon icon={faShoppingCart} /> </span>
             </button>
        </div>
    );
};

export default Product;
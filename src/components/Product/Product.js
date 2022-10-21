import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props);
    const {img, name} = props.product;
    return (
<div className="product-container">
    <div className="product-image">
        <img src={img} alt="" />
    </div>
    <div className="product-info">
        <h4>{name}</h4>
    </div>
</div>
    );
};

export default Product;
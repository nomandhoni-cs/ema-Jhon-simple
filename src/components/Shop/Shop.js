import React, { useState } from 'react';
import fakeData from '../../fakeData/index.js';
import Product from '../Product/Product.js';
import './Shop.css'
const Shop = () => {
    const firstItems = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstItems);
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product  => <Product product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>This is cart</h1>
            </div>
        </div>
    );
};

export default Shop;
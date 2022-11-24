import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  // console.log(props);
  const { img, name, seller, price, stock, key } = props.product;
  // console.log(key);
  return (
    <div className="product-container">
      <div className="product-image">
        <img src={img} alt="" />
      </div>
      <div className="product-info">
        
        <h4><Link to={`product/${key}`}>{name}</Link></h4>
        
        <div className="order-info">
          <div className="items-left">
            <p>by {seller}</p>
            <br />
            <p>${price}</p>
            <br />
            <p>
              <small>Only {stock} left in stock - Order Soon</small>
            </p>
{props.showAddToCart? <button onClick={() => props.handleAddCart(props.product)} className="yellowBtn">Add to Cart</button>:''}
          </div>
          <div className="review">
            <h3>Features</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

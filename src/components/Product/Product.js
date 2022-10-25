import React from "react";
import "./Product.css";

const Product = (props) => {
  // console.log(props);
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product-container">
      <div className="product-image">
        <img src={img} alt="" />
      </div>
      <div className="product-info">
        <h4>{name}</h4>
        <div className="order-info">
          <div className="items-left">
            <p>by {seller}</p>
            <br />
            <p>${price}</p>
            <br />
            <p>
              <small>Only {stock} left in stock - Order Soon</small>
            </p>
            <button
              onClick={() => props.handleAddCart(props.product)}
              className="yellowBtn"
            >
              Add to Cart
            </button>
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

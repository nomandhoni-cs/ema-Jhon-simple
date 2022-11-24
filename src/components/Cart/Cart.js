import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css"
const Cart = (props) => {
  const productInCart = props.cart;
  console.log(productInCart);
  //! [This is another way of doing array reduce] !//
  // let productPrice = 0;
  // for (let i = 0; i < productInCart.length; i++) {
  //   const product = productInCart[i];
  //   productPrice = productPrice + product.price;
  // }
  const productPrice = productInCart.reduce(
    (total, pdr) => total + pdr.price,
    0
  );
  const tax = productPrice / 10;
  // Shipping cost calculator
  let shippingCost;
  if (productPrice > 35) {
    shippingCost = 0;
  } else if (productPrice > 15) {
    shippingCost = 4.99;
  } else if(productPrice > 0) {
    shippingCost = 12.99;
  }
  shippingCost = 0;
  const grandTotalPrice = shippingCost + tax + productPrice;
  // Function for 2 digit after decimal
  const digitPrecision = (number) => {
    const precision = number.toFixed(2);
    return Number(precision);
  };
  return (
    <div className="cart-container">
      <h3 className="summary">
        <u>Order Summary</u>
      </h3>
      <p className="summary">Items ordered: <span className="money">{productInCart.length}</span></p>
      <p>Price price: <span className="money">${digitPrecision(productPrice)}</span> </p>
      <p>Shipping cost: <span className="money">${digitPrecision(shippingCost)}</span> </p>
      <p>Tax: <span className="money">${digitPrecision(tax)}</span> </p>
      <h3 className="grandTotal">Order total: <span className="money"> ${digitPrecision(grandTotalPrice)}</span> </h3>
      <Link to='review'><button className="yellowBtn">Review Order</button></Link>
    </div>
  );
};

export default Cart;

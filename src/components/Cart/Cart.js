import React from "react";

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
    <div>
      <h3>
        <u>Order Summary</u>
      </h3>
      <p>Items ordered: {productInCart.length}</p>
      <p>Price price: ${digitPrecision(productPrice)}</p>
      <p>Shipping cost: ${digitPrecision(shippingCost)}</p>
      <p>Tax: ${digitPrecision(tax)}</p>
      <h3>Total Amount: ${digitPrecision(grandTotalPrice)}</h3>
    </div>
  );
};

export default Cart;

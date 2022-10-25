import React from "react";

const Cart = (props) => {
  return (
    <div>
      <h3>
        <u>Order Summary</u>
      </h3>
      <p>Items ordered: {props.items}</p>
      <p>Price: ${props.price}</p>
    </div>
  );
};

export default Cart;

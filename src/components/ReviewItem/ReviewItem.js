import React from "react";

const ReviewItem = (props) => {
  const { name, img} = props.product;
  return (
    <div>
      <div className="product-container">
        <div className="product-image">
          <img src={img} alt={name} />
        </div>
        <div className="product-info">{name}</div>
        <button className="remove-btn yellowBtn">Remove</button>
      </div>
    </div>
  );
};

export default ReviewItem;

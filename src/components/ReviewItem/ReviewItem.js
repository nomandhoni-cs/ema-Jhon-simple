import React from "react";

const ReviewItem = (props) => {
  const { name, img, key} = props.product;
  return (
    <div>
      <div className="product-container">
        <div className="product-image">
          <img src={img} alt={name} />
        </div>
        <div className="product-info">{name}</div>
        <button className="remove-btn yellowBtn" onClick={() => props.removeItem(key)}>Remove</button>
      </div>
    </div>
  );
};

export default ReviewItem;

import React, { useState } from "react";
import fakeData from "../../fakeData/index.js";
import Cart from "../Cart/Cart.js";
import Product from "../Product/Product.js";
import "./Shop.css";
const Shop = () => {
  const firstItems = fakeData.slice(0, 10);
  const [products, setProducts] = useState(firstItems);
  // Setting cart state
  const [cart, setCart] = useState([]);
  // Handle Add cart function
  const handleAddCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    console.log("Product added", product);
    // setPrice((product.price) + price);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product product={product} handleAddCart={handleAddCart}></Product>
        ))}
      </div>
      <div className="cart-container">
          <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;

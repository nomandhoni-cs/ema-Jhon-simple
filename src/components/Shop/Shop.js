import React, { useState } from "react";
import fakeData from "../../fakeData/index.js";
import Cart from "../Cart/Cart.js";
import Product from "../Product/Product.js";
import "./Shop.css";
import {addToDatabaseCart} from '../../utilities/databaseManager'
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
    const sameProduct = newCart.filter(pd => pd.key === product.key)
    const count = sameProduct.length;
    addToDatabaseCart(product.key, count)
    // setPrice((product.price) + price);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product product={product} showAddToCart={true} handleAddCart={handleAddCart}></Product>
        ))}
      </div>
      <div className="cart-container">
          <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;

import { useEffect, useState } from "react";
import fakeData from "../../fakeData/index.js";
import Cart from "../Cart/Cart.js";
import Product from "../Product/Product.js";
import "./Shop.css";
import { Link } from "react-router-dom";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";
const Shop = () => {
  const firstItems = fakeData.slice(0, 10);
  const [products, setProducts] = useState(firstItems);

  // Setting cart state
  const [cart, setCart] = useState([]);

  //Calling data from Cart
  useEffect(() => {
    const savedCart = getDatabaseCart(); //Giving an object output
    const productKeys = Object.keys(savedCart); //IT gives every id from an object
    const previousCart = productKeys.map((existingKey) => {
      const product = fakeData.find((pd) => pd.key === existingKey);
      product.quantity = savedCart[existingKey];
      return product;
    });
    setCart(previousCart);
  }, []);

  // Handle Add cart function
  const handleAddCart = (product) => {
    const toBeAdded = product.key;
    const sameProduct = cart.find((pd) => pd.key === toBeAdded);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.key !== toBeAdded);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    console.log("Product added", product);

    product.quantity = count;
    addToDatabaseCart(product.key, count);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            product={product}
            showAddToCart={true}
            handleAddCart={handleAddCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
        <Link to='review'><button className="yellowBtn">Review Order</button></Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;

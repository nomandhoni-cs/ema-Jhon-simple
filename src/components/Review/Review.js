import { useEffect } from "react";
import { useState } from "react";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import fakeData from "../../fakeData/index.js";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import HappyImage from "../../images/giphy.gif";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";
import userEvent from "@testing-library/user-event";
const Review = () => {
  const [cart, setCart] = useState([]);
  const [placeOrder, setPlaceOrder] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);

  // Data loading from local Storage
  useEffect(() => {
    //Cart
    const savedCart = getDatabaseCart();
    console.log(savedCart);
    const productKeys = Object.keys(savedCart);
    console.log(productKeys);
    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);
  // console.log(cart);
  // Handle Place Order
  const handleProceedCheckout = (e) => {
    // if(location.state?.from){
    //   navigate(location.state.pathname);
    // }
    // if(user.isSignedIn){
    //   navigate('/shipment');
    // }
    console.log(location);
    // setPlaceOrder(true);
    // console.log("Order Placed", location.pathname);
    // processOrder();
    // setCart([]);
    // Pevent Default
    //  e.preventDefault();
  };

  // Remove item from review section function
  const removeItem = (productKey) => {
    console.log("Remove button Clicked in ", productKey);
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };

  // const length = cart.length; 
  return (
    <div className="shop-container">
      <div className="products-container">

        {cart.map((product) => (
          <ReviewItem
            key={product.key}
            product={product}
            removeItem={removeItem}
          />
        ))}
        {placeOrder && <img src={HappyImage} alt="" /> }
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
        <Link to="/shipment">
          <button onClick={handleProceedCheckout} className="yellowBtn">Proceed Checkout</button>
        </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Review;

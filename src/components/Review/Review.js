import { useEffect} from "react"
import { useState } from "react"
import { getDatabaseCart } from "../../utilities/databaseManager"
import fakeData from "../../fakeData/index.js";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
const Review = () => {
  const [cart, setCart] = useState([])
  useEffect(() => {
    //Cart
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map(key => {
      const product = fakeData.find(pd => pd.key===key);
      product.quantity = savedCart[key];
      return product
    })
    setCart(cartProducts)
  }, [])
  console.log(cart);
  const length = cart.length;
  return (
    <div className="shop-container">
      <div className="products-container">
      <h1>Cart Items: {length}</h1>
      {cart.map(product => <ReviewItem key={product.key} product={product}></ReviewItem>)}
      </div>
      <div className="cart-container">
      <Cart cart={cart}></Cart>
      </div>
    </div>
  )
}

export default Review
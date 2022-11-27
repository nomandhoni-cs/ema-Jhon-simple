import { useParams } from "react-router-dom";
import fakeData from "../../fakeData/index.js";
import Product from "../Product/Product";
import './ProductDetails.css'
const ProductDetail = () => {
  const { productKey } = useParams();
  const singleProduct = fakeData.find((pd) => pd.key === productKey);
  console.log(singleProduct);
  return (
    <div className="product-details">
      <h1>{singleProduct.name}</h1>
      <Product showAddToCart={false} product={singleProduct} />
    </div>
  );
};

export default ProductDetail;

import Loader from "../../loader/Loader";
import ProductContent from "./ProductContent";
import useFetchSingleProduct from "../../../hooks/shopping.cart.hooks/products.page.hooks/useFetchSingleProduct";

const Product = () => {
  const { singleProductLoading, product } = useFetchSingleProduct();

  return (
    <>
      {singleProductLoading ? <Loader /> : <ProductContent product={product} />}
    </>
  );
};

export default Product;

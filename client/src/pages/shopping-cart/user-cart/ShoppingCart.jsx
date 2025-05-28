import useFetchCartProducts from "../../../hooks/shopping.cart.hooks/user.cart.hooks/useFetchCartProducts";
import Loader from "../../loader/Loader";
import CartProduct from "./CartProduct";
import TotalCost from "./TotalCost";

const ShoppingCart = () => {
  const { cartProductsLoading, cartProducts } = useFetchCartProducts();

  return (
    <div>
      {cartProductsLoading ? (
        <Loader />
      ) : cartProducts.length > 0 ? (
        <div className="flex flex-col gap-2.5 justify-evenly flex-wrap">
          <TotalCost cartProducts={cartProducts} />
          {cartProducts.map((product) => (
            <CartProduct key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <h1 className="text-center my-36 text-2xl font-bold text-shadow-2xs">
          No item so far!
        </h1>
      )}
    </div>
  );
};

export default ShoppingCart;

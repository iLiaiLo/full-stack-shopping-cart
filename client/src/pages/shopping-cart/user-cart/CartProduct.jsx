import { useContext } from "react";
import AppContext from "../../../context/appContext";
import useRemoveProduct from "../../../hooks/shopping.cart.hooks/user.cart.hooks/useRemoveProduct";
const CartProduct = ({ product }) => {
  const { cartProducts, setCartProducts } = useContext(AppContext);
  const { handleRemoveFromCart } = useRemoveProduct({
    cartProducts,
    setCartProducts,
    product,
  });

  return (
    <div className="flex flex-col p-2 gap-4 items-center justify-between border-2 border-solid border-gray-500 shadow-lg break-all">
      <img
        src={product.image}
        alt={product.name}
        className="w-[full] h-96 object-contain mb-4"
      />
      <h2 className="text-xl font-bold">
        <span className="font-bold">Title: </span>
        <span>{product.title}</span>
      </h2>
      <h2 className="text-xl font-bold">
        <span className="font-bold">Category: </span>
        <span>{product.category}</span>
      </h2>
      <p className=" font-bold break-word">
        <span className="font-bold">Description: </span>
        <span className="text-gray-600">{product.description}</span>
      </p>
      <p className="text-green-600 font-semibold text-2xl">
        <span className="font-bold">Price: </span>
        <span>{product.price}$</span>
      </p>
      <div>
        <button
          onClick={handleRemoveFromCart}
          className="self-center p-2 bg-red-600 text-white text-xl cursor-pointer hover:bg-red-700 transition-colors duration-300"
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CartProduct;

import { useContext } from "react";
import AppContext from "../../../context/appContext";

const useAddProduct = ({ product }) => {
  const { setCartProducts } = useContext(AppContext);
  const handleAddToCart = async () => {
    try {
      const { _id } = product;

      const response = await fetch(
        "http://localhost:5000/api/user/products/add",
        {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({ productId: _id }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 400) {
        alert("Product has already exist in cart!");
        return;
      } else if (response.status === 500) {
        throw new Error("Failed to add product to cart");
      }
      setCartProducts((prewProducts) => [...prewProducts, product]);
      alert("Product added to cart successfully!");
    } catch (error) {
      console.log(error);
    }
  };
  return { handleAddToCart };
};

export default useAddProduct;

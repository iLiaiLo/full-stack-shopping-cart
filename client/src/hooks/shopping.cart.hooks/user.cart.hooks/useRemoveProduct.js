const useRemoveProduct = ({ cartProducts, setCartProducts, product }) => {
  const handleRemoveFromCart = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/user/products/remove/${product._id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      if (!res.ok) {
        throw new Error("Failed to remove product from cart");
      }
      const updatedProductsData = cartProducts.filter(
        (item) => item._id !== product._id
      );
      setCartProducts(updatedProductsData);
      alert("Product removed from cart successfully!");
    } catch (error) {
      console.log(error);
    }
  };
  return { handleRemoveFromCart };
};

export default useRemoveProduct;

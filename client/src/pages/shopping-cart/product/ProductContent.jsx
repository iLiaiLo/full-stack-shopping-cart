import useAddProduct from "../../../hooks/shopping.cart.hooks/user.cart.hooks/useAddProduct";
const ProductContent = ({ product }) => {
  const { handleAddToCart } = useAddProduct({
    product,
  });
  return (
    <div className="flex flex-col items-center my-2 p-2 gap-5 justify-between border-2 border-solid border-gray-500 shadow-lg break-word">
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
      <p className="font-bold">
        <span className="font-bold">Description: </span>
        <span className="text-gray-600">{product.description}</span>
      </p>
      <p className="text-green-600 font-semibold text-2xl">
        <span className="font-bold">Price: </span>
        <span>{product.price}$</span>
      </p>

      <button
        onClick={handleAddToCart}
        className="self-center p-2 bg-blue-600 text-white text-xl cursor-pointer hover:bg-blue-700 transition-colors duration-300"
      >
        add to cart
      </button>
    </div>
  );
};

export default ProductContent;

import { NavLink } from "react-router";
const SingleProduct = ({ product }) => {
  return (
    <div className="flex flex-col p-2 gap-2 justify-between border-2 border-solid border-gray-500 shadow-lg break-all">
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
        <span className="text-gray-600">
          {product.description.split(" ").length > 20
            ? product.description.split(" ").slice(0, 20).join(" ") + "..."
            : product.description}
        </span>
      </p>
      <p className="text-green-600 font-semibold text-2xl">
        <span className="font-bold">Price: </span>
        <span>{product.price}$</span>
      </p>

      <NavLink
        to={`/shopping_cart/products/${product._id}`}
        className="w-full p-2 text-center bg-blue-600 text-white text-xl cursor-pointer hover:bg-blue-700 transition-colors duration-300"
      >
        view product
      </NavLink>
    </div>
  );
};

export default SingleProduct;

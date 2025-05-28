import { useContext, useState } from "react";
import AppContext from "../../../context/appContext";
import useQueryChange from "../../../hooks/shopping.cart.hooks/search.bar.hooks/useQueryChange";
import useFilterProducts from "../../../hooks/shopping.cart.hooks/products.page.hooks/useFilterProducts";
import useGetOriginalProducts from "../../../hooks/shopping.cart.hooks/products.page.hooks/useGetOriginalProducts";
const SearchBar = () => {
  const { setLoading, setProductsData } = useContext(AppContext);
  const [formData, setFormData] = useState({ title: "", category: "" });

  const { handleNameChange, handleCategoryChange } = useQueryChange({
    setFormData,
  });

  const { handleSearch } = useFilterProducts({
    formData,
    setLoading,
    setProductsData,
  });

  const { getOriginalProducts } = useGetOriginalProducts({
    setLoading,
    setProductsData,
    setFormData,
  });

  return (
    <div className="mx-auto my-4 max-w-[900px] flex gap-2 items-center justify-between flex-wrap border-2 border-solid border-gray-300 p-2 rounded">
      <input
        type="text"
        value={formData.title}
        onChange={handleNameChange}
        placeholder="enter product name"
        className="p-2 border border-gray-300 rounded outline-0 :focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
      <input
        type="text"
        value={formData.category}
        onChange={handleCategoryChange}
        placeholder="enter product category"
        className="p-2 border border-gray-300 rounded outline-0 :focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="p-2 bg-blue-500 text-white rounded w-30 hover:bg-blue-600 transition-colors duration-300"
      >
        Search
      </button>
      <button
        className="p-2 bg-blue-500 text-white rounded w-60 hover:bg-blue-600 transition-colors duration-300"
        onClick={getOriginalProducts}
      >
        get original data
      </button>
    </div>
  );
};

export default SearchBar;

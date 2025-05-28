const useFilterProducts = ({ formData, setLoading, setProductsData }) => {
  const handleSearch = async () => {
    const { title, category } = formData;
    if (!title && !category) {
      alert("Please enter a product name or category to search");
      return;
    }
    try {
      setLoading(true);
      const query = new URLSearchParams({ title, category }).toString();

      const res = await fetch(
        `http://localhost:5000/api/products/filter_products?${query}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await res.json();
      setProductsData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return { handleSearch };
};

export default useFilterProducts;

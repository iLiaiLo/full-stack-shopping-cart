const useGetOriginalProducts = ({
  setLoading,
  setProductsData,
  setFormData,
}) => {
  const getOriginalProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/products", {
        method: "GET",
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await res.json();
      setProductsData(data);
      setFormData({ title: "", category: "" });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return { getOriginalProducts };
};

export default useGetOriginalProducts;

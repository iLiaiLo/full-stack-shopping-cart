import { useEffect } from "react";
const useFetchProducts = ({
  productsData,
  setProductsData,
  loading,
  setLoading,
}) => {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/api/products", {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) {
          console.log(response.status);
          return;
        }
        const data = await response.json();

        setProductsData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [setLoading, setProductsData]);
  return { productsData, loading };
};

export default useFetchProducts;

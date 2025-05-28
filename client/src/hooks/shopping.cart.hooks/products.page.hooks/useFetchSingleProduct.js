import { useEffect, useState } from "react";
import { useParams } from "react-router";
const useFetchSingleProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [singleProductLoading, setSingleProductLoading] = useState(false);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setSingleProductLoading(true);
        const response = await fetch(
          `http://localhost:5000/api/products/${id}`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch single product");
        }
        const data = await response.json();
        setProduct(data);
        setSingleProductLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

  return { singleProductLoading, product };
};

export default useFetchSingleProduct;

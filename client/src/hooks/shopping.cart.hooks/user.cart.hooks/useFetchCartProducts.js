import React, { useEffect } from "react";
import { useContext, useState } from "react";
import AppContext from "../../../context/appContext";
const useFetchCartProducts = () => {
  const [cartProductsLoading, setCartProductsLoading] = useState(false);
  const { cartProducts, setCartProducts } = useContext(AppContext);
  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        setCartProductsLoading(true);
        const response = await fetch(
          "http://localhost:5000/api/user/products",
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch cart products");
        }
        const data = await response.json();
        setCartProducts(data);
        setCartProductsLoading(false);
      } catch (error) {
        console.error("Error fetching cart products:", error);
      }
    };

    fetchCartProducts();
  }, [setCartProducts]);

  return { cartProductsLoading, cartProducts };
};

export default useFetchCartProducts;

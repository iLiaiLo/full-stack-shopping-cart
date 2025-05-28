import { useContext } from "react";
import Loader from "../../loader/Loader";
import useFetchProducts from "../../../hooks/shopping.cart.hooks/products.page.hooks/useFetchProducts";
import AppContext from "../../../context/appContext";
import SingleProduct from "./SingleProduct";
const Products = () => {
  const { productsData, setProductsData, loading, setLoading } =
    useContext(AppContext);
  const fetchdata = useFetchProducts({
    productsData,
    setProductsData,
    loading,
    setLoading,
  });

  return (
    <>
      {fetchdata.loading ? (
        <Loader />
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {fetchdata.productsData.map((product) => (
            <SingleProduct key={product._id} product={product} />
          ))}
        </section>
      )}
    </>
  );
};

export default Products;

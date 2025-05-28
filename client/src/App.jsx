import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContext from "./context/appContext";
import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";
import UpdatePassword from "./pages/authentication/UpdatePassword";
import Navigation from "./pages/shopping-cart/navigation/Navigation";
import ShoppingCart from "./pages/shopping-cart/user-cart/ShoppingCart";
import Product from "./pages/shopping-cart/product/Product";

import ProtectedRoute from "./pages/protected-route/ProtectedRoute";
import ProductsPage from "./pages/shopping-cart/products/ProductsPage";
function App() {
  const [username, setUsername] = useState("");
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [cartProducts, setCartProducts] = useState([]);

  const props = {
    username,
    setUsername,
    productsData,
    setProductsData,
    cartProducts,
    setCartProducts,
    loading,
    setLoading,
  };
  return (
    <AppContext.Provider value={props}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/updatePassword" element={<UpdatePassword />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/shopping_cart" element={<Navigation />}>
              <Route path="products" element={<ProductsPage />} />
              <Route path="cart" element={<ShoppingCart />} />
              <Route path="products/:id" element={<Product />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;

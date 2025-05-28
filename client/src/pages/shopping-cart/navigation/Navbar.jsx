import { NavLink } from "react-router";
import Logout from "../../authentication/Logout";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-2x text-white flex justify-between">
      <NavLink to="/shopping_cart/products" className="hover:underline">
        products
      </NavLink>
      <NavLink to="/shopping_cart/cart" className="hover:underline">
        cart
      </NavLink>
      <Logout />
    </nav>
  );
};

export default Navbar;

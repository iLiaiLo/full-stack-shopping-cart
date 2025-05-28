import { Outlet } from "react-router";
import Navbar from "./Navbar";
const Navigation = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Navigation;

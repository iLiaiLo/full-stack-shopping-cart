import { Navigate } from "react-router";
import { Outlet } from "react-router";
const ProtectedRoute = () => {
  const username = localStorage.getItem("username");
  if (!username) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;

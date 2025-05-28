import { useNavigate } from "react-router";
const useLogout = () => {
  const Navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/user/logout", {
        method: "POST",
        credentials: "include",
      });
      if (!res.ok) {
        alert("logout failed");
        return;
      }
      localStorage.removeItem("username");

      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return { handleLogOut };
};

export default useLogout;

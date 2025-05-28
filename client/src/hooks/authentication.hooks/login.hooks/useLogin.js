import { useNavigate } from "react-router-dom";

const useLogin = (formData) => {
  const Navigate = useNavigate();

  const { username } = formData;
  const handleLogin = async (e) => {
    e.preventDefault();

    localStorage.setItem("username", username);
    try {
      const res = await fetch("http://localhost:5000/api/user/login", {
        credentials: "include",
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (!res.ok) {
        alert("invalid password or username");
        return;
      }

      alert("sucessfull login");
      Navigate("/shopping_cart/products");
    } catch (error) {
      console.log(error);
    }
  };
  return { handleLogin };
};

export default useLogin;

import { useNavigate } from "react-router-dom";
const useSignUp = (formData) => {
  const Navigate = useNavigate();
  const { username, email, password, confirmPassword } = formData;

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      alert("all fields are required");
      return;
    }
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/user/register", {
        credentials: "include",
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (!res.ok) {
        alert("either user already exists or invalid credentials");
        return;
      }

      alert("user registered successfully");

      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return { handleSignUp };
};

export default useSignUp;

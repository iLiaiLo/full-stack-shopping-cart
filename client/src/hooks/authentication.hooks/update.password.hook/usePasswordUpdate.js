import { useNavigate } from "react-router";
const usePasswordUpdate = (formData) => {
  const Navigate = useNavigate();
  const { email, newPassword, confirmPassword } = formData;
  const updatePassword = async (e) => {
    if (!email || !newPassword || !confirmPassword) {
      alert("all fields are required");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    e.preventDefault();
    try {
      const res = await fetch(
        "http://localhost:5000/api/user/forgot_password",
        {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({ email, newPassword }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        alert("invlid email or password");
        return;
      }
      alert("password updated successfully");
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return { updatePassword };
};

export default usePasswordUpdate;

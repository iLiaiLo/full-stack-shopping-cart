import { NavLink } from "react-router";
import { useState } from "react";
import useUpdatePasswordHandlers from "../../hooks/authentication.hooks/update.password.hook/useUpdatePasswordHandlers";
import usePasswordUpdate from "../../hooks/authentication.hooks/update.password.hook/usePasswordUpdate";
import useInvalidMessages from "../../hooks/authentication.hooks/invalid.input.hooks/useInvalidMessages";
const UpdatePassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const formData = { email, newPassword, confirmPassword };
  const {
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
  } = useUpdatePasswordHandlers({
    setEmail,
    setNewPassword,
    setConfirmPassword,
  });

  const { updatePassword } = usePasswordUpdate(formData);
  const { handleInvalidPassword, handleInvalidEmail, resetValidityMessage } =
    useInvalidMessages();

  return (
    <form onSubmit={updatePassword} className="authentication-container">
      <input
        type="email"
        onChange={handleEmailChange}
        onInvalid={handleInvalidEmail}
        onInput={resetValidityMessage}
        className="authentication-input"
        placeholder="enter email"
        pattern="^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$"
      />
      <input
        type="password"
        onChange={handlePasswordChange}
        onInvalid={handleInvalidPassword}
        onInput={resetValidityMessage}
        className="authentication-input"
        placeholder="enter new password"
        pattern=".{6,}"
      />
      <input
        type="password"
        onChange={handleConfirmPasswordChange}
        onInvalid={handleInvalidPassword}
        onInput={resetValidityMessage}
        className="authentication-input"
        placeholder="confirm new password"
        pattern=".{6,}"
      />
      <button type="submit" className="authentication-button">
        Update Password
      </button>
      <div className="suggestion-container">
        <span>Remembered your password?</span>
        <NavLink to="/" className="navlink-text">
          Login
        </NavLink>
      </div>
    </form>
  );
};

export default UpdatePassword;

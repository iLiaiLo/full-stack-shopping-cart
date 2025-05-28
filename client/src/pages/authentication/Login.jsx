import { NavLink } from "react-router";
import { useContext } from "react";
import { useState } from "react";
import AppContext from "../../context/appContext";
import useInputHandlers from "../../hooks/authentication.hooks/login.hooks/useInputHandlers";
import useLogin from "../../hooks/authentication.hooks/login.hooks/useLogin";
import useInvalidMessages from "../../hooks/authentication.hooks/invalid.input.hooks/useInvalidMessages";

const Login = () => {
  const { username, setUsername } = useContext(AppContext);
  const [password, setPassword] = useState("");
  const { handleInvalidUsername, handleInvalidPassword, resetValidityMessage } =
    useInvalidMessages();

  const { handleLoginChange, handlePasswordChange } = useInputHandlers({
    setUsername,
    setPassword,
  });

  const formData = { username, password };

  const { handleLogin } = useLogin(formData);

  return (
    <form onSubmit={handleLogin} className="authentication-container">
      <input
        type="text"
        onChange={handleLoginChange}
        onInvalid={handleInvalidUsername}
        onInput={resetValidityMessage}
        placeholder="enter Username"
        className="authentication-input"
        pattern="(?=.+[A-Za-z]).{3,}$"
      />
      <input
        type="password"
        onChange={handlePasswordChange}
        onInvalid={handleInvalidPassword}
        onInput={resetValidityMessage}
        placeholder="enter Password"
        className="authentication-input"
        pattern=".{6,}"
      />
      <button className="authentication-button" type="submit">
        Login
      </button>
      <div className="suggestion-container">
        <span>Don't have an accaunt?</span>
        <NavLink to="signup" className="navlink-text">
          Create new one
        </NavLink>
      </div>
      <div className="suggestion-container">
        <span>Forgot your password?</span>
        <NavLink to="updatePassword" className="navlink-text">
          Update Password
        </NavLink>
      </div>
    </form>
  );
};

export default Login;

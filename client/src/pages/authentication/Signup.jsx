import { NavLink } from "react-router";
import { useState } from "react";
import useSignupHandlers from "../../hooks/authentication.hooks/signup.hooks/useSignupHandlers";
import useSignUp from "../../hooks/authentication.hooks/signup.hooks/useSignUp";
import useInvalidMessages from "../../hooks/authentication.hooks/invalid.input.hooks/useInvalidMessages";
const Signup = () => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const {
    handleInvalidUsername,
    handleInvalidPassword,
    handleInvalidEmail,
    resetValidityMessage,
  } = useInvalidMessages();

  const {
    handleUserNameChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleEmailChange,
  } = useSignupHandlers({
    setUsername,
    setPassword,
    setConfirmPassword,
    setEmail,
  });

  const formdata = {
    username,
    email,
    password,
    confirmPassword,
  };

  const { handleSignUp } = useSignUp(formdata);
  return (
    <form onSubmit={handleSignUp} className="authentication-container">
      <input
        type="text"
        onChange={handleUserNameChange}
        onInvalid={handleInvalidUsername}
        onInput={resetValidityMessage}
        placeholder="enter username"
        className="authentication-input"
        pattern="(?=.+[A-Za-z]).{3,}$"
      />
      <input
        type="email"
        onChange={handleEmailChange}
        onInvalid={handleInvalidEmail}
        onInput={resetValidityMessage}
        placeholder="enter email"
        className="authentication-input"
        pattern="^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$"
      />
      <input
        type="password"
        onChange={handlePasswordChange}
        onInvalid={handleInvalidPassword}
        onInput={resetValidityMessage}
        placeholder="enter password"
        className="authentication-input"
        pattern=".{6,}"
      />
      <input
        type="password"
        onChange={handleConfirmPasswordChange}
        onInvalid={handleInvalidPassword}
        onInput={resetValidityMessage}
        placeholder="confirm password"
        className="authentication-input"
        pattern=".{6,}"
      />
      <button type="submit" className="authentication-button">
        Sign Up
      </button>
      <div className="suggestion-container">
        <span>Already have an account?</span>
        <NavLink to="/" className="navlink-text">
          Login
        </NavLink>
      </div>
    </form>
  );
};

export default Signup;

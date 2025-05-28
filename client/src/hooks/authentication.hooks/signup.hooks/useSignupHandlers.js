const useSignupHandlers = ({
  setUsername,
  setPassword,
  setConfirmPassword,
  setEmail,
}) => {
  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return {
    handleUserNameChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleEmailChange,
  };
};

export default useSignupHandlers;

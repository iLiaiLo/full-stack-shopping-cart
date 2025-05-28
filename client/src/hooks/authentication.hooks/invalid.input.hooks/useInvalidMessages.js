const useInvalidMessages = () => {
  const handleInvalidUsername = (e) => {
    e.target.setCustomValidity("Username must be at least 3 letters.");
  };

  const handleInvalidPassword = (e) => {
    e.target.setCustomValidity("Password must be at least 6 characters.");
  };

  const handleInvalidEmail = (e) => {
    e.target.setCustomValidity("Please enter a valid email address.");
  };
  const resetValidityMessage = (e) => {
    e.target.setCustomValidity("");
  };

  return {
    handleInvalidUsername,
    handleInvalidPassword,
    handleInvalidEmail,
    resetValidityMessage,
  };
};

export default useInvalidMessages;

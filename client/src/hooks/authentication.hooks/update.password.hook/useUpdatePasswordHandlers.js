const useUpdatePasswordHandlers = ({
  setEmail,
  setNewPassword,
  setConfirmPassword,
}) => {
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  return {
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
  };
};

export default useUpdatePasswordHandlers;

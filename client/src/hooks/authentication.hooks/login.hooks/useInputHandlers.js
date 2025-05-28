const useInputHandlers = ({ setUsername, setPassword }) => {
  const handleLoginChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return { handleLoginChange, handlePasswordChange };
};

export default useInputHandlers;

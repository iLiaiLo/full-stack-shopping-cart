import useLogout from "../../hooks/authentication.hooks/logout.hook/useLogout";

const Logout = () => {
  const { handleLogOut } = useLogout();

  return (
    <div>
      <button className="cursor-pointer hover:underline" onClick={handleLogOut}>
        logout
      </button>
    </div>
  );
};

export default Logout;

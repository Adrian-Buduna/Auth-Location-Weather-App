import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { unauthenticateUser } from "../../../redux/slices/authSlice";
import { useSelector } from "react-redux";
// API
import { onLogout } from "../../../api/users";

const Header = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  const logout = async () => {
    try {
      await onLogout();

      dispatch(unauthenticateUser());
      localStorage.removeItem("isAuth");
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div className="bg-gray-800 h-20 flex flex-row justify-between px-10 items-center font-bold text-white">
      <div>
        <Link to="/">Add User App</Link>
      </div>
      <div className="flex gap-4">
        {isAuth ? (
          <button onClick={() => logout()}>Logout</button>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { unauthenticateUser } from "../../../../redux/slices/authSlice"
// API
import { onAddUser } from "../../../../api/users";

const AddUserForm = ({ text }) => {
  const dispatch = useDispatch();

  const { isAuth } = useSelector((state) => state.auth);
  const [newUserData, setNewUserData] = useState({
    user_name: "",
    email: "",
    password: "",
    location: "",
  });
  // On Change get the value from imputs, and selector
  const onChange = (e) => {
    setNewUserData({ ...newUserData, [e.target.name]: e.target.value });
  };
  // On Submit Add User Handler
  const navigate = useNavigate();
  const pageLocation = useLocation();

  const onSubmitAddUser = async (e) => {
    e.preventDefault();
    onAddUser(newUserData);
    if (pageLocation.pathname === "/") {
      window.location.reload();
    } else {
      navigate("/");
      dispatch(unauthenticateUser());
      localStorage.removeItem("isAuth");
      window.location.reload();
    }
  };

  return (
    <div className="flex w-full justify-center ">
      <form
        onSubmit={onSubmitAddUser}
        className="flex flex-col gap-2 bg-gray-900 text-white p-6 rounded-md"
      >
        <h1 className="text-xl font-bold">{text}</h1>
        {/* Email */}
        <div className="flex flex-col pt-1">
          <label className="font-bold uppercase" htmlFor="email">
            Email:
          </label>
          <input
            className="bg-gray-300 rounded-md p-1 text-black"
            type="email"
            name="email"
            value={newUserData.email}
            onChange={onChange}
          />
        </div>
        {/* Password */}
        <div className="flex flex-col pt-1">
          <label className="font-bold uppercase" htmlFor="password">
            Password:
          </label>
          <input
            className="bg-gray-300 rounded-md p-1 text-black"
            type="password"
            name="password"
            value={newUserData.password}
            onChange={onChange}
          />
        </div>
        {/* Name */}
        <div className="flex flex-col pt-1">
          <label className="font-bold uppercase" htmlFor="user_name">
            Name:
          </label>
          <input
            className="bg-gray-300 rounded-md p-1 text-black"
            type="text"
            name="user_name"
            value={newUserData.user_name}
            onChange={onChange}
          />
        </div>
        {/* Location */}
        <div className="flex flex-col pt-1 text-black">
          <label className="text-white font-bold uppercase" htmlFor="location">
            Select an option:
          </label>
          <select
            className="bg-gray-300 rounded-md p-1"
            name="location"
            value={newUserData.location}
            onChange={onChange}
          >
            <option value="">--Select a location--</option>
            <option value="London">London</option>
            <option value="Paris">Paris</option>
            <option value="Moscow">Moscow</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Istanbul">Istanbul</option>
          </select>
        </div>
        {/* SUBMIT Button */}
        <div className="flex justify-end">
          <button className="bg-blue-900 my-2 p-2 rounded-md text-white ease-in-out	 hover:bg-blue-700 ">
            {text}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;

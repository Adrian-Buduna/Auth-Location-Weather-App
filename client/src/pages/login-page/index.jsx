import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../redux/slices/authSlice";
// layout
import Layout from "../../layout";
import { onLoginUser } from "../../api/users";

const LoginPage = () => {
  const dispatch = useDispatch();

  const [loginError, setLoginError] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoginError("");
    try {
      await onLoginUser(values);

      dispatch(authenticateUser());
      sessionStorage.setItem("isAuth", "true");
    } catch (error) {
      if (error) {
        setLoginError(error.response.data.message);
        console.error(error.response.data.message);
      }
    }
  };

  return (
    <Layout>
      <div className="flex w-full justify-center items-center py-20 ">
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-2 bg-gray-900 text-white p-6 rounded-md"
        >
          <h1 className="text-xl font-bold">Log In</h1>
          {/* Email */}
          <div className="flex flex-col pt-1">
            <label className="font-bold uppercase" htmlFor="email">
              Email:
            </label>
            <input
              className="bg-gray-300 rounded-md p-1 text-black"
              type="email"
              name="email"
              value={values.email}
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
              value={values.password}
              onChange={onChange}
            />
          </div>
          {/* SUBMIT Button */}
          <div className="flex justify-end">
            <button className="bg-blue-900 my-2 p-2 rounded-md text-white ease-in-out	 hover:bg-blue-700 ">
              Log In
            </button>
          </div>
          <span className="text-red-500">{loginError}</span>
        </form>
      </div>
    </Layout>
  );
};

export default LoginPage;

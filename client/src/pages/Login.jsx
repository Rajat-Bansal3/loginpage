import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [value, setValue] = useState({
    username: "",
    password: "",
  });
  const handleOnSubmit = (e) => {
    e.preventDefault();
    //api req logic here
  };
  const handleInput = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };
  console.log(value);
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-1/3">
        <form onSubmit={handleOnSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="block text-gray-600 mb-2">
              Username
            </label>
            <input
              name="username"
              onChange={handleInput}
              type="text"
              placeholder="Enter Username"
              className="p-3 w-full bg-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 mb-2">
              Password
            </label>
            <input
              name="password"
              onChange={handleInput}
              type="password"
              placeholder="Enter Password"
              className="p-3 w-full bg-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            Login
          </button>
          <p className="mt-4 text-gray-600">
            <span className="mr-2">Don't have an account?</span>
            <Link
              to="/register"
              className="text-blue-500 hover:underline hover:cursor-pointer"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

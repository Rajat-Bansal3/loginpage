import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [passwordError, setPasswordError] = useState("");
  const [apiError, setApiError] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios
        .post("http://localhost:3000/login", formData)
        .then((res) => {
          if (res.data.message === "success") {
            navigate("/dashboard");
          } else if (res.data.message === "no users found") {
            alert("invalid credentials");
          } else {
            alert("error logging in");
          }
        })
        .catch((err) => console.log(err));

      console.log("Login successful");

    } catch (error) {
      console.error("Error during login:", error.response.data);

      if (error.response.status === 401) {
        setPasswordError("Invalid username or password. Please try again.");
      } else {
        setApiError("An unexpected error occurred. Please try again later.");
      }
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "password") {
      setPasswordError("");
    }
  };

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
              className={`p-3 w-full bg-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
                passwordError ? "border-red-500" : ""
              }`}
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>
          {apiError && <p className="text-red-500 text-sm mb-4">{apiError}</p>}
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

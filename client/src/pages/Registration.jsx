import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    state: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordError, setPasswordError] = useState("");
  const [apiError, setApiError] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    try {
      //   const response = await fetch("https://your-backend-api.com/register", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(formData),
      //   });

      //   if (!response.ok) {
      //     setApiError("Registration failed. Please check your information.");
      //     return;
      //   }

      console.log("Registration successful:", formData);

      navigate("/dashboard");
    } catch (error) {
      console.error("Error during registration:", error);
      setApiError("An unexpected error occurred. Please try again later.");
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "password" || name === "confirmPassword") {
      setPasswordError("");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-1/3">
        <form onSubmit={handleOnSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-600 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter Name"
              className="p-3 w-full bg-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              onChange={handleInput}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="dob" className="block text-gray-600 mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              className="p-3 w-full bg-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              onChange={handleInput}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="gender" className="block text-gray-600 mb-2">
              Gender
            </label>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleInput}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleInput}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-600 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              placeholder="Enter Phone Number (10 digits)"
              pattern="[0-9]{10}"
              className="p-3 w-full bg-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              onChange={handleInput}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter Email"
              className="p-3 w-full bg-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              onChange={handleInput}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="state" className="block text-gray-600 mb-2">
              State
            </label>
            <div className="relative">
              <select
                name="state"
                value={formData.state}
                className="p-2 w-full bg-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                onChange={handleInput}
              >
                <option value="">Select State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                {/* Add other state options as needed */}
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Enter Password (at least 8 characters, one number, one capital letter, one special character)"
              className="p-3 w-full bg-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              onChange={handleInput}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-600 mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              placeholder="Confirm Password"
              className={`p-3 w-full bg-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
                passwordError ? "border-red-500" : ""
              }`}
              onChange={handleInput}
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>
          {apiError && <p className="text-red-500 text-sm mb-4">{apiError}</p>}
          <button className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            Register
          </button>
          <p className="mt-4 text-gray-600">
            <span className="mr-2">Already have an account?</span>
            <Link
              to="/login"
              className="text-blue-500 hover:underline hover:cursor-pointer"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;

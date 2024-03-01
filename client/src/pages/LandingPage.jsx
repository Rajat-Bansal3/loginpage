import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-1/3 text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome to Our Website!</h1>
        <p className="text-gray-600 mb-6">
          Explore the amazing features by logging in or create a new account to get started.
        </p>
        <div className="flex justify-around">
          <Link to="/login" className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            Login
          </Link>
          <Link to="/register" className="bg-green-500 text-white p-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

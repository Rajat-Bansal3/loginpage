import React from "react";
import LoginPage from "./pages/Login";
import RegistrationPage from "./pages/Registration";
import LandingPage from "./pages/LandingPage";
import DashBoard from "./pages/DashBoard.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

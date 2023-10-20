import React from "react";
import { Home_page, Login_register, Posting_page } from "../views";
import { Routes, Route } from "react-router-dom";

const MainContent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="/posting" element={<Posting_page />} />
        <Route path="/login-register" element={<Login_register />} />
        <Route path="/about" element={<login_register />} />
        <Route path="/contact" element={<login_register />} />
      </Routes>
    </>
  );
};

export default MainContent;

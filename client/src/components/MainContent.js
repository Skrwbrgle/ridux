import React from "react";
import {
  About_page,
  Contact_page,
  Home_page,
  Login_register,
  Posting_page,
} from "../views";
import { Routes, Route } from "react-router-dom";

const MainContent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="/posting" element={<Posting_page />} />
        <Route path="/login-register" element={<Login_register />} />
        <Route path="/about" element={<About_page />} />
        <Route path="/contact" element={<Contact_page />} />
      </Routes>
    </>
  );
};

export default MainContent;

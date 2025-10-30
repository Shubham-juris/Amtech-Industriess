import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Construction from "../pages/Construction";
import ScrollToTop from "../pages/TaptoScroll";

const RouterPage = () => {
  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
         <Route path="/wholesale/construction" element={<Construction />} />

      </Routes>
    </>
  );
};

export default RouterPage;

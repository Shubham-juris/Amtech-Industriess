import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Construction from "../pages/Construction";
import ScrollToTop from "../pages/TaptoScroll";
import Warehouse from "../pages/Warehouse";
import Wholesale from "../pages/Wholesale";

const RouterPage = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/warehouse" element={<Warehouse />} />
        <Route path="/wholesale" element={<Wholesale />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/wholesale/construction" element={<Construction />} />
      </Routes>
    </>
  );
};

export default RouterPage;

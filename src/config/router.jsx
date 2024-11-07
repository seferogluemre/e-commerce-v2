import React from "react";
import ProductDetail from "../pages/productDetailPage/ProductDetail";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/homePage/home";

function router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default router;

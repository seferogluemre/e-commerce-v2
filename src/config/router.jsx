import React from "react";
import ProductDetail from "../pages/productDetailPage/ProductDetail";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/homePage/home";
import Category from "../pages/categoryPage/Category";
import Products from "../pages/productsPage/products";
import Favorites from "/src/pages/favoritesPage/Favorites";

function router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:category" element={<Home />}></Route>
      <Route path="/product-detail/:id" element={<ProductDetail />} />
      <Route path="/category" element={<Category />}></Route>
      <Route path="/category/:category" element={<Products />}></Route>
      <Route path="/favorites" element={<Favorites />}></Route>
    </Routes>
  );
}

export default router;

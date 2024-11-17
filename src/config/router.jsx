import ProductDetail from "../pages/productDetailPage/ProductDetail";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/homePage/home";
import Category from "../pages/categoryPage/Category";
import Products from "../pages/productsPage/products";
import Favorites from "/src/pages/favoritesPage/Favorites";
import Cart from "/src/pages/myCartPage/myCart";
import SearchPage from "../pages/searchPage/SearchPage";

function router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:category" element={<Home />}></Route>
      <Route path="/product-detail/:id" element={<ProductDetail />} />
      <Route path="/category" element={<Category />}></Route>
      <Route path="/category/:category" element={<Products />}></Route>
      <Route path="/favorites" element={<Favorites />}></Route>
      <Route path="/sepet" element={<Cart />}></Route>
      <Route path="/search/:search" element={<SearchPage />}></Route>
    </Routes>
  );
}

export default router;

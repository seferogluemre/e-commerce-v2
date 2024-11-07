import React from "react";
import "./home.scss";
import Navbar from "../../components/navbar/navbar";
import ProductsLst from "../../components/Products/ProductsLst";

function home() {
  return (
    <div>
      <Navbar />
      <ProductsLst />
    </div>
  );
}

export default home;

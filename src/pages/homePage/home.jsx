import React from "react";
import "./home.scss";
import Navbar from "../../components/navbar/navbar";
// import ProductsLst from "../../components/Products/ProductsLst";
import ProductContent from "../../components/ProductContent/ProductContent";

function home() {
  return (
    <div>
      <Navbar />
      <ProductContent />
    </div>
  );
}

export default home;

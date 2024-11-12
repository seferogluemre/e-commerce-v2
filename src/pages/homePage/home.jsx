import React from "react";
import "./home.scss";
import Navbar from "../../components/navbar/navbar";
import ProductsLst from "../../components/Products/ProductsLst";
// import ProductContent from "../../components/ProductContent/ProductContent";
import ReviewsSlider from "../../components/reviewsSlider/ReviewsSlider";

function home() {
  return (
    <div>
      <Navbar />
      <ProductsLst />
      <ReviewsSlider />
    </div>
  );
}

export default home;

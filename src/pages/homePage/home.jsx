import "./home.scss";
import Navbar from "../../components/navbar/navbar";
import ProductsLst from "../../components/Products/ProductsLst";
import Footer from "/src/components/footer/Footer";
import ReviewsSlider from "../../components/reviewsSlider/ReviewsSlider";
import HeroSection from "/src/sections/herosection/HeroSection";
import StarProduct from "../../components/starProducts/starProduct";

function home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProductsLst />
      <ReviewsSlider />
      <StarProduct />
      <Footer />
    </div>
  );
}

export default home;

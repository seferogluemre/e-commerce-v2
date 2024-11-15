import "./home.scss";
import Navbar from "../../components/navbar/navbar";
import ProductsLst from "../../components/Products/ProductsLst";
import Footer from "/src/components/footer/Footer";
import ReviewsSlider from "../../components/reviewsSlider/ReviewsSlider";
import HeroSection from "/src/sections/herosection/HeroSection";
import StarProduct from "../../components/starProducts/starProduct";
import CategoryImages from "/src/components/categoryImages/CategoryImages";

function home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProductsLst />
      <CategoryImages />
      <StarProduct />
      <ReviewsSlider />
      <Footer />
    </div>
  );
}

export default home;

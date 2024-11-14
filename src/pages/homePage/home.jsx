import "./home.scss";
import Navbar from "../../components/navbar/navbar";
import ProductsLst from "../../components/Products/ProductsLst";
import Footer from "/src/components/footer/Footer";
import ReviewsSlider from "../../components/reviewsSlider/ReviewsSlider";

function home() {
  return (
    <div>
      <Navbar />
      <ProductsLst />
      <ReviewsSlider />
      <Footer />
    </div>
  );
}

export default home;

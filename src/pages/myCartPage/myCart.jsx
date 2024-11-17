import Navbar from "/src/components/navbar/NavbarComp";
import Footer from "/src/components/footer/Footer";
import ReviewsSlider from "/src/components/reviewsSlider/ReviewsSlider";
import Cart from "../../components/cart/Cart";
function MyCart() {
  return (
    <>
      <Navbar />
      <Cart />
      <ReviewsSlider />
      <Footer />
    </>
  );
}

export default MyCart;

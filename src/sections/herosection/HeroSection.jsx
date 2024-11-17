import "./heroSection.scss";
import { Carousel } from "react-bootstrap";

function HeroSection() {
  return (
    <>
      <Carousel className="mb">
        <Carousel.Item className="carousel-item">
          <img
            src="/public/images/sliderImages/slider_image1.jpeg"
            className="carousel-image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/public/images/sliderImages/slider_image2.jpeg"
            className="carousel-image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/public/images/sliderImages/slider_image3.jpeg"
            className="carousel-image"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/public/images/sliderImages/slider_image1.jpeg"
            className="carousel-image"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default HeroSection;

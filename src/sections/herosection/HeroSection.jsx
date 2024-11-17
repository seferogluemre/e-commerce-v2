import "./heroSection.scss";
import { Carousel } from "react-bootstrap";
import Photo1 from "/public/images/sliderImages/image4.jpeg";
import Photo2 from "/public/images/sliderImages/slider_image3.jpeg";
import Photo3 from "/public/images/sliderImages/slider_image1.jpeg";
import Photo4 from "/public/images/sliderImages/slider_image2.jpeg";

function HeroSection() {
  return (
    <>
      <Carousel className="mb">
        <Carousel.Item className="carousel-item">
          <img src={Photo1} className="carousel-image" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Photo2} className="carousel-image" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Photo3} className="carousel-image" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Photo4} className="carousel-image" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default HeroSection;

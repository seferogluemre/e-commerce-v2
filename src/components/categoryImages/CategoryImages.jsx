import { Container, Row } from "react-bootstrap";
import "./CategoryImages.scss";
import { Link } from "react-router-dom";
import LaptoplarImages from "/public/images/categoryImages/laptoplar.jpg";
import ErkekSaat from "/public/images/categoryImages/erkekSaa.jpg";
import ErkekGiyim from "/public/images/categoryImages/erkekGiyim.jpg";
import KadınTakıları from "/public/images/categoryImages/kadınTakıları.jpg";
import KadınGiyim from "/public/images/categoryImages/kadınGiyim.jpg";
import Motorlar from "/public/images/categoryImages/motorlar.jpg";
const images = [
  LaptoplarImages,
  ErkekSaat,
  ErkekGiyim,
  KadınTakıları,
  KadınGiyim,
  Motorlar,
];

const category = [
  "laptops",
  "mens-watches",
  "mens-shirts",
  "womens-jewellery",
  "womens-shoes",
  "motorcycle",
];

function CategoryImages() {
  return (
    <>
      <Container className="my-3 category-container ">
        <Row className="">
          {images.map((img, index) => (
            <div
              className="col-sm-6 col-md-4 col-lg-4 col-xxl-4 mb-2"
              key={index}
            >
              <Link to={"/category/" + category[index]}>
                <img src={img} className="category-image" />
              </Link>
            </div>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default CategoryImages;

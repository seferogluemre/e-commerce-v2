import { Container, Row } from "react-bootstrap";
import "./CategoryImages.scss";
import { Link } from "react-router-dom";

const images = [
  "/src/components/images/categoryImages/laptoplar.jpg",
  "/src/components/images/categoryImages/erkekSaa.jpg",
  "/src/components/images/categoryImages/erkekGiyim.jpg",
  "/src/components/images/categoryImages/kadınTakıları.jpg",
  "/src/components/images/categoryImages/kadınGiyim.jpg",
  "/src/components/images/categoryImages/motorlar.jpg",
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

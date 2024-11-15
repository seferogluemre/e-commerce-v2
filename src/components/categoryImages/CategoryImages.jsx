import { Container, Row } from "react-bootstrap";
import "./CategoryImages.scss";
import { Link } from "react-router-dom";

const images = [
  "https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309641.jpg?uid=R173069664&ga=GA1.1.710140505.1726061336&semt=ais_hybrid",
  "/src/components/images/image2.jpeg",
  "/src/components/images/image2.jpeg",
  "/src/components/images/image2.jpeg",
  "/src/components/images/image2.jpeg",
  "/src/components/images/image2.jpeg",
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
              <Link to={"/"}>
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

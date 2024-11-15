import { useState } from "react";
import {
  Container,
  Row,
  Card,
  Col,
  CardBody,
  CardHeader,
  CardImg,
  CardText,
} from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // F
import axios from "axios";
import { useEffect } from "react";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaHeartCircleCheck } from "react-icons/fa6";

import "./StarProducts.scss";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

function StarProduct() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/laptops"
        );
        const data = response.data.products;
        setProducts(data);
      } catch (error) {
        console.error("Hatan var kardeşim", error);
        alert("Ürün Hatası:" + error);
      }
    };
    getAllProducts();
  }, []);

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="slick-prev"
        onClick={onClick}
        style={{
          left: "-4px",
          zIndex: 1,
          background: "#007bff",
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <FaChevronLeft color="white" />
      </button>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="slick-next"
        onClick={onClick}
        style={{
          right: "-4px",
          zIndex: 1,
          background: "#FF9C73",
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <FaChevronRight color="white" />
      </button>
    );
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 610,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container className="my-5 p-3 star-products-container">
        <div className="text-center">
          <h2>Yıldız Ürünler</h2>
        </div>
        <Row className="">
          <Slider {...settings} className="">
            {products.map((item) => (
              <Col
                lg="4"
                md="6"
                xxl="3"
                xl="4"
                sm="6"
                className="d-flex flex-column align-items-center justify-content-center"
                key={item.id}
              >
                <Card className="card">
                  <CardHeader className="card-header">
                    <CardImg
                      className="card-img-overlay"
                      src={item.thumbnail}
                    />
                  </CardHeader>

                  <CardBody className="card-body">
                    <FaHeartCircleCheck className="fs-3 favorite-icon" />
                    <CardText className="card-text-price py-2">
                      <strong>{item.brand}</strong>
                    </CardText>
                    <CardText className="card-text-price py-2">
                      {item.title}
                    </CardText>
                    <CardText className="card-text-price py-2">
                      {item.price}$
                    </CardText>
                    <a
                      className="btn btn-danger"
                      id="addBtn"
                      onClick={() => navigate(`/product-detail/${item.id}`)}
                    >
                      <MdShoppingCartCheckout className="fs-3 mx-1" />
                      Ekle
                    </a>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Slider>
        </Row>
      </Container>
    </>
  );
}

export default StarProduct;

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

import { FaChevronRight } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import axios from "axios";
import { useEffect } from "react";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaHeartCircleCheck, FaHeartCircleMinus } from "react-icons/fa6";

import "./StarProducts.scss";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import {
  addToFavorite,
  removeFavorites,
} from "../../redux/slices/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";

function StarProduct() {
  const [products, setProducts] = useState([]);
  const { favoriteProducts } = useSelector((store) => store.favorites);
  const dispatch = useDispatch();
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
    // eslint-disable-next-line react/prop-types
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
      ></button>
    );
  };

  const CustomNextArrow = (props) => {
    // eslint-disable-next-line react/prop-types
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

  const handleFavorites = (product) => {
    const findProduct = favoriteProducts.find((prev) => prev.id === product.id);
    if (findProduct) {
      dispatch(removeFavorites(product));
    } else dispatch(addToFavorite(product));
  };

  return (
    <>
      <Container className="my-5 p-3 star-products-container">
        <div className="text-center">
          <h2 className="fs-1 py-1 text-danger">
            Yıldız Ürünler <IoStar className="fs-1 pb-1" />
          </h2>
        </div>
        <Row className="">
          <Slider {...settings} className="">
            {products.map(({ id, brand, title, thumbnail, price }) => {
              const isFavorite = favoriteProducts.some(
                (prev) => prev.id === id
              );
              return (
                <Col
                  lg="4"
                  md="6"
                  xxl="3"
                  xl="4"
                  sm="6"
                  className="d-flex flex-column align-items-center justify-content-center"
                  key={id}
                >
                  <Card className="card">
                    <CardHeader className="card-header">
                      <CardImg className="card-img-overlay" src={thumbnail} />
                    </CardHeader>

                    <CardBody className="card-body">
                      {isFavorite ? (
                        <FaHeartCircleMinus
                          className="fs-1 favorite-icon"
                          style={{ color: "red" }} // Favorideyse kırmızı
                          onClick={() =>
                            handleFavorites({
                              id,
                              price,
                              title,
                              brand,
                              thumbnail,
                            })
                          }
                        />
                      ) : (
                        <FaHeartCircleCheck
                          className="fs-1 favorite-icon"
                          onClick={() =>
                            handleFavorites({
                              id,
                              price,
                              title,
                              brand,
                              thumbnail,
                            })
                          }
                        />
                      )}

                      <CardText className="card-text-price py-2">
                        <strong>{brand}</strong>
                      </CardText>
                      <CardText className="card-text-price py-2">
                        {title}
                      </CardText>
                      <CardText className="card-text-price py-2">
                        {price}$
                      </CardText>
                      <a
                        className="btn btn-danger"
                        id="addBtn"
                        onClick={() => navigate(`/product-detail/${id}`)}
                      >
                        <MdShoppingCartCheckout className="fs-3 mx-1" />
                        Ekle
                      </a>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          </Slider>
        </Row>
      </Container>
    </>
  );
}

export default StarProduct;

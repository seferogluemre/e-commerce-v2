import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { setSelectedProduct } from "../../redux/slices/productSlice";
import { useDispatch } from "react-redux";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import { CiFaceSmile } from "react-icons/ci";

import "./ProductDetail.scss";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { SiAdguard } from "react-icons/si";

import Slider from "react-slick";
import { Card, CardText, CardHeader } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="slick-prev"
      onClick={onClick}
      style={{
        left: "-40px",
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
        right: "-40px",
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
      <FaChevronRight color="white" />
    </button>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
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

function ProductDetail() {
  const { products, selectedProduct } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = selectedProduct;
  console.log(data);

  const getProductById = () => {
    const product = products.find((data) => data.id == id);
    if (product) {
      dispatch(setSelectedProduct(product));
    }
  };

  useEffect(() => {
    getProductById();
  }, [products]);

  return (
    <div>
      <Navbar />
      <Container className="my-5">
        {data && (
          <Row key={data.id}>
            <Col xl="6" lg="6" md="6" sm="12">
              <div className="product-content-image">
                <img src={data.thumbnail} className="image " />
              </div>
            </Col>
            <Col xl="6" lg="6" md="6" sm="12">
              <div className="d-flex flex-row column-gap-1">
                <FaStar className="text-warning fs-4" />
                <FaStar className="text-warning fs-4" />
                <FaStar className="text-warning fs-4" />
                <FaStar className="text-warning fs-4" />
                <FaStar className="text-warning fs-4" />
                <strong>+5 Yorum</strong>
              </div>
              <div className="fs-2 display-3 fw-bold my-3 ">{data.brand}</div>
              <div className="fs-4 fw-medium">{data.title}</div>
              <div className="text-danger fs-5 my-2">{data.price}$</div>
              <div className="d-flex column-gap-3 my-4">
                <div className="increase-decrease-content">
                  <IoMdAdd className="fs-3" />
                </div>
                <div className="fw-bold">312</div>
                <div className="increase-decrease-content">
                  <FiMinus className="fs-3" />
                </div>
              </div>
              <div className="d-flex justify-content-center my-3 align-items-center column-gap-2">
                <p>
                  <CiFaceSmile className="fs-3" />
                  1.000.000+ Mutlu Müşteri
                </p>
                <p>
                  <FcApproval className="fs-3" />
                  Memnuniyet Garantisi
                </p>
              </div>
              <div className="my-1">
                <SiAdguard className="text-success fs-3 " />
                <strong> 7 Günde İade Garantisi</strong>
              </div>
              <div className="mt-3">
                <strong>
                  {data.warrantyInformation === "Lifetime warranty"
                    ? "Ömür boyu garanti"
                    : "Garantisi Yok"}
                </strong>
              </div>
              <div className="mt-4">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item className="accordion-item" eventKey="1">
                    <Accordion.Header>Özellikler</Accordion.Header>
                    <Accordion.Body>
                      <p className="fs-5">{data.description}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item className="accordion-item" eventKey="">
                    <Accordion.Header>Boyutlar</Accordion.Header>
                    <Accordion.Body>
                      <p className="py-1">
                        Ürünümüzün Boyutu {data.dimensions.depth}`dır
                        <br />
                        Yüksekligi {data.dimensions.height}`dir <br /> Ve
                        Genişligi ise {data.dimensions.width}
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
          </Row>
        )}
      </Container>
      <Container className="mt-5 detail-container">
        <div
          className="reviews-slider-container"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 50px",
            overflow: "hidden",
          }}
        >
          <Slider {...settings} className="">
            {data?.reviews?.map((review, index) => (
              <div className="p-4" key={index}>
                <Card className="card">
                  <CardHeader className="bg-warning text-white">
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <span className="badge bg-light text-dark">
                        {review.rating}/5 ⭐
                      </span>
                      <h6 className="mb-0">{review.user_name}</h6>
                    </div>
                  </CardHeader>
                  <Card.Body className="p-3">
                    <CardText
                      className="text-black mb-2"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {review.review_content}
                    </CardText>
                    <CardText
                      className="text-black mb-2 reviewer"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {review.reviewerName}
                    </CardText>
                    <CardText
                      className="text-black mb-2 reviewer"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {review.reviewerEmail}
                    </CardText>
                    <CardText
                      className="text-muted mb-2"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {review.comment}
                    </CardText>
                    <small className="text-muted">
                      {new Date(review.date).toLocaleDateString()}
                    </small>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
}

export default ProductDetail;

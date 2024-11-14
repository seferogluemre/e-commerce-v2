import React from "react";
import Slider from "react-slick";
import { Card, CardText, CardHeader } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Font Awesome ikonları için
import "./ReviewsSlider.scss";

const reviews = [
  {
    date: new Date(2024, 3, 10),
    user_name: "Emre S.",
    rewiews_content: "Kargom çok kısa bir sürede geldi. Cok iyi.",
    rate: 5,
  },
  {
    date: new Date(2024, 6, 22),
    user_name: "Ahmet S.",
    rewiews_content: "Kargom çok kısa bir sürede geldi. Cok iyi.",
    rate: 5,
  },
  {
    date: new Date(2024, 2, 17),
    user_name: "Ecem S.",
    rewiews_content: "Kargom çok kısa bir sürede geldi. Cok iyi.",
    rate: 5,
  },
  {
    date: new Date(2024, 3, 12),
    user_name: "Esra S.",
    rewiews_content: "Kargom çok kısa bir sürede geldi. Cok iyi.",
    rate: 5,
  },
  {
    date: new Date(2024, 12, 14),
    user_name: "Berat S.",
    rewiews_content: "Kargom çok kısa bir sürede geldi. Cok iyi.",
    rate: 4,
  },
  {
    date: new Date(2024, 8, 12),
    user_name: "Burak S.",
    rewiews_content: "Kargom çok kısa bir sürede geldi. Cok iyi.",
    rate: 4,
  },
  {
    date: new Date(2024, 3, 16),
    user_name: "Salih S.",
    rewiews_content: "Kargom çok kısa bir sürede geldi. Cok iyi.",
    rate: 3,
  },
  {
    date: new Date(2024, 9, 21),
    user_name: "Muhammet S.",
    rewiews_content: "Kargom çok kısa bir sürede geldi. Cok iyi.",
    rate: 3,
  },
  {
    date: new Date(2024, 8, 28),
    user_name: "Ersin S.",
    rewiews_content: "Kargom çok kısa bir sürede geldi. Cok iyi.",
    rate: 2,
  },
  {
    date: new Date(2024, 8, 28),
    user_name: "Ersin S.",
    rewiews_content: "Kargom çok kısa bir sürede geldi. Cok iyi.",
    rate: 2,
  },
  {
    date: new Date(2024, 8, 28),
    user_name: "Ersin S.",
    rewiews_content: "Kargom çok kısa bir sürede geldi. Cok iyi.",
    rate: 1,
  },
  {
    date: new Date(2024, 8, 28),
    user_name: "Özhan S.",
    rewiews_content: "Kargom çok kısa bir sürede geldi. Cok iyi.",
    rate: 1,
  },
];

export default function SimpleSlider() {
  // Özel ok butonları için
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

  var settings = {
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

  return (
    <div
      className="reviews-slider-container"
      style={{
        maxWidth: "1200px", // Container'a maksimum genişlik
        margin: "0 auto", // Merkezde hizalama
        padding: "0 50px", // Ok butonları için yanlarda boşluk
        overflow: "hidden", // Taşmayı engelle
      }}
    >
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div className="px-2 py-3" key={index}>
            <Card className="card">
              <CardHeader className="bg-warning text-white rounded-4">
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="mb-0">{review.user_name}</h6>
                  <span className="badge bg-light text-dark">
                    {review.rate}/5 ⭐
                  </span>
                </div>
              </CardHeader>
              <Card.Body className="p-3">
                <CardText
                  className="text-muted mb-2"
                  style={{ fontSize: "0.9rem" }}
                >
                  {review.rewiews_content}
                </CardText>
                <small className="text-muted">
                  {review.date.toLocaleDateString()}
                </small>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}

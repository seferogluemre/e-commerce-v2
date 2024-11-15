import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Card, CardText, CardHeader } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ReviewsSlider.scss";
import axios from "axios";

const reviews = [
  {
    date: new Date(2024, 3, 10),
    user_name: "Emre K.",
    rewiews_content: "Ürünüm harika, çok memnun kaldım.",
    rate: 5,
  },
  {
    date: new Date(2024, 6, 22),
    user_name: "Ahmet K.",
    rewiews_content: "Hızlı kargo, teşekkürler!",
    rate: 5,
  },
  {
    date: new Date(2024, 2, 17),
    user_name: "Murat K.",
    rewiews_content: "Kalitesi beklediğimden çok daha iyi.",
    rate: 5,
  },
  {
    date: new Date(2024, 3, 12),
    user_name: "Salih K.",
    rewiews_content: "Mükemmel bir deneyim yaşadım.",
    rate: 5,
  },
  {
    date: new Date(2024, 12, 14),
    user_name: "Berat K.",
    rewiews_content: "Ürün tam istediğim gibi, teşekkürler.",
    rate: 4,
  },
  {
    date: new Date(2024, 8, 12),
    user_name: "Burak K.",
    rewiews_content: "Fiyat/performans oranı çok iyi.",
    rate: 4,
  },
  {
    date: new Date(2024, 3, 16),
    user_name: "Ali K.",
    rewiews_content: "Biraz daha hızlı gelebilirdi.",
    rate: 3,
  },
  {
    date: new Date(2024, 9, 21),
    user_name: "Muhammet K.",
    rewiews_content: "Ürün güzel ama eksik parçalar vardı.",
    rate: 3,
  },
  {
    date: new Date(2024, 8, 28),
    user_name: "Ersin K.",
    rewiews_content: "Kullanımı kolay, ama biraz ağır.",
    rate: 2,
  },
  {
    date: new Date(2024, 8, 28),
    user_name: "Oğuz K.",
    rewiews_content: "Beklediğimden daha kötü bir deneyim.",
    rate: 2,
  },
  {
    date: new Date(2024, 8, 28),
    user_name: "Can K.",
    rewiews_content: "Ürün tam olarak açıklamalara uymuyor.",
    rate: 1,
  },
  {
    date: new Date(2024, 8, 28),
    user_name: "Özhan K.",
    rewiews_content: "Kesinlikle tavsiye etmiyorum.",
    rate: 1,
  },
  {
    date: new Date(2024, 5, 10),
    user_name: "Suat K.",
    rewiews_content: "Harika bir ürün, çok beğendim.",
    rate: 5,
  },
  {
    date: new Date(2024, 7, 15),
    user_name: "Ali T.",
    rewiews_content: "Hızlı kargo, ürün tam istediğim gibi.",
    rate: 5,
  },
  {
    date: new Date(2024, 4, 20),
    user_name: "İlker K.",
    rewiews_content: "Kalitesi çok iyi, tekrar alırım.",
    rate: 5,
  },
  {
    date: new Date(2024, 11, 5),
    user_name: "Can Y.",
    rewiews_content: "Fiyatı uygun, memnun kaldım.",
    rate: 4,
  },
  {
    date: new Date(2024, 10, 30),
    user_name: "Dogan K.",
    rewiews_content: "Ürün güzel ama biraz geç geldi.",
    rate: 3,
  },
  {
    date: new Date(2024, 9, 25),
    user_name: "Oğuz D.",
    rewiews_content: "Kullanımı kolay ama eksik parçalar var.",
    rate: 2,
  },
  {
    date: new Date(2024, 8, 15),
    user_name: "Remzi K.",
    rewiews_content: "Ürün beklediğim gibi değil.",
    rate: 1,
  },
  {
    date: new Date(2024, 7, 20),
    user_name: "Emre K.",
    rewiews_content: "Kesinlikle tavsiye etmiyorum.",
    rate: 1,
  },
  {
    date: new Date(2024, 6, 18),
    user_name: "Fatih K.",
    rewiews_content: "Mükemmel bir ürün, çok memnun kaldım.",
    rate: 5,
  },
  {
    date: new Date(2024, 5, 12),
    user_name: "Hüseyin K.",
    rewiews_content: "Hızlı kargo, teşekkürler!",
    rate: 5,
  },
  {
    date: new Date(2024, 4, 22),
    user_name: "Cem K.",
    rewiews_content: "Kalitesi beklediğimden çok daha iyi.",
    rate: 5,
  },
  {
    date: new Date(2024, 3, 30),
    user_name: "Vahit K.",
    rewiews_content: "Mükemmel bir deneyim yaşadım.",
    rate: 5,
  },
  {
    date: new Date(2024, 2, 28),
    user_name: "Gökhan K.",
    rewiews_content: "Ürün tam istediğim gibi, teşekkürler.",
    rate: 4,
  },
  {
    date: new Date(2024, 1, 15),
    user_name: "Hüseyin K.",
    rewiews_content: "Fiyat/performans oranı çok iyi.",
    rate: 4,
  },
  {
    date: new Date(2024, 0, 10),
    user_name: "İsmail K.",
    rewiews_content: "Biraz daha hızlı gelebilirdi.",
    rate: 3,
  },
  {
    date: new Date(2024, 11, 5),
    user_name: "Mehmet K.",
    rewiews_content: "Ürün güzel ama eksik parçalar vardı.",
    rate: 3,
  },
  {
    date: new Date(2024, 10, 20),
    user_name: "Kaan K.",
    rewiews_content: "Kullanımı kolay, ama biraz ağır.",
    rate: 2,
  },
  {
    date: new Date(2024, 9, 15),
    user_name: "Ahmet K.",
    rewiews_content: "Beklediğimden daha kötü bir deneyim.",
    rate: 2,
  },
  {
    date: new Date(2024, 8, 10),
    user_name: "Murat K.",
    rewiews_content: "Ürün tam olarak açıklamalara uymuyor.",
    rate: 1,
  },
  {
    date: new Date(2024, 7, 5),
    user_name: "Doruk K.",
    rewiews_content: "Kesinlikle tavsiye etmiyorum.",
    rate: 1,
  },
];

export default function SimpleSlider() {
  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    const fetchRandomPhotos = async () => {
      const images = await Promise.all(reviews.map(() => randomPhoto()));
      setRandomImages(images);
    };
    fetchRandomPhotos();
  }, []);

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
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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

  const randomPhoto = async () => {
    const response = await axios.get("https://randomuser.me/api/?gender=male");
    const randomData = response.data;
    const image = randomData.results[0].picture.large;
    return image;
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
                  <img
                    src={randomImages[index]}
                    alt="User"
                    style={{
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                    }}
                  />
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

import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/NavbarComp";
import { useSelector } from "react-redux";

import { setSelectedProduct } from "../../redux/slices/productSlice";
import { useDispatch } from "react-redux";
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import { CiFaceSmile } from "react-icons/ci";
import "./ProductDetail.scss";
// import { addToCart } from "/src/redux/slices/basketSlice";
import Footer from "/src/components/footer/Footer";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { SiAdguard } from "react-icons/si";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  addToCart,
  decreaseItemCount,
  increaseItemCount,
} from "../../redux/slices/basketSlice";
const Star = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? "#FFD700" : "none"}
    stroke={filled ? "#FFD700" : "#ccc"}
    className="star-icon"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    />
  </svg>
);
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
  const [averageRating, setAverageRating] = useState(0);
  const [ratingDistribution, setRatingDistribution] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 8;
  const { id } = useParams();
  const { description, title, price, thumbnail } = selectedProduct || {};
  const data = selectedProduct;
  const [count, setCount] = useState(1);

  useEffect(() => {
    const totalReviews = reviews.length;
    const avgRating =
      reviews.reduce((sum, review) => sum + review.rate, 0) / totalReviews;
    setAverageRating(avgRating);

    const distribution = [5, 4, 3, 2, 1].map((stars) => {
      const count = reviews.filter((review) => review.rate === stars).length;
      return {
        stars,
        count,
        percentage: (count / totalReviews) * 100,
      };
    });
    setRatingDistribution(distribution);
  }, []);

  // Ürün Ekleme  --------------------
  const addToBasketCart = () => {
    if (count <= 0) return;
    const payload = {
      id,
      price,
      title,
      description,
      thumbnail,
      count: count,
    };
    dispatch(addToCart(payload));
    console.log("Ürün sepete eklendi:", payload);
  };

  // Adet arttırma
  const handleIncreaseCount = () => {
    setCount(count + 1);
    dispatch(increaseItemCount({ id })); // Adet artırma
  };
  // Adet  azaltma
  const handleDecreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
      dispatch(decreaseItemCount({ id })); // Adet azaltma
    }
  };

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getProductById = useCallback(() => {
    const product = products.find((data) => data.id == id);
    if (product && product !== selectedProduct) {
      dispatch(setSelectedProduct(product));
    }
  }, [dispatch, id, products, selectedProduct]);

  useEffect(() => {
    getProductById();
    window.scrollTo(0, 0);
  }, [getProductById]);

  useEffect(() => {
    if (!data && id) {
      getProductById();
    }
  }, [data, id, getProductById]);

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
              <div className="d-flex column-gap-3 my-4 justify-content-center">
                <div className="increase-decrease-content">
                  <IoMdAdd className="fs-3" onClick={handleIncreaseCount} />
                </div>
                <div className="fw-bold">{count}</div>
                <div className="increase-decrease-content">
                  <FiMinus className="fs-3" onClick={handleDecreaseCount} />
                </div>
                <div className="text-end">
                  <Button className="btn-warning" onClick={addToBasketCart}>
                    Sepete Ekle
                  </Button>
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
                    ? "6 Ay Garantili"
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
        <div className="product-reviews">
          <div className="overall-rating">
            <div className="rating-summary">
              <h2 className="average-rating">{averageRating.toFixed(1)}</h2>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    filled={star <= Math.round(averageRating)}
                    large={true}
                  />
                ))}
              </div>
              <p className="total-reviews">{reviews.length} YORUMA GÖRE</p>
            </div>
            <div className="rating-distribution">
              {ratingDistribution.map((rating) => (
                <div key={rating.stars} className="rating-bar">
                  <span className="star-count">
                    {rating.stars} <Star filled={true} />
                  </span>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${rating.percentage}%` }}
                    ></div>
                  </div>
                  <span className="review-count">({rating.count})</span>
                </div>
              ))}
            </div>
          </div>
          <div className="review-list">
            {currentReviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <div>
                    <div className="star-rating">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} filled={star <= review.rate} />
                      ))}
                    </div>
                    <span className="verified-buyer">DOĞRULANMIŞ SATICI</span>
                    <h3 className="reviewer-name">{review.user_name}</h3>
                  </div>
                  <span className="review-date">
                    {review.date.toLocaleDateString("tr-TR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "2-digit",
                    })}
                  </span>
                </div>
                <p className="review-content">{review.rewiews_content}</p>
              </div>
            ))}
          </div>
          <div className="pagination">
            {Array.from(
              { length: Math.ceil(reviews.length / reviewsPerPage) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`page-number ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
export default ProductDetail;

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Col,
  Row,
  Container,
  Card,
  CardBody,
  CardHeader,
  CardText,
  Button,
  CardImg,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { MdShoppingCartCheckout } from "react-icons/md";
import "./products.scss";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const navigate = useNavigate();
  const { category } = useParams();

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  useEffect(() => {
    const getAllProducts = async (categoryParams) => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/category/${categoryParams}?limit=30&delay=120
`
        );
        console.log(response.data); // Yanıtı kontrol et
        const data = response.data.products || []; // Veriyi kontrol et
        setProducts(data);
      } catch (error) {
        console.error(
          "API Hatası:",
          error.response ? error.response.data : error.message
        );
      } finally {
        setLoading(false);
      }
    };
    getAllProducts(category);
  }, [category]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="bouncing-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Container className="product-container mt-4">
        <Row>
          {products?.slice(0, visibleCount).map((item) => (
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
                  <CardImg className="card-img-overlay" src={item.thumbnail} />
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
          <Button className="btn btn-warning load-btn" onClick={loadMore}>
            Devamı.....
          </Button>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Product;

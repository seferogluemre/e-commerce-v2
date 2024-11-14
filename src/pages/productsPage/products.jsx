import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {
  Col,
  Row,
  Container,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardImg,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { MdShoppingCartCheckout } from "react-icons/md";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { category } = useParams();

  useEffect(() => {
    const getAllProducts = async (categoryParams) => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/category/${categoryParams}`
        );
        const data = response.data.products;
        setProducts(data);
      } catch (error) {
        console.error(error);
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
      <Container>
        <Row>
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
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Product;

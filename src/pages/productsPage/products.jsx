import Navbar from "/src/components/navbar/NavbarComp";
import Footer from "/src/components/footer/Footer";
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
import { FaHeartCircleCheck, FaHeartCircleMinus } from "react-icons/fa6";
import { MdShoppingCartCheckout } from "react-icons/md";
import "./products.scss";
import {
  addToFavorite,
  removeFavorites,
} from "../../redux/slices/favoriteSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const navigate = useNavigate();
  const { category } = useParams();
  const { favoriteProducts } = useSelector((store) => store.favorites);
  const dispatch = useDispatch();

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  useEffect(() => {
    const getAllProducts = async (categoryParams) => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/category/${categoryParams}?limit=30&delay=120`
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

  const handleFavorite = (product) => {
    const findProduct = favoriteProducts.find((prev) => prev.id === product.id);
    if (findProduct) {
      dispatch(removeFavorites(product));
    } else {
      dispatch(addToFavorite(product));
    }
  };

  return (
    <>
      <Navbar />
      <Container className="product-container mt-4">
        <Row>
          {products
            ?.slice(0, visibleCount)
            .map(({ id, brand, title, price, thumbnail }) => {
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
                          className="fs-3 favorite-icon"
                          onClick={() =>
                            handleFavorite({
                              id,
                              brand,
                              title,
                              price,
                              thumbnail,
                            })
                          }
                        />
                      ) : (
                        <FaHeartCircleCheck
                          className="fs-3 favorite-icon"
                          onClick={() =>
                            handleFavorite({
                              id,
                              brand,
                              title,
                              price,
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

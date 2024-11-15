import { useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
  CardBody,
  Button,
  Card,
  CardImg,
  CardText,
  CardHeader,
} from "react-bootstrap";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/slices/productSlice";
import "./Products.scss";
import { useNavigate } from "react-router-dom";
import { MdShoppingCartCheckout } from "react-icons/md";

function ProductsLst() {
  const { products, loading } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

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

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="">
      <Container>
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
        </Row>
      </Container>
      {visibleCount < products.length && (
        <div className="text-center my-4">
          <Button onClick={loadMore} variant="primary">
            Devamı Yükle
          </Button>
        </div>
      )}
    </div>
  );
}

export default ProductsLst;

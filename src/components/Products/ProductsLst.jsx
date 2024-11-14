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
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/slices/productSlice";
import "./Products.scss";
import { useNavigate } from "react-router-dom";

function ProductsLst() {
  const { products, loading } = useSelector((store) => store.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  console.log(products);

  return (
    <div className="">
      <div className="text-center d-flex justify-content-center"></div>
      <Container>
        <Row>
          {products?.map((item) => (
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
                    {item.price}
                  </CardText>
                  <a
                    className="btn btn-danger"
                    id="addBtn"
                    onClick={() => navigate(`/product-detail/${item.id}`)}
                  >
                    Ekle
                  </a>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ProductsLst;

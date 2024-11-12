import { useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
  CardBody,
  Card,
  CardImg,
  CardText,
  CardHeader,
} from "react-bootstrap";
import { MdOutlineAddShoppingCart } from "react-icons/md";
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
    <div>
      <div className="text-center d-flex justify-content-center"></div>
      <Container>
        <Row>
          {products?.map((item) => (
            <Col
              lg="4"
              md="6"
              xl="3"
              sm="6"
              className="d-flex flex-column align-items-center justify-content-center"
              key={item.id}
            >
              <Card className="card">
                <CardHeader className="card-header">
                  <CardImg className="card-img-overlay" src={item.thumbnail} />
                </CardHeader>
                <MdOutlineAddShoppingCart
                  className="fs-4 addBtn"
                  onClick={() => navigate(`/product-detail/${item.id}`)}
                />
                <CardBody className="card-body">
                  <CardText className="card-text-price py-2">
                    <strong>{item.brand}</strong>
                  </CardText>
                  <CardText className="card-text-price py-2">
                    {item.title}$
                  </CardText>
                  <CardText className="card-text-price py-2">
                    {item.price}$
                  </CardText>
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

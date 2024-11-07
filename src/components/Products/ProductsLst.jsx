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
  Spinner,
  CardFooter,
} from "react-bootstrap";
import { IoBagAdd } from "react-icons/io5";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/slices/productSlice";
import "./Products.scss";

function ProductsLst() {
  const { products, loading } = useSelector((store) => store.products);
  const dispatch = useDispatch();

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

  return (
    <div>
      <Container>
        <Row>
          {products.map((item) => (
            <Col
              lg="4"
              md="4"
              xl="3"
              sm="6"
              className="d-flex flex-column align-items-center justify-content-center"
              key={item.id}
            >
              <Card className="card">
                <CardHeader className="card-header">
                  <CardImg className="card-img-overlay" src={item.thumbnail} />
                </CardHeader>
                <IoBagAdd className="fs-4 addBtn" />
                <CardBody className="card-body">
                  <CardText className="card-text-price">{item.title}</CardText>
                  <CardText className="card-text fw-bold ">
                    {item.price.toFixed(3)}$
                  </CardText>
                </CardBody>
                {item.seller && (
                  <CardFooter className="fw-light card-footer">
                    <p className="seller-text fw-bold">
                      {" "}
                      Satıcı:{" "}
                      <p className="text-muted fw-medium">
                        {item.seller.nickname || "Satıcı Bulunamadı /:"}
                      </p>
                    </p>
                  </CardFooter>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ProductsLst;

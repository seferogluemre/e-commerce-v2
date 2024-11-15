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
import { Link } from "react-router-dom";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/slices/productSlice";
import "./Products.scss";
import { MdShoppingCartCheckout } from "react-icons/md";
import { addToFavorite } from "../../redux/slices/favoriteSlice";

function ProductsLst() {
  const { products, loading } = useSelector((store) => store.products);
  const dispatch = useDispatch();
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

  const handleFavorites = (product) => {
    dispatch(addToFavorite(product));
  };

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div>
      <Container style={{ marginTop: "90px" }}>
        <div className="text-center pb-5 fs-3">Öne Çıkanlar</div>
        <Row>
          {products
            ?.slice(0, visibleCount)
            .map(({ id, brand, thumbnail, title, price }) => (
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
                    <a>
                      <FaHeartCircleCheck
                        className="fs-1 favorite-icon"
                        onClick={() => {
                          handleFavorites({
                            id,
                            price,
                            title,
                            brand,
                            thumbnail,
                          });
                        }}
                      />
                    </a>
                  </CardHeader>
                  <CardBody className="card-body">
                    <CardText className="card-text-price py-2">
                      <strong>{brand}</strong>
                    </CardText>
                    <CardText className="card-text-price py-2">
                      {title}
                    </CardText>
                    <CardText className="card-text-price py-2">
                      {price}$
                    </CardText>
                    <Link
                      className="btn btn-danger"
                      id="addBtn"
                      to={"/product-detail/" + id}
                    >
                      <MdShoppingCartCheckout className="fs-3 mx-1" />
                      Ekle
                    </Link>
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

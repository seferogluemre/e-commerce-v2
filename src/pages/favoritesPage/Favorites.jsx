import { useSelector } from "react-redux";
import Footer from "/src/components/footer/Footer";
import Navbar from "/src/components/navbar/navbar";
import ReviewsSlider from "/src/components/reviewsSlider/ReviewsSlider";
import {
  Col,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardText,
} from "react-bootstrap";
import { MdShoppingCartCheckout } from "react-icons/md";
import "./Favorites.scss";
import { useDispatch } from "react-redux";
import {
  addToFavorite,
  removeFavorites,
} from "../../redux/slices/favoriteSlice";
import { FaHeartCircleCheck, FaHeartCircleMinus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Favorites() {
  const { favoriteProducts } = useSelector((store) => store.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleFavorites = (product) => {
    const findProduct = favoriteProducts.find((prev) => prev.id === product.id);
    if (findProduct) {
      dispatch(removeFavorites(product));
    } else dispatch(addToFavorite(product));
  };
  return (
    <>
      <Navbar />
      <div className="container p-4 favorites-container">
        <h1 className="h2 fw-bold mb-4">Favori Ürünlerim</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {favoriteProducts.length > 0 ? ( // {{ edit_1 }}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              {favoriteProducts.map(
                ({ thumbnail, id, price, title, brand }) => {
                  const isFavorite = favoriteProducts.find(
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
                          <CardImg
                            className="card-img-overlay"
                            src={thumbnail}
                          />
                        </CardHeader>

                        <CardBody className="card-body">
                          {isFavorite ? (
                            <FaHeartCircleMinus
                              className="fs-1 favorite-icon"
                              style={{ color: "red" }} // Favorideyse kırmızı
                              onClick={() =>
                                handleFavorites({
                                  id,
                                  price,
                                  title,
                                  brand,
                                  thumbnail,
                                })
                              }
                            />
                          ) : (
                            <FaHeartCircleCheck
                              className="fs-1 favorite-icon"
                              onClick={() =>
                                handleFavorites({
                                  id,
                                  price,
                                  title,
                                  brand,
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
                }
              )}
            </div>
          ) : (
            <div className="text-center py-5 my-5">
              <h3>Favori ürününüz bulunmamaktadır ☹️... </h3>
            </div>
          )}
        </div>
      </div>
      <ReviewsSlider />

      <Footer />
    </>
  );
}

export default Favorites;

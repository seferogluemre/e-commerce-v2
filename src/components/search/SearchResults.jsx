import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Col,
  Card,
  CardText,
  CardHeader,
  CardImg,
  CardBody,
} from "react-bootstrap";
import { MdShoppingCartCheckout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function SearchResults() {
  const { search } = useParams();

  const fetchProducts = useSelector((store) => store.products.fetchProducts);

  const filteredProducts = fetchProducts.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });

  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid my-5">
        <div className="container">
          <div className="row">
            {filteredProducts.length > 0 ? ( // {{ edit_1 }}
              <div className="row d-flex justify-content-center">
                {filteredProducts.map(
                  ({ thumbnail, id, price, title, brand }) => {
                    return (
                      <Col
                        lg="4"
                        md="6"
                        xxl="3"
                        xl="4"
                        sm="6"
                        className="d-flex col-sm-6 mx-3 flex-column align-items-center justify-content-center"
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
                <h2 className="fs-1">{search} Adlı Sonuç Bulunamadı ☹️... </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResults;

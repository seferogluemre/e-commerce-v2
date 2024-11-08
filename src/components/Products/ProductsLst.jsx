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
  CardFooter,
  FormSelect,
} from "react-bootstrap";
import { IoBagAdd } from "react-icons/io5";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/slices/productSlice";
import "./Products.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Fiyatları türk tl karşılık formatlama
const formatPrice = (price) => {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const knownBrands = ["Lenovo", "Asus", "Hp", "Acer", "Dell", "Samsung"];

function ProductsLst() {
  const [selectedBrand, setSelectedBrand] = useState("Hepsi");
  const { products, loading } = useSelector((store) => store.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Burda ise bu fonksiyn dışardan title alıp bizim ürünün başlıgı içerisinde bizim hazırladıgımız ürünlerin başlıkları içeriyorsa bunu deger dönüyor
  const extractBrand = (title) => {
    const foundBrand = knownBrands.find((brand) => title.includes(brand));
    return foundBrand || "Hepsi";
  };

  // Burda ise ürünlerimiz üzerinde filtreleme yapıyoruz. Seçenek hepsi ise veya bizim extrBrn gelcek olan title degeri seçilen seçenege eşit ise filtreleme çalışıyor
  const filteredProducts = products.filter((product) => {
    return (
      selectedBrand === "Hepsi" || extractBrand(product.title) === selectedBrand
    );
  });

  // Bütün ürünleri gezerek extractBranda title degerini parametre gönderdik
  const uniqueBrands = [
    "Hepsi",
    ...new Set(products.map((product) => extractBrand(product.title))),
  ];

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
      <div className="text-center">
        <FormSelect
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          {uniqueBrands.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </FormSelect>
      </div>
      <Container>
        <Row>
          {filteredProducts.map((item) => (
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
                <IoBagAdd
                  className="fs-4 addBtn"
                  onClick={() => navigate(`/product-detail/${item.id}`)}
                />
                <CardBody className="card-body">
                  <CardText className="card-text-price">{item.title}</CardText>
                  <CardText className="card-text fw-bold">
                    {formatPrice(item.price)}
                  </CardText>
                </CardBody>
                {item.seller && (
                  <CardFooter className="fw-light card-footer ">
                    <p className="seller-text fw-bold">
                      Satıcı:
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

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
import { useParams } from "react-router-dom";

// Fiyatları türk tl karşılık formatlama
const formatPrice = (price) => {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

// Kategori bazlı marka listeleri
const brandsByCategory = {
  laptop: ["Lenovo", "Asus", "Hp", "Acer", "Dell", "Samsung"],
  clothes: ["Pack", "Buzo", "Remeras", "Campera"],
  phones: ["Apple", "İphone", "Refabricado"],
  care: [
    "Disco",
    "Agua",
    "Karseel",
    "Mist Facial",
    "Cicatricure",
    "Gel Micelar",
  ],
};

function ProductsLst() {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const { products, loading } = useSelector((store) => store.products);
  const { category } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Aktif kategorinin markalarını al
  const currentBrands = brandsByCategory[category] || brandsByCategory.laptop;

  // Marka çıkarma fonksiyonunu güncelle
  const extractBrand = (title) => {
    const foundBrand = currentBrands.find((brand) =>
      title.toLowerCase().includes(brand.toLowerCase())
    );
    return foundBrand || "All";
  };

  // Filtreleme işlemi -----
  const filteredProducts = products.filter((product) => {
    return (
      selectedBrand === "All" || extractBrand(product.title) === selectedBrand
    );
  });

  // Kategori değiştiğinde seçili markayı sıfırla
  useEffect(() => {
    setSelectedBrand("All");
  }, [category]);

  // API çağrısını güncelle - category değiştiğinde tekrar çağrılsın
  useEffect(() => {
    dispatch(getAllProducts(category || "laptop"));
  }, [dispatch, category]);

  // Bütün ürünleri gezerek extractBranda title degerini parametre gönderdik
  const uniqueBrands = [
    "All",
    ...new Set(products.map((product) => extractBrand(product.title))),
  ];

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
      <div className="text-center d-flex justify-content-center">
        <FormSelect
          value={selectedBrand}
          className="mb-5 filter-selectbox"
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

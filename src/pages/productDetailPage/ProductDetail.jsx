import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { setSelectedProduct } from "../../redux/slices/productSlice";
import { useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import { CiFaceSmile } from "react-icons/ci";
import { BiSmile } from "react-icons/bi";
import "./ProductDetail.scss";

function ProductDetail() {
  const { products, selectedProduct } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = selectedProduct;
  console.log(data);

  const getProductById = () => {
    products &&
      products.map((data) => {
        if (data.id == id) {
          dispatch(setSelectedProduct(data));
        }
      });
  };

  useEffect(() => {
    getProductById();
  }, []);

  return (
    <div>
      <Navbar />
      <Container>
        {data && (
          <Row key={data.id}>
            <Col xl="6" lg="6" md="6" sm="12">
              <div className="product-content-image">
                <img src={data.thumbnail} className="image" />
              </div>
            </Col>
            <Col xl="6" lg="6" md="6" sm="12">
              <div className="d-flex flex-row column-gap-1">
                <FaStar className="text-warning fs-4" />
                <FaStar className="text-warning fs-4" />
                <FaStar className="text-warning fs-4" />
                <FaStar className="text-warning fs-4" />
                <FaStar className="text-warning fs-4" />
                <strong>+20 Yorum</strong>
              </div>
              <div>{/* Ürün Markası gelcek */}</div>
              <div>{/* Ürün başlıgı gelce */}</div>
              <div>{/* Fiyatı gelcek */}</div>
              <div>
                <div>{/* Adet artırma azaltma gelcek */}</div>
                <div>{/* ekleme butonu gelcek */}</div>
              </div>
              <div className="d-flex justify-content-center align-items-center column-gap-2">
                <p>
                  <CiFaceSmile />
                  1.000.000+ Mutlu Müşteri
                </p>
                <p>
                  <FcApproval />
                  Memnuniyet Garantisi
                </p>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default ProductDetail;

import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ProductContent.scss";

function ProductContent() {
  // Kategori Ürünlerini tutacak arrayleri obje içerisinde tanımladık
  const [products, setProducts] = useState({
    laptops: [],
    clothings: [],
    furnitures: [],
    tablets: [],
    cares: [],
    phones: [],
    gardens: [],
    watches: [],
    magazines: [],
  });

  useEffect(() => {
    const getAllFetchProducts = async () => {
      try {
        // Her Kategoriden Ürünlere İstek atıp limit 5 diyerek 5 tanesini alıyoruz
        const responses = await Promise.all([
          // İstekler
          axios.get("https://api.mercadolibre.com/sites/MLA/search", {
            params: {
              q: "laptop",
              limit: 8,
            },
          }),
          axios.get("https://api.mercadolibre.com/sites/MLA/search", {
            params: {
              q: "clothing",
              limit: 8,
            },
          }),
          axios.get("https://api.mercadolibre.com/sites/MLA/search", {
            params: {
              q: "furniture",
              limit: 8,
            },
          }),
          axios.get("https://api.mercadolibre.com/sites/MLA/search", {
            params: {
              q: "tablets",
              limit: 8,
            },
          }),
          axios.get("https://api.mercadolibre.com/sites/MLA/search", {
            params: {
              q: "care",
              limit: 8,
            },
          }),
          axios.get("https://api.mercadolibre.com/sites/MLA/search", {
            params: {
              q: "phones",
              limit: 8,
            },
          }),
          axios.get("https://api.mercadolibre.com/sites/MLA/search", {
            params: {
              q: "garden",
              limit: 8,
            },
          }),
          axios.get("https://api.mercadolibre.com/sites/MLA/search", {
            params: {
              q: "watches",
              limit: 8,
            },
          }),
          axios.get("https://api.mercadolibre.com/sites/MLA/search", {
            params: {
              q: "magazines",
              limit: 8,
            },
          }),
        ]);
        // Üstte her bir ürün için gönderdigimiz axios isteklerinden  gelen verileri üstte tanımladıgımız state'in içindeki kategori arraylerine verdik
        setProducts({
          laptops: responses[0].data.results,
          clothings: responses[1].data.results,
          furnitures: responses[2].data.results,
          tablets: responses[3].data.results,
          cares: responses[4].data.results,
          phones: responses[5].data.results,
          gardens: responses[6].data.results,
          watches: responses[7].data.results,
          magazines: responses[8].data.results,
        });
      } catch (error) {
        console.log("Hatanız Var Kardeşim:" + error);
      }
    };
    getAllFetchProducts();
  }, []);

  return (
    <>
      <div className="container-fluid">
        {/* Kategori 1 Container */}
        <Container className="product-container">
          <div className="text-center">
            <h3>Laptop</h3>
          </div>
          <Row>
            {products.laptops.map((product) => (
              <Col xl="2" sm="6" lg="3" md="6" key={product.id}>
                <img src={product.thumbnail} className="product-image" />
              </Col>
            ))}
          </Row>
        </Container>
        {/* Kategori 2 Container */}
        <Container className="product-container">
          <div className="text-center">
            <h3>Giyim</h3>
          </div>
          <Row>
            {products.clothings.map((product) => (
              <Col xl="2" sm="6" lg="3" md="6" key={product.id}>
                <img src={product.thumbnail} className="product-image" />
              </Col>
            ))}
          </Row>
        </Container>
        {/* Kategori 3 Container */}
        <Container className="product-container">
          <div className="text-center">
            <h3>Mobilya</h3>
          </div>
          <Row>
            {products.furnitures.map((product) => (
              <Col xl="2" sm="6" lg="3" md="6" key={product.id}>
                <img src={product.thumbnail} className="product-image" />
              </Col>
            ))}
          </Row>
        </Container>
        {/* Kategori 4 Container */}
        <Container className="product-container">
          <div className="text-center">
            <h3>Tablet</h3>
          </div>
          <Row>
            {products.tablets.map((product) => (
              <Col xl="2" sm="6" lg="3" md="6" key={product.id}>
                <img src={product.thumbnail} className="product-image" />
              </Col>
            ))}
          </Row>
        </Container>
        {/* Kategori 5 Container */}
        <Container className="product-container">
          <div className="text-center">
            <h3>Cilt Bakım</h3>
          </div>
          <Row>
            {products.cares.map((product) => (
              <Col xl="2" sm="6" lg="3" md="6" key={product.id}>
                <img src={product.thumbnail} className="product-image" />
              </Col>
            ))}
          </Row>
        </Container>
        {/* Kategori 6 Container */}
        <Container className="product-container">
          <div className="text-center">
            <h3>Telefon</h3>
          </div>
          <Row>
            {products.phones.map((product) => (
              <Col xl="2" sm="6" lg="3" md="6" key={product.id}>
                <img src={product.thumbnail} className="product-image" />
              </Col>
            ))}
          </Row>
        </Container>
        {/* Kategori 7 Container */}
        <Container className="product-container">
          <div className="text-center">
            <h3>Bahçe </h3>
          </div>
          <Row>
            {products.gardens.map((product) => (
              <Col xl="2" sm="6" lg="3" md="6" key={product.id}>
                <img src={product.thumbnail} className="product-image" />
              </Col>
            ))}
          </Row>
        </Container>
        {/* Kategori 8 Container */}
        <Container className="product-container">
          <div className="text-center">
            <h3>Aksesuar Saat</h3>
          </div>
          <Row>
            {products.watches.map((product) => (
              <Col xl="2" sm="6" lg="3" md="6" key={product.id}>
                <img src={product.thumbnail} className="product-image" />
              </Col>
            ))}
          </Row>
        </Container>
        {/* Kategori 8 Container */}
        <Container className="product-container">
          <div className="text-center">
            <h3>Aksesuar Saat</h3>
          </div>
          <Row>
            {products.magazines.map((product) => (
              <Col xl="2" sm="6" lg="3" md="6" key={product.id}>
                <img
                  src={product.thumbnail}
                  className="product-image img-fluid "
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ProductContent;

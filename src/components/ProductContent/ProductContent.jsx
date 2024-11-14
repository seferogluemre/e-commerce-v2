import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ProductContent.scss";
// import { FaArrowRight } from "react-icons/fa6";

function ProductContent() {
  const [products, setProducts] = useState({
    laptops: [],
    furniture: [],
    mensShirts: [],
    mensWatches: [],
    womensJewellery: [],
    motorcycle: [],
  });

  useEffect(() => {
    const getAllFetchProducts = async () => {
      try {
        const responses = await Promise.all([
          axios.get("https://dummyjson.com/products/category/laptops?limit=20"),
          axios.get(
            "https://dummyjson.com/products/category/furniture?limit=20"
          ),
          axios.get(
            "https://dummyjson.com/products/category/mens-shirts?limit=20"
          ),
          axios.get(
            "https://dummyjson.com/products/category/mens-watches?limit=20"
          ),
          axios.get(
            "https://dummyjson.com/products/category/womens-jewellery?limit=20"
          ),
          axios.get(
            "https://dummyjson.com/products/category/motorcycle?limit=20"
          ),
        ]);
        setProducts({
          laptops: responses[0].data.products,
          furniture: responses[1].data.products,
          mensShirts: responses[2].data.products,
          mensWatches: responses[3].data.products,
          womensJewellery: responses[4].data.products,
          motorcycle: responses[5].data.products,
        });
      } catch (error) {
        console.log("Hata:", error);
      }
    };
    getAllFetchProducts();
  }, []);

  const categories = [
    { title: "Laptoplar", products: products.laptops },
    { title: "Mobilya", products: products.furniture },
    { title: "Erkek Gömlekleri", products: products.mensShirts },
    { title: "Erkek Saatleri", products: products.mensWatches },
    { title: "Kadın Takıları", products: products.womensJewellery },
    { title: "Motorsiklerler", products: products.motorcycle },
  ];

  return (
    <div className="container-fluid main-container">
      <div className="text-center">
        <h2>Kategorilerimiz</h2>
      </div>

      {categories.map((category) => (
        <Container key={category.title} className="product-container">
          <div className="text-center">
            <h3>{category.title}</h3>
          </div>
          <Row>
            {category.products.map((product) => (
              <Col xl="2" sm="6" lg="3" md="6" key={product.id}>
                <img
                  src={product.thumbnail}
                  className="product-image"
                  alt={product.title}
                />
              </Col>
            ))}
            {category.products.map((product) => (
              <Col xl="2" sm="6" lg="3" md="6" key={product.id}>
                <img
                  src={product.thumbnail}
                  className="product-image"
                  alt={product.title}
                />
              </Col>
            ))}
          </Row>
        </Container>
      ))}
    </div>
  );
}

export default ProductContent;

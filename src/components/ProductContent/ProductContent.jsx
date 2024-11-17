import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ProductContent.scss";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProductContent() {
  const [products, setProducts] = useState({
    laptops: [],
    womenClothes: [],
    mensShirts: [],
    mensWatches: [],
    womensJewellery: [],
    motorcycle: [],
  });

  const navigate = useNavigate();

  useEffect(() => {
    const getAllFetchProducts = async () => {
      try {
        const responses = await Promise.all([
          axios.get("https://dummyjson.com/products/category/laptops?limit=20"),
          axios.get(
            "https://dummyjson.com/products/category/womens-shoes?limit=20"
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
          womenClothes: responses[1].data.products,
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
    { title: "Kadın Giyim", products: products.womenClothes },
    { title: "Erkek Gömlekleri", products: products.mensShirts },
    { title: "Erkek Saatleri", products: products.mensWatches },
    { title: "Kadın Takıları", products: products.womensJewellery },
    { title: "Motorsiklerler", products: products.motorcycle },
  ];

  return (
    <>
      <div className="container-fluid main-container">
        <div className="text-center">
          <h2 className="text-danger pb-4">Kategorilerimiz</h2>
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
                    onClick={() => navigate("/product-detail/" + product.id)}
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
              <Link
                className="next-btn "
                to={`/category/${category.title
                  .replace("Laptoplar", "laptops")
                  .replace("Kadın Giyim", "womens-shoes")
                  .replace("Erkek Gömlekleri", "mens-shirts")
                  .replace("Erkek Saatleri", "mens-watches")
                  .replace("Kadın Takıları", "womens-jewellery")
                  .replace("Motorsiklerler", "motorcycle")}`}
              >
                Devamı.....
              </Link>
            </Row>
          </Container>
        ))}
      </div>
    </>
  );
}

export default ProductContent;

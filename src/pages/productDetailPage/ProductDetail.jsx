import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { setSelectedProduct } from "../../redux/slices/productSlice";
import { useDispatch } from "react-redux";

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
    </div>
  );
}

export default ProductDetail;

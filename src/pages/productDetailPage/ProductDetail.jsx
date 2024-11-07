import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";

function ProductDetail() {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <Navbar />
      {}
    </div>
  );
}

export default ProductDetail;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/navbar/navbar";
import { getAllProducts } from "./redux/slices/productSlice";

function App() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      {loading ? (
        <p>Loading...</p> // Yükleniyor durumu
      ) : error ? (
        <p>Error: {error}</p> // Eğer hata varsa göster
      ) : products.length === 0 ? (
        <p>No products available</p> // Ürün yoksa göster
      ) : (
        products.map((item) => <p key={item.id}>{item.title}</p>) // Ürünler varsa göster
      )}
    </>
  );
}

export default App;

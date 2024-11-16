import "./navbar.scss";
import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaHeartCircleBolt } from "react-icons/fa6";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { updateCartQuantity } from "../../redux/slices/basketSlice";

function NavbarComp() {
  // const [quantity, setQuantity] = useState(1);
  // const dispatch = useDispatch();

  // const handleQuantityChange = (newQuantity) => {
  //   if (newQuantity < 1) return; // Miktar 1'den az olamaz
  //   setQuantity(newQuantity);
  //   // Sepetteki ürünü güncelle
  //   dispatch(updateCartQuantity({ id: productId, quantity: newQuantity }));
  // };

  return (
    <div>
      <Navbar expand="lg" className="shadow-lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/src/components/images/logo-removeBg-preview.png"
              width={90}
              height={95}
              style={{ zIndex: 1 }}
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
            style={{ zIndex: 2 }}
          >
            <Link className="nav-link px-4" to={"/category"}>
              Kategoriler
            </Link>
            <Link to={"/favorites"}>
              <FaHeartCircleBolt className="fs-1 mx-2" />
            </Link>
            {/* <div className="d-flex flex-column mx-auto p-4">
  <div className="d-flex align-items-center text-center flex-column gap-3 3 border rounded mb-4">
    <div>
      <img
        src="/src/components/images/image2.jpeg"
        alt="PRE-WORKOUT SUPREME"
        width={200}
        height={200}
        className="object-fit-contain"
      />
    </div>
    <div className="">
      <div className="fw-semibold">PRE-WORKOUT SUPREME</div>
      <div className="small text-muted">Tigers Blood</div>
      <div className="small text-muted">280g</div>
    </div>
    <div className="d-flex flex-column align-items-end gap-2 text-center">
      <div className="fw-semibold text-center">
        <p>449 TL</p>
      </div>
      <div className="d-flex align-items-center border rounded">
        <Button variant="light" size="sm" aria-label="Decrease quantity">
          -
        </Button>
        <span className="px-3 py-1 text-center" style={{ minWidth: "3rem" }}>
          {quantity}
        </span>
        <Button variant="light" size="sm" aria-label="Increase quantity">
          +
        </Button>
      </div>
    </div>
  </div>

  <div className="d-flex align-items-center justify-content-between p-3 bg-light rounded mb-4">
    <div className="fw-semibold">TOPLAM 449 TL</div>
  </div>

  <Button variant="primary" className="w-100 py-2 fw-semibold">
    DEVAM ET
  </Button>
</div>; */}

            <IoCartOutline className="fs-1" />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;

import "./navbar.scss";
import { Navbar, Container, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import Drawer from "react-modern-drawer";
import { IoMdTrash } from "react-icons/io";
import "react-modern-drawer/dist/index.css";
import { FaHeartCircleBolt } from "react-icons/fa6";
import { useState } from "react";
import { useDispatch } from "react-redux";
import BrandPhoto from "/public/images/logo-removeBg-preview.png";
import {
  decreaseItemCount,
  removeFromCart,
  increaseItemCount,
} from "../../redux/slices/basketSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect } from "react";
function NavbarComp() {
  const [isOpen, setIsOpen] = useState(false);
  const [sideIsOpen, setSideIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null); // Dropdown için referans
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const toggleSidebar = (e) => {
    e.preventDefault();
    setSideIsOpen((prevState) => !prevState);
  };

  const removeItem = (id) => {
    dispatch(removeFromCart({ id }));
  };
  const handleDecreaseCount = (id) => {
    dispatch(decreaseItemCount({ id }));
  };
  const handleIncreaseCount = (id) => {
    dispatch(increaseItemCount({ id }));
  };

  const carts = useSelector((store) => store.carts.items);
  const cartLength = carts.length;
  const totalPrice = useSelector((store) => store.carts.totalPrice);

  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/` + searchTerm);
    }
  };
  const fetchProducts = useSelector((store) => store.products.fetchProducts);

  const filteredProducts = fetchProducts.filter((product) => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  // Dropdown açılmasını kontrol et
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSearchTerm(""); // Arama terimini sıfırlayarak dropdown'u kapat
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  return (
    <div>
      <Navbar expand="lg" className="shadow-lg">
        <Container>
          <Navbar.Brand href="/" className="">
            <img
              src={BrandPhoto}
              className="brand-image"
              width={90}
              height={95}
              style={{ zIndex: 1 }}
              alt="Logo"
            />
            <GiHamburgerMenu
              onClick={toggleSidebar}
              className="fs-5 d-xxl-none d-lg-none"
            />
          </Navbar.Brand>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end navbar-collapse collapse"
            style={{ zIndex: 2 }}
          >
            <input
              type="text"
              className="form-control "
              placeholder="Arama...."
              value={searchTerm}
              onKeyDown={handleSearchSubmit}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Link className="nav-link px-4 category-link" to={"/category"}>
              Kategoriler
            </Link>
            <Link to={"/favorites"}>
              <FaHeartCircleBolt className="fs-1 mx-2" />
            </Link>

            <IoCartOutline className="fs-1" onClick={toggleDrawer} />
            <Badge
              position="absolute"
              borderRadius="circle"
              color="black"
              className="text-black rounded-circle py-1 px-2 badge-content"
              fontSize="xs"
            >
              {cartLength}
            </Badge>
          </Navbar.Collapse>

          {searchTerm.length != 0 && filteredProducts.length > 0 && (
            <div className="dropdown" ref={dropdownRef}>
              {/* Dropdown referansı */}
              {filteredProducts.map(({ id, thumbnail, price, title }) => (
                <div
                  key={id}
                  className="dropdown-item"
                  onClick={() => navigate("/product-detail/" + id)}
                >
                  <div>
                    <img src={thumbnail} alt={title} className="img" />
                  </div>
                  <div className="columnTwo">
                    <h3
                      style={{
                        fontSize: "14px",
                        paddingRight: "80px",
                        height: "30px",
                        textWrap: "wrap",
                      }}
                    >
                      Ürün adı: {title}
                    </h3>
                    <small style={{ fontSize: "13px", textAlign: "start" }}>
                      Ürün Fiyat:
                      <strong
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "16px",
                        }}
                      >
                        {price}
                      </strong>
                    </small>
                  </div>
                </div>
              ))}
            </div>
          )}
          <Drawer
            open={sideIsOpen}
            direction="left"
            className="bla bla bla bg-dark "
            onClose={toggleSidebar}
          >
            <div className="text-end mb-5">
              <button
                className="fs-1  bg-dark text-white"
                onClick={toggleSidebar}
                style={{ border: "none" }}
              >
                <IoCloseSharp />
              </button>
            </div>
            <div>
              <ul className="list-unstyled align-items-center justify-content-center d-flex flex-column row-gap-3">
                <Link className="nav-link text-white" to={"/"}>
                  Ana Sayfa
                </Link>
                <Link className="nav-link text-white" to={"/category"}>
                  Kategoriler
                </Link>
                <Link className="nav-link text-white" to={"/favorites"}>
                  Favoriler
                </Link>
              </ul>
            </div>
          </Drawer>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className="bla bla bla"
            style={{ width: "400px" }}
          >
            <div className="text-end">
              <button
                className="fs-1 bg-light text-black"
                onClick={toggleDrawer}
                style={{ border: "none" }}
              >
                <IoCloseSharp />
              </button>
            </div>
            <div className="cart">
              <div className="d-flex flex-column mx-auto">
                {carts?.length > 0 ? (
                  carts.map((item) => (
                    <div
                      className="d-flex product-cart-item align-items-center text-center flex-column gap-3 3 border rounded mb-4"
                      key={item.id}
                    >
                      <div>
                        <img
                          src={item.thumbnail}
                          alt="PRE-WORKOUT SUPREME"
                          width={200}
                          height={200}
                          className="object-fit-contain"
                        />
                      </div>
                      <div className="">
                        <div className="fw-semibold">{item.title}</div>
                        <div className="small text-muted">{item.price}</div>
                      </div>
                      <div className="d-flex flex-column align-items-end gap-2 text-center">
                        <div className="d-flex align-items-center border rounded">
                          <Button
                            variant="light"
                            onClick={() => handleDecreaseCount(item.id)}
                            size="sm"
                            aria-label="Decrease quantity"
                          >
                            -
                          </Button>
                          <span
                            className="px-3 py-1 text-center"
                            style={{ minWidth: "3rem" }}
                          >
                            {item.count}
                          </span>
                          <Button
                            variant="light"
                            size="sm"
                            onClick={() => handleIncreaseCount(item.id)}
                            aria-label="Increase quantity"
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      <Button
                        variant="danger"
                        onClick={() => removeItem(item.id)}
                        aria-label="Remove item"
                      >
                        <IoMdTrash />
                      </Button>
                    </div>
                  ))
                ) : (
                  <div className="text-center">Sepetinizde ürün yok.</div>
                )}
                {carts.length <= 0 ? (
                  ""
                ) : (
                  <Button
                    variant="primary"
                    onClick={() => navigate("/sepet")}
                    className="w-100 py-2 fw-semibold"
                  >
                    DEVAM ET
                  </Button>
                )}
                <div className="d-flex align-items-center justify-content-between cart-footer p-3 bg-light rounded">
                  <div className="fw-semibold">TOPLAM {totalPrice} Tl</div>
                </div>
              </div>
            </div>
          </Drawer>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;

import "./navbar.scss";
import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import Drawer from "react-modern-drawer";
import { IoMdTrash } from "react-icons/io";
import "react-modern-drawer/dist/index.css";
import { FaHeartCircleBolt } from "react-icons/fa6";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  decreaseItemCount,
  removeFromCart,
  increaseItemCount,
} from "../../redux/slices/basketSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function NavbarComp() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
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

  const totalPrice = useSelector((store) => store.carts.totalPrice);
  console.log(totalPrice);

  const navigate = useNavigate();

  return (
    <div>
      <Navbar expand="lg" className="shadow-lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/public/images/logo.jpeg"
              width={90}
              height={95}
              style={{ zIndex: 1 }}
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end navbar-collapse collapse"
            style={{ zIndex: 2 }}
          >
            <Link className="nav-link px-4" to={"/category"}>
              Kategoriler
            </Link>
            <Link to={"/favorites"}>
              <FaHeartCircleBolt className="fs-1 mx-2" />
            </Link>
            <IoCartOutline className="fs-1" onClick={toggleDrawer} />
          </Navbar.Collapse>
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
                      className="d-flex align-items-center text-center flex-column gap-3 3 border rounded mb-4"
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
                        <Button
                          variant="danger"
                          onClick={() => removeItem(item.id)}
                          aria-label="Remove item"
                        >
                          <IoMdTrash />
                        </Button>
                      </div>
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

import "./navbar.scss";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { FaHeartCircleBolt } from "react-icons/fa6";
function navbar() {
  return (
    <div>
      <Navbar expand="lg" className="shadow-lg ">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/src/components/images/logo-removeBg-preview.png"
              width={90}
              height={95}
              style={{ zIndex: 1 }}
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

            {length ? (
              <IoCart className="fs-1" />
            ) : (
              <IoCartOutline className="fs-1" />
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default navbar;

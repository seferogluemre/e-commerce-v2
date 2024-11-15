import "./navbar.scss";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoCart } from "react-icons/io5";

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
            />
          </Navbar.Brand>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Link className="nav-link px-2" to={"/category"}>
              Kategoriler
            </Link>
            {length ? (
              <IoCart className="fs-2" />
            ) : (
              <IoCartOutline className="fs-2" />
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default navbar;

import "./navbar.scss";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { useState } from "react";

// const categories = [
//   { id: 1, name: "Laptop", slug: "laptop" },
//   { id: 2, name: "Giyim", slug: "clothes" },
//   { id: 3, name: "Telefon", slug: "phones" },
//   { id: 4, name: "Bakım", slug: "care" },
// ];

function navbar() {
  const [length, setLength] = useState(1);

  return (
    <div>
      <Navbar expand="lg" className="shadow-lg mb-5">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/src/components/images/logo-removebg-preview.png"
              width={90}
              height={95}
            />
          </Navbar.Brand>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Link className="nav-link px-2">Kategoriler</Link>
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

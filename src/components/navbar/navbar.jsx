import React from "react";
import "./navbar.scss";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "Laptop", slug: "laptop" },
  { id: 2, name: "Giyim", slug: "clothes" },
  { id: 3, name: "Telefon", slug: "phones" },
  { id: 4, name: "Bakım", slug: "care" },
];

function navbar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-dark mb-5">
        <Container>
          <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {categories.map((item) => (
                <Nav.Link className="text-white " key={item.id}>
                  <Link to={`/products/${item.slug}`}>{item.name}</Link>
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default navbar;

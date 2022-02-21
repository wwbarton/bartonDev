import React from "react";
import Navbar from "react-bootstrap/NavBar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <Navbar className="navbar" expand="lg" variant="light" bg="light">
        <Container>
          <Link to="/">
            <Navbar.Brand>Barton.dev</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

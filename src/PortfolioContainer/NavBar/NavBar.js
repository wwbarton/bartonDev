import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./NavBar.css";
import robart from "../../assets/images/robart.png";

function NavBar() {
  return (
    <div>
      <Navbar className="navbar" expand="lg" variant="light" bg="light">
        <Container>
          <Link to="/">
            <Navbar.Brand>Barton.dev</Navbar.Brand>
            <img id="robart" src={robart} alt="robart" height={25} width={25} />
          </Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

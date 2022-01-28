import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "../index.css";
function Header() {
  return (
    <Navbar bg="dark" className="header">
      <Container>
        <h1 className="title">PayCheck for you!</h1>
      </Container>
    </Navbar>
  );
}

export default Header;

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { KingBed } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";
import { AccountCircle } from "@mui/icons-material";
import { Phone } from "@mui/icons-material";

function NavbarComponent() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary py-4">
        <Container>
          <Navbar.Brand className="text-center d-lg-none">
            <Nav>
              <Nav.Link href="/">e-Hotels</Nav.Link>
            </Nav>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="bookings">
                <KingBed />
                Stays
              </Nav.Link>
              <Nav.Link href="contact-us">
                <Phone />
                Contact Us
              </Nav.Link>
            </Nav>
            <Navbar.Brand className="text-center d-none d-lg-block">
              <Nav>
                <Nav.Link href="/">e-Hotels</Nav.Link>
              </Nav>
            </Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="#deets">
                <Favorite />
                Favorites
              </Nav.Link>
              <Nav.Link eventKey={2} href="auth">
                <AccountCircle />
                Aidian J.
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
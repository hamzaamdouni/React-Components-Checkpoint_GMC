import React from 'react'
import {Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './Navbar.css';

const NavbarC = () => 
{
  return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <div className="hamz"> hamza </div>
    <Container>
    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/quill-with-ink.png" alt='icon' className="IconNav"/>
      <Navbar.Brand href="#home" className="NavBrand">Knowledge</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#Accueil">Accueil</Nav.Link>
          <Nav.Link href="#Info">Info</Nav.Link>
          <NavDropdown title="FORMATION" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">INFORMATIQUE & MULTIMÉDIA</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">GESTION & SERVICES DOUANIERS</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">SANTÉ & AGROALIMENTAIRE</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">PROGRAMMES INTERNATIONAUX</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <NavDropdown title="Inscription" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/31.1">Inscription en ligne</NavDropdown.Item>
            <NavDropdown.Item href="#action/31.2">Règlement intérieur</NavDropdown.Item>
            <NavDropdown.Item href="#action/31.3">Modalités de paiement</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#Contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarC;

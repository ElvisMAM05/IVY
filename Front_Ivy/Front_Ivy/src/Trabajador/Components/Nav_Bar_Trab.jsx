import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../../Logo/Logo.png";
import "../Styles/Nav_Bar_T.css"; // Estilo nuevo

function NavBar_T({ activa, onSeleccionar }) {
  return (
    <Navbar expand="lg" className="nav-ivy" sticky="top">
      <Container fluid>
        <Navbar.Brand className="d-flex align-items-center gap-2 nav-logo" onClick={() => onSeleccionar("Inicio")}>
          <img src={Logo} alt="Logo IVY" className="navbar-logo" />
          IVY - Trabajador
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className={activa === "MisServicios" ? "active-link" : ""} onClick={() => onSeleccionar("MisServicios")}>
              Mis Servicios
            </Nav.Link>
            <Nav.Link className={activa === "AgregarServicio" ? "active-link" : ""} onClick={() => onSeleccionar("AgregarServicio")}>
              Agregar Servicio
            </Nav.Link>
            <Nav.Link className={activa === "Solicitudes" ? "active-link" : ""} onClick={() => onSeleccionar("Solicitudes")}>
              Solicitudes
            </Nav.Link>
            <Nav.Link className={activa === "Perfil" ? "active-link" : ""} onClick={() => onSeleccionar("Perfil")}>
              Perfil
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar_T;
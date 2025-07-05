import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../../Logo/Logo.png";
import "../Styles/Nav_Bar_T.css"; // Estilo nuevo
import { useNavigate } from 'react-router-dom'

function NavBar_T({  activa, onSeleccionar }) {
  const navigate=useNavigate()

  function Perfil(){
    navigate("/Perfil")
  }

  function add(){
    navigate("/AddPages")
  }
  function trab(){

    navigate("/Trabajador")
  }



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
            <Nav.Link onClick={trab}>
              Mis Servicios
            </Nav.Link>
            <Nav.Link onClick={add}>
              Agregar Servicio
            </Nav.Link>
            <Nav.Link className={activa === "Solicitudes" ? "active-link" : ""} onClick={() => onSeleccionar("Solicitudes")}>
              Solicitudes
            </Nav.Link>
            <Nav.Link onClick={Perfil}>
              Perfil
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar_T;
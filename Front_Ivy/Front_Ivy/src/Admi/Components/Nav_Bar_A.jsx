import React from 'react';
import { Navbar, Container, Nav, Offcanvas, NavDropdown } from 'react-bootstrap';
import Logo from "../../Logo/Logo.png";
import '../Styles/Nav_Bar_A_Styles.css';
import { useNavigate } from 'react-router-dom'

function Nav_Bar_A({ onSeleccionar, activa }) {
    const navigate= useNavigate()

  function Home(){
    navigate("/")
  } 
  function Usuarios(){
    navigate("/usuario")
  }
 
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand className="d-flex align-items-center gap-2">
          <img src={Logo} alt="Logo IVY" className="navbar-logo" />
          IVY - ADMINISTRADORES
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              ADMINISTRADORES - OPCIONES
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className={activa === "Inicio" ? "active-link" : ""} onClick={() => onSeleccionar("Inicio")}>
                Inicio
              </Nav.Link>
              <Nav.Link className={activa === "Categorias" ? "active-link" : ""} onClick={() => onSeleccionar("Categorias")}>
                Categorías
              </Nav.Link>
              <Nav.Link className={activa === "Servicios" ? "active-link" : ""} onClick={() => onSeleccionar("Servicios")}>
                Servicios
              </Nav.Link>
              <Nav.Link className={activa === "Estadisticas" ? "active-link" : ""} onClick={() => onSeleccionar("Estadísticas")}>
                Estadísticas 
              </Nav.Link>
              
              <NavDropdown title="Más Opciones" id="offcanvasNavbarDropdown">
                <NavDropdown.Item onClick={() => onSeleccionar("AgregarUsuarios")}>
                  Permisos 
                </NavDropdown.Item>
                <NavDropdown.Item onClick={Home}>
                  Visitar Home
                </NavDropdown.Item>
                <NavDropdown.Item onClick={Usuarios}>
                  Visitar Usuarios
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => onSeleccionar("Configuracion")}>
                  Configuración general
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Nav_Bar_A;
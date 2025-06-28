import React from 'react';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import Logo from "../../Logo/Logo.png";
import '../Styles/Nav_Bar_A_Styles.css';

function Nav_Bar_A({ onSeleccionar, activa }) {
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
                 
              <Nav.Link
                className={activa === "editar-categorias" ? "active-link" : ""}
                onClick={() => onSeleccionar("editar-categorias")}
              >
                Editar Categorías
              </Nav.Link>
              <Nav.Link
                className={activa === "editar-categorias" ? "active-link" : ""}
                onClick={() => onSeleccionar("editar-categorias")}
              >
                Editar Categorías
              </Nav.Link>

              <Nav.Link
                className={activa === "editar-servicios" ? "active-link" : ""}
                onClick={() => onSeleccionar("editar-servicios")}
              >
                Editar Servicios
              </Nav.Link>
              <Nav.Link
                className={activa === "borrar-categorias" ? "active-link" : ""}
                onClick={() => onSeleccionar("borrar-categorias")}
              >
                Borrar Categorías
              </Nav.Link>
              <Nav.Link
                className={activa === "borrar-servicios" ? "active-link" : ""}
                onClick={() => onSeleccionar("borrar-servicios")}
              >
                Borrar Servicios
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Nav_Bar_A;


/* function Nav_Bar_A() {
  const [activo, setActivo] = useState("#editar-categorias");

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
              <Nav.Link
                href="#editar-categorias"
                className={activo === "#editar-categorias" ? "active-link" : ""}
                onClick={() => setActivo("#editar-categorias")}
              >
                Editar Categorías
              </Nav.Link>
              <Nav.Link
                href="#editar-servicios"
                className={activo === "#editar-servicios" ? "active-link" : ""}
                onClick={() => setActivo("#editar-servicios")}
              >
                Editar Servicios
              </Nav.Link>
              <Nav.Link
                href="#borrar-categorias"
                className={activo === "#borrar-categorias" ? "active-link" : ""}
                onClick={() => setActivo("#borrar-categorias")}
              >
                Borrar Categorías
              </Nav.Link>
              <Nav.Link
                href="#borrar-servicios"
                className={activo === "#borrar-servicios" ? "active-link" : ""}
                onClick={() => setActivo("#borrar-servicios")}
              >
                Borrar Servicios
              </Nav.Link>
              <NavDropdown title="Más Opciones" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#agregar-usuarios">Agregar Usuarios</NavDropdown.Item>
                <NavDropdown.Item href="#editar-usuarios">Editar Usuarios</NavDropdown.Item>
                <NavDropdown.Item href="#roles-permisos">Roles y Permisos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#configuracion">Configuración general</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Nav_Bar_A; */
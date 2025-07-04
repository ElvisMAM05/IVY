import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo2 from '../../src/Logo/Logo2.png'; // Asegúrate de tener el logo IVY
import '../Multi-Styles/Nav_BarIVY.css'; // Estilos que diseñaremos a continuación
import Log_out from "../Multi_Components/Log_out"; 

function NavIVY() {
  
  return (
    <Navbar expand="lg" className="navbar-ivy shadow-sm">
      <Container fluid>
        <Navbar.Brand href="/" className="navbar-brand-ivy">
          <img src={Logo2} alt="IVY Logo" className="ivy-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 nav-links-ivy" navbarScroll>
            <Nav.Link href="/usuario">Inicio</Nav.Link>
            <Nav.Link href="/usuario#Categorías">Categorías</Nav.Link>
            <Nav.Link href="/usuario#Servicios">Servicios</Nav.Link>
            <NavDropdown title="Perfil" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Perfil">Mi Perfil</NavDropdown.Item>
              <NavDropdown.Item href="/historial">Historial</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={Log_out}>Cerrar sesión</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavIVY;
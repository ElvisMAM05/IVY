import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../Logo/Logo.png";
// import UserIcon from "../../Icons/UserIcon.png"; // Icono de usuario
import '../Styles/NavBar_User.css';

function NavbarC() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary colornv">
      <Container className='colornv'>
        <Navbar.Brand><img className='Logo' src={Logo} alt="Logo Ivy" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="#About_us">About us</Nav.Link>
            <Nav.Link href="#help">Ayuda</Nav.Link>
            <NavDropdown title="  Otras opciones" id="user-nav-dropdown">
              <NavDropdown.Item href="/Log">Inicia sesión</NavDropdown.Item>
              <NavDropdown.Item href="/Register">Registrate</NavDropdown.Item>
              <NavDropdown.Item href="/Log">Configuración</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarC;


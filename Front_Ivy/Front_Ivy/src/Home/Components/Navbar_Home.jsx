import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Styles/Navbar_Home.css';
import Logo from "../../Logo/Logo.png"
function NavbarC() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary abcd">
      <Container className='Navbar'>
         <Navbar.Brand><img className='Logos' src={Logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  href="">Inicio</Nav.Link>

            <Nav.Link  href="#link">Contactos</Nav.Link>
            <NavDropdown  title="Inicia sesión/Registrate" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Registrate</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Inicia sesión</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Servicio al cliente</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>  
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarC;
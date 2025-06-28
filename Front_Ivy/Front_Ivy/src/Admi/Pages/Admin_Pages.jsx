import React from 'react'
import Admin from '../Components/Admin.jsx'
import Footer from '../../Multi_Components/Footer.jsx'
import Nav_Bar_A from '../Components/Nav_Bar_A.jsx'
import E_Categories from '../Components/E_Categories.jsx'
import E_Servicios from '../Components/E_Servicios.jsx'
import B_Categories from '../Components/B_Categories.jsx'
import B_Servicios from '../Components/B_Servicios.jsx'
import B_Usuarios from '../Components/B_Usuarios.jsx'
import { Nav } from 'react-bootstrap'


function Admin_Pages() {
  return (
    <>
     
      <Nav_Bar_A />
      <Admin />
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link href="#editar-categorias">Editar Categorías</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#editar-servicios">Editar Servicios</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#borrar-categorias">Borrar Categorías</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#borrar-servicios">Borrar Servicios</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#borrar-usuarios">Borrar Usuarios</Nav.Link>
        </Nav.Item>
      </Nav>

      <E_Categories />
      <E_Servicios />
      <B_Categories />
      <B_Servicios />
      <B_Usuarios />

      <Footer />
    
    </>
 
  )
}

export default Admin_Pages
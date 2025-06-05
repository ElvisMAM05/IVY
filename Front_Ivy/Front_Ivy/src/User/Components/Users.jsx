import React from 'react'
import NavbarC from './NavBar_C'
import '../Styles/Users_cs.css'



function Users() {
  return (
    <> 
    <NavbarC />
   <main className="Users_Page">
  <div className="Users_Container">
    <div className="User_Header">
      <h1 className="Users_Title">Bienvenido a Ivy</h1>
      <p className="Users_Description">
        Busca tu servicio ideal entre las diferentes categorias, y contáctate con nuestros profesionales.
      </p>
    </div>

    <div className="Users_Cards">
      <div className="User_Card">
        <h2>Categorias</h2>
        <p> Mira nuestras diferentes categorias.</p>
      </div>

      <div className="User_Card">
        <h2>Emprendedores</h2>
        <p>Conoce a varios de nuestros emprendedores.</p>
      </div>
    </div>
  </div>
</main>
    
  </>

  )
}

export default Users
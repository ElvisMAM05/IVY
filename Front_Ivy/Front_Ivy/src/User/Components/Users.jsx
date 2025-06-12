import React from 'react'
import NavbarC from './NavBar_User'
import '../Styles/Users_cs.css'
import Categories from "./Categories"
import Hero from '../../Multi_Components/Hero'
import { useNavigate } from 'react-router-dom'


function Users() {
      const navigate=useNavigate()                      
  return (
    <> 
  <br />
  <br />
    <div className="Users_Page" >
  <div  className="Container">
        <h1 className="Title">Bienvenido a Front Ivy</h1>
        <p className="Description">IVY es una plataforma dinámica diseñada para conectar a usuarios con profesionales y servicios
        de manera rápida, eficiente y segura. <br />Su enfoque se basa en facilitar el acceso a talentos 
        especializados, eliminando intermediarios y optimizando la experiencia de contratación.
        </p> 
    </div>
  </div>
    <br />

   <main className="Users_Page">

    
  <div className="Users_Container">
    <div className="User_Header">
      <h1 className="Users_Title">Únete a nosotros</h1>
      <p className="Users_Description">
        Busca tu servicio ideal entre las diferentes categorias, y contáctate con nuestros profesionales.
      </p>
    </div>

    <div className="Users_Cards">
      <div className="User_Card">

        <h2>Inicia Sesión</h2>
        <p>¿Ya tienes una cuenta?</p>
        <Hero rutaPag={()=>navigate("/Log")}/> 
       
      </div>

      <div className="User_Card">
        <h2>Registrate</h2>
        <p>¡Unete a nosotros!</p>
         <Hero rutaPag={()=>navigate("/Register")}/>
      </div>
    </div>
  </div>
</main>
    
  </>

  )
}

export default Users
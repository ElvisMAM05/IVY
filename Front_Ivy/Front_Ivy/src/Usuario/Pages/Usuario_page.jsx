import React from 'react'
import Usuario from "../Components/Usuario.jsx"
import NavIVY from '../../Multi_Components/Nav_Bar_Buq.jsx' 
import Footer from "../../Multi_Components/Footer.jsx"
function Usuario_page() {
  return (
    <div>
      <NavIVY />
      <br />
      <br />
        <Usuario/>
      <br />
        <Footer/>
    </div>

  )
}

export default Usuario_page
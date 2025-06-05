import React from 'react'
import "../Styles/Categories_cs.css"
import { Link } from 'react-router-dom'
import Salud from "../Images/Salud.webp"
import Educacion from "../Images/Educacion.jpg"
import Construccion from "../Images/Construcción.jpeg"
import Finanzas from "../Images/Finanzas.jpg"


function Categories() {
  return (
     <div className="Categories_Page">
  <div className="Categories_Container">
    <h1 className="Categories_Title">Explora nuestras categorías</h1>
    <p className="Categories_Description">
      Encuentra el servicio ideal según tus necesidades y contacta a nuestros profesionales.
    </p>

    <div className="Categories_List">
      <div className="Category_Card">
        <img src={Salud} alt="Categoría 1" />
        <h2>Salud y Bienestar</h2>
      </div>

      <div className="Category_Card">
        <img src={Educacion} alt="Categoría 2" />
        <h2>Educación y Aprendizaje</h2>
      </div>

      <div className="Category_Card">
        <img src={Construccion} alt="Categoría 3" />
        <h2>Reparaciones y Hogar</h2>
      </div>

      <div className="Category_Card">
        <img src={Finanzas} alt="Categoría 4" />
        <h2>Negocios y Finanzas</h2>
      </div>
    </div>
  </div>
</div>
  )
}

export default Categories
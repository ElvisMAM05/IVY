import React from 'react'
import Nav_IVY from "../Multi_Components/Nav_Bar_Buq"
import Trabajador from '../Trabajador/Components/Trabajador'
import Add_Servicios from '../Admi/Components/add_Servicios'
import AboutUs from '../User/Components/About_US'
import Comentarios from "../Detalles/Components/Comentarios"
import  Cards from "../Multi_Components/Cards"
import Solicitar from "../Detalles/Components/Solicitar"
function Test_Pages() {
  return (
    <div>
        <h1>Test Page</h1>
        <p>This is a test page for adding categories.</p>
        <Nav_IVY/> 
        <p>Feel free to add more components or functionality here.</p>

        <Trabajador />
        <br />
        <Cards/>

        <Add_Servicios />
        <AboutUs/>
        <Comentarios />
        <Solicitar />

    </div>
  )   
}

export default Test_Pages
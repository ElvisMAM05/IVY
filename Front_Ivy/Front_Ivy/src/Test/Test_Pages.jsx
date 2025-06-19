import React from 'react'
import Add_Categories from '../Admi/Components/Add_Categories'
import Nav_Bar_Buq from "../Multi_Components/Nav_Bar_Buq"
import Trabajador from '../Trabajador/Components/Trabajador'
import Add_Servicios from '../Admi/Components/add_Servicios'
function Test_Pages() {
  return (
    <div>
        <h1>Test Page</h1>
        <p>This is a test page for adding categories.</p>
        <Nav_Bar_Buq/> 
        <p>Feel free to add more components or functionality here.</p>

        <Trabajador />

        <Add_Servicios />
    </div>
  )
}

export default Test_Pages
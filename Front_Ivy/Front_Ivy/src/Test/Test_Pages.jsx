import React from 'react'
import Nav_IVY from "../Multi_Components/Nav_Bar_Buq"
import Trabajador from '../Trabajador/Components/Trabajador'

import AboutUs from '../User/Components/About_US'
import Comentarios from "../Detalles/Components/Comentarios"
import  Cards from "../Multi_Components/Cards"
import Solicitar from "../Detalles/Components/Solicitar"
import  Add_Usuarios  from  "../Admi/Components/Add_Usuarios.jsx"
import Nav_Bar_A from '../Admi/Components/Nav_Bar_A.jsx'
import Panel from '../Admi/Components/Panel.jsx'
import Servicios_CRUD from '../Admi/Components/Servicios_Full.jsx'
import Categories_Full from '../Admi/Components/Categories_Full.jsx'
import Trabajador_Home from '../Trabajador/Components/Trabajador_Home.jsx'
import Perfil from "../Perfil/Components/Perfil.jsx"
import Rol_Cambio from '../Multi_Components/Rol_Cambio.jsx'
import Configuracion from '../Configuraciones/Components/Configuracion.jsx'
import App from '../Admi/Components/Estadisticas.jsx'
import GraficoBarra from '../Admi/Components/GraficoBarra.jsx'
import Comentarios_U from '../Usuario/Components/Comentarios_U.jsx'
import HistorialUsuario from "../Multi_Components/HistorialUsuario.jsx"
import  HistorialSolicitantes from "../Trabajador/Components/Mis_Servicios.jsx"
import Edit_Servicios from '../Trabajador/Components/Edit_Servicios.jsx'
import Add_MiServicio from "../Admi/Components/Services.jsx"


function Test_Pages() {
  return (
    <div>

<HistorialUsuario/>
<HistorialSolicitantes/>
<Edit_Servicios/>
<Add_MiServicio/>

     
  

       

  


    </div>
  )   
}

export default Test_Pages
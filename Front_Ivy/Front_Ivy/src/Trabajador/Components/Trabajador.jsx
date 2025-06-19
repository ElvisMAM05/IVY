import { useEffect, useState } from "react";
import "../Styles/Trabajador_style.css";
import Fetch from "../../Services/Fetch.jsx"
import { Link } from "react-router-dom";

function Trabajador() {
  const [Servicios, setTrabajos] = useState([]);

  async function Obtener_trab () {
     
    const response= await Fetch.getData("api/Servicios/")
    setTrabajos(response)
  }

  useEffect(() => {
    Obtener_trab();  
  }
  , []);

  

  return (
    <div className="Servicios_Container">
      <h1 className="Servicios_Title">Descubre Nuestros Servicios</h1>
      <p className="Servicios_Description">Encuentra el servicio ideal y conecta con profesionales de IVY.</p>

      <div className="Servicios_Cards">
        {Servicios.map((Trabajo) => (
          <div key={Trabajo.id} className="Servicio_Card">
            <h2>{Trabajo.nombre_servicio}</h2>
            <p>{Trabajo.descripcion_Servicio}</p>
            <button className="Btn_Solicitar">Solicitar</button>
         <Link to={`/Details/${Trabajo.id}`} className="ver-mas-btn">
  Ver Más
</Link>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Trabajador;
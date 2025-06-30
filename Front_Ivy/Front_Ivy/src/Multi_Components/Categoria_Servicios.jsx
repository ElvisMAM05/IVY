import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Fetch from "../../src/Services/Fetch.jsx";
//import "../Styles/Trabajador_style.css";
import Solicitar from "../Detalles/Components/Solicitar.jsx";
import Details from "../Detalles/Components/Details.jsx"

function TrabajosCategoria() {
  const { categoriaId } = useParams();
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    async function TraerServicios() {
      try {
        const data = await Fetch.getData(`api/ServiciosPorCategoria/${categoriaId}/`);
        setServicios(data);
      } catch (error) {
        console.error("Error cargando servicios:", error);
      }
    }

    TraerServicios();
  }, [categoriaId]);

  return (
    <div className="Servicios_Container">
      <h1 className="Servicios_Title">Servicios de esta categoría</h1>
      <div className="Servicios_Cards">
        {servicios.map((servicio) => (
          <div key={servicio.id} className="Servicio_Card">
            <h2>{servicio.nombre_servicio}</h2>
            <p>{servicio.descripcion_Servicio}</p>
            <Solicitar servicioId={servicio.id} />
            <button >Ver más</button>
          
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrabajosCategoria;
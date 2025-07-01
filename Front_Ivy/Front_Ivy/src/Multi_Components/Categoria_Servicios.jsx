import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Fetch from "../../src/Services/Fetch.jsx";
//import "../Styles/Trabajador_style.css";
import Solicitar from "../Detalles/Components/Solicitar.jsx";
import Trabajador from '../Trabajador/Components/Trabajador.jsx';


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
  
             <Trabajador modoUsuario={true} />
           
          
          
        
  );
}

export default TrabajosCategoria;
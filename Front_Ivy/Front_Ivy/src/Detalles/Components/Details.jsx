import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Fetch from "../../Services/Fetch";
import "../Styles/Detalles.css"
import Comentarios from "../Components/Comentarios"

function Details() {
  const { servicioId } = useParams();
  const [servicio, setServicio] = useState(null);
 




  const id = servicioId; // Asegúrate de que este ID sea el correcto según tu API
  console.log("Servicio ID:", id); // Verifica que el ID se esté recibiendo correctamente


  useEffect(() => {
    async function obtenerServicio() {
      try {
        const response = await Fetch.getData(`api/Servicios/${id}`);
        setServicio(response);
      } catch (error) {
        console.error("Error al cargar el servicio:", error);   
      }
    }
    obtenerServicio();
  }, [id]);

  if (!servicio) return <p>Cargando...</p>;

  return (
    <div className="detalle-servicio">
      <img src={servicio.imagen_servicio} alt={servicio.nombre_servicio} />
      <h2>{servicio.nombre_servicio}</h2>
      <p><strong>Dueño:</strong> {servicio.usuario_trabajador_nombre}</p>
      <p><strong>Categoría:</strong> {servicio.Categoria_Servicio.nombre_c}</p>
      <p><strong>Descripción:</strong> {servicio.descripcion_larga}</p>

    <Comentarios servicioId={id} />

    </div>
  );
}

export default Details;
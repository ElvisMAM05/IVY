import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Fetch from "../../Services/Fetch";

function Details() {
  const { id } = useParams();
  const [servicio, setServicio] = useState(null);

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

      <h3>Comentarios</h3>
      {/* Aquí podrías agregar un sistema de comentarios dinámicos */}
    </div>
  );
}

export default Details;
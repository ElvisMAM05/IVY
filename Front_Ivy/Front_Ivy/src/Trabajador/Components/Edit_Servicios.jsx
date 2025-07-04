import React, { useEffect, useState } from "react";
import Fetch from "../../Services/Fetch";
//import "../Multi-Styles/MisServicios.css";
import { Link } from "react-router-dom";

function Edit_Servicios() {
  const [misServicios, setMisServicios] = useState([]);
  const usuarioId = localStorage.getItem("id");

  useEffect(() => {
    async function cargarServicios() {
      const res = await Fetch.getData("api/Servicios/");
      if (res && Array.isArray(res)) {
        const propios = res.filter(serv => serv.usuario === parseInt(usuarioId));
        setMisServicios(propios);
      }
    }
    cargarServicios();
  }, [usuarioId]);

  return (
    <div className="MisServicios_Container">
      <h2>🛠️ Mis servicios publicados</h2>

      {misServicios.length === 0 ? (
        <p className="MisServicios_Vacio">
          No tenés servicios registrados aún. ¡Animate a publicar el primero!
        </p>
      ) : (
        <div className="MisServicios_Grid">
          {misServicios.map((servicio) => (
            <div key={servicio.id} className="Servicio_Card">
              <img
                src={servicio.imagen_s}
                alt={servicio.nombre}
                className="Servicio_Imagen"
              />
              <h3>{servicio.nombre}</h3>
              <p>{servicio.descripcion}</p>
              <Link to={`/EditarServicio/${servicio.id}`} className="Editar_Boton">
                ✏️ Editar
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Edit_Servicios;
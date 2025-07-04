import React, { useEffect, useState } from "react";
import Fetch from "../Services/Fetch";
import "../Multi-Styles/HistorialUsuarios.css";

function HistorialUsuario() {
  const [solicitudes, setSolicitudes] = useState([]);
  const [servicios, setServicios] = useState([]);
  const usuarioId = localStorage.getItem("id");

  useEffect(() => {
    async function obtenerHistorial() {
      const resSolicitudes = await Fetch.getData("api/Solicitudes/");
      if (resSolicitudes && Array.isArray(resSolicitudes)) {
        const historial = resSolicitudes.filter(
          (s) => s.usuario === parseInt(usuarioId)
        );
        setSolicitudes(historial);
      }
    }

    async function obtenerServicios() {
      const resServicios = await Fetch.getData("api/Servicios/");
      if (resServicios && Array.isArray(resServicios)) {
        setServicios(resServicios);
      }
    }

    obtenerHistorial();
    obtenerServicios();
  }, [usuarioId]);

  return (
    <div className="Historial_Container">
      <h2>🕓 Historial de solicitudes</h2>

      {solicitudes.length === 0 ? (
        <p className="Historial_Vacio">No tenés solicitudes registradas aún.</p>
      ) : (
        <ul className="Historial_Lista">
          {solicitudes.map((s, i) => {
            const servicio = servicios.find((serv) => serv.id === s.servicio);
            const nombreServicio = servicio ? servicio.nombre_servicio : `ID ${s.servicio}`;
            return (
              <li key={i} className={`Historial_Item estado-${s.estado.toLowerCase()}`}>
                <strong>Servicio:</strong> {nombreServicio}
                <br />
                <strong>Estado:</strong> {s.estado}
                <br />
                <span className="Historial_Fecha">
                  🗓️ {new Date(s.fecha_solicitud).toLocaleDateString()}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default HistorialUsuario;
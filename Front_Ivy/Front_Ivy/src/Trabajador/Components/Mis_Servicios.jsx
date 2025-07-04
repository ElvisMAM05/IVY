import React, { useEffect, useState } from "react";
import Fetch from "../../Services/Fetch";
//import "../Multi-Styles/HistorialUsuarios.css"; // Puedes crear otro CSS si querés separarlo

function HistorialSolicitantes() {
  const [solicitudes, setSolicitudes] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const trabajadorId = localStorage.getItem("id");

  useEffect(() => {
    async function obtenerSolicitudes() {
      const resSolicitudes = await Fetch.getData("api/Solicitudes/");
      if (resSolicitudes && Array.isArray(resSolicitudes)) {
        const mias = resSolicitudes.filter((s) => s.trabajador === parseInt(trabajadorId));
        setSolicitudes(mias);
      }
    }

    async function obtenerUsuarios() {
      const resUsuarios = await Fetch.getData("api/Usuarios/");
      if (resUsuarios && Array.isArray(resUsuarios)) {
        setUsuarios(resUsuarios);
      }
    }

    obtenerSolicitudes();
    obtenerUsuarios();
  }, [trabajadorId]);

  return (
    <div className="Historial_Container">
      <h2>📄 Solicitudes recibidas</h2>

      {solicitudes.length === 0 ? (
        <p className="Historial_Vacio">Aún no has recibido solicitudes de usuarios.</p>
      ) : (
        <ul className="Historial_Lista">
          {solicitudes.map((s, i) => {
            const usuario = usuarios.find((u) => u.id === s.usuario);
            const nombreUsuario = usuario ? `${usuario.nombre} ${usuario.apellido}` : `ID ${s.usuario}`;

            return (
              <li key={i} className={`Historial_Item estado-${s.estado.toLowerCase()}`}>
                <strong>Solicitante:</strong> {nombreUsuario}
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

export default HistorialSolicitantes;
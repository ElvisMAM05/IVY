import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import "../Styles/Solicitar.css";
import Fetch from "../../Services/Fetch.jsx";

function Solicitar() {
  const { servicioId } = useParams();
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(null);

  async function solicitarServicio() {
    const objSoli = {
      usuario: localStorage.getItem("id"),
      servicio: servicioId,
    };

    try {
      const response = await Fetch.postData(objSoli, `api/Solicitudes/${servicioId}/`);

      if (response?.id) {
        setEnviado(true);
      } else {
        setError("No se pudo completar la solicitud.");
      }
    } catch (err) {
      console.error("Error al solicitar:", err);
      setError("Ocurrió un error al enviar la solicitud.");
    }
  }

  return (
    <div className="solicitar-container">
      <button
        className={`btn-solicitar ${enviado ? 'btn-solicitado' : ''}`}
        onClick={solicitarServicio}
        disabled={enviado}
      >
        {enviado ? "Solicitado" : "Solicitar"}
      </button>

      {error && <p className="error-solicitud">{error}</p>}
    </div>
  );
}

export default Solicitar;
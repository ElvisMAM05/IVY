import React, { useState } from "react";
import Fetch from "../Services/Fetch.jsx";
import Swal from "sweetalert2";
import "../Multi-Styles/Rol_Cambio.css";

function Rol_Cambio() {
  const [motivo, setMotivo] = useState("");
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = localStorage.getItem("id");

    if (!motivo.trim()) {
      Swal.fire("Atención", "Por favor, indicá el motivo de tu solicitud.", "warning");
      return;
    }

    const peticion = {
      usuario: parseInt(id),
      motivo: motivo.trim(),
    };

    try {
      setEnviando(true);
      const respuesta = await Fetch.postData(peticion, "api/cambio-rol/");
      if (respuesta.exito) {
        Swal.fire("Solicitud enviada", "Tu petición para cambiar de rol fue registrada correctamente.", "success");
        setMotivo("");
      } else {
        Swal.fire("Error", "Hubo un problema al enviar la solicitud.", "error");
      }
    } catch (error) {
      Swal.fire("Error de red", "No se pudo conectar con el servidor.", "error");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="CambioRol_Container">
      <h2>Solicitar cambio de rol a Trabajador</h2>
      <form onSubmit={handleSubmit} className="CambioRol_Form">
        <textarea
          placeholder="¿Por qué querés ser parte de IVY como trabajador?"
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
          className="CambioRol_Textarea"
          rows={5}
        />
        <button className="btn btn-confirm" type="submit" disabled={enviando}>
          {enviando ? "Enviando..." : "Enviar solicitud"}
        </button>
      </form>
    </div>
  );
}

export default Rol_Cambio;
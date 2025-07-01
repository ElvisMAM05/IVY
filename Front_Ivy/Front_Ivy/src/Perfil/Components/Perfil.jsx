import React, { useEffect, useState } from "react";
import Fetch from "../../Services/Fetch";
import "../Styles/Perfil_st.css"

function Perfil() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    cargarPerfil();
  }, []);

  async function cargarPerfil() {
    const id = localStorage.getItem("id");
    try {
      const data = await Fetch.getData(`api/Usuarios/${id}/`);
      setUsuario(data);
    } catch (error) {
      console.error("Error al cargar perfil:", error);
    }
  }

  if (!usuario) return <div className="Perfil_Trabajador">Cargando perfil...</div>;

  return (
    <div className="Perfil_Trabajador">
      <div className="perfil-card">
        <img
          src={usuario.Imagen_U || "https://via.placeholder.com/120"}
          alt="Foto de perfil"
          className="perfil-img"
        />
        <div className="perfil-info">
          <h2>{usuario.username}</h2>
          <p><strong>Email:</strong> {usuario.email}</p>
          <p><strong>Identificación:</strong> {usuario.identificacion}</p>
          <p><strong>Edad:</strong> {usuario.edad} años</p>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
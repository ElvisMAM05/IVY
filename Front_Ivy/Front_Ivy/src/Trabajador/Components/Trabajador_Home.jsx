import React, { useEffect, useState } from "react";
import Fetch from "../../Services/Fetch";
import "../Styles/Trabajador_Home.css"
import Add_Servicios from "../../Admi/Components/add_Servicios";

function Trabajador_Home() {
  const [nombre, setNombre] = useState("");
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  async function obtenerDatos() {
    const id = localStorage.getItem("id");

    try {
      // Obtener información del usuario
      const usuario = await Fetch.getData(`api/Usuarios/${id}/`);
      setNombre(usuario.username); // <- Este valor viene desde el serializer

      // Obtener servicios asignados al trabajador
      const todosLosServicios = await Fetch.getData("api/Servicios/");
      const serviciosFiltrados = todosLosServicios.filter(
        (serv) => serv.usuario_trabajador === parseInt(id)
      );
      setServicios(serviciosFiltrados);
    } catch (error) {
      console.error("Error al cargar datos:", error);
    }
  }

  return (
    <div className="Trabajador_Container">
      <h2>¡Hola, {nombre}!</h2>
      <p className="texto-inicio">
        Estos son tus servicios asignados. Podés ver y gestionar tu oferta desde aquí.
      </p>

      <div className="servicios-grid">
        {servicios.length > 0 ? (
          servicios.map((serv) => (
            <div key={serv.id} className="servicio-card">
              <h4>{serv.nombre_servicio}</h4>
              <p>{serv.descripcion_Servicio || "Sin descripción"}</p>
              
            </div>
          ))
        ) : (
          <p className="no-servicios">Todavía no tenés servicios asignados.</p>

        )}

        <div>
        <p>¿Quieres agregar un nuevo servicio?</p>
        <Add_Servicios/>

        </div>


      </div>
    </div>
  );
}

export default Trabajador_Home;
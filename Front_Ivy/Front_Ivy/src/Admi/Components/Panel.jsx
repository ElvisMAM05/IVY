import React, { useState } from "react";
import Nav_Bar_A from "./Nav_Bar_A";
import Admin from "./Admin";
import Categories_Full from "./Categories_Full";
import Servicios_CRUD from "./Servicios_Full";
import Estadisticas from "./Estadisticas"

function Panel() {
  const [seccionActiva, setSeccionActiva] = useState("Inicio");

  return (
    <div>
      <Nav_Bar_A onSeleccionar={setSeccionActiva} activa={seccionActiva} />
      <div className="admin-content" style={{ padding: "30px" }}>
        {seccionActiva === "Inicio" && <Admin />}
        {seccionActiva === "Categorias" && <Categories_Full />}
        {seccionActiva === "Servicios" && <Servicios_CRUD />}
        {seccionActiva==="Estadísticas"&& <Estadisticas/>}
        {/* Aquí podés agregar las demás secciones como Borrar, Usuarios, etc. */}
      </div>
    </div>
  );
}

export default Panel;
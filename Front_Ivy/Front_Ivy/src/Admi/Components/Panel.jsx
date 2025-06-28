import React, { useState } from "react";
import Nav_Bar_A from "./Nav_Bar_A";
import E_Categories from "./E_Categories";
import E_Servicios from "./E_Servicios";
import B_Categories from "./B_Categories";
import B_Servicios from "./B_Servicios";

function Panel() {
  const [seccionActiva, setSeccionActiva] = useState("");

  return (
    <div>
      <Nav_Bar_A onSeleccionar={setSeccionActiva} activa={seccionActiva} />

      <div className="admin-content">
        {seccionActiva === "editar-categorias" && <E_Categories />}
        {seccionActiva === "editar-servicios" && <E_Servicios />}
        {seccionActiva === "borrar-categorias" && <B_Categories />}
        {seccionActiva === "borrar-servicios" && <B_Servicios />}
        {/* Aquí podés agregar más secciones según sea necesario */}
      </div>
    </div>
  );
}

export default Panel;
import React, { useState } from "react";
import "../Styles/Configuracion_Styles.css";
import Switch from "@mui/material/Switch";

function Configuracion() {
  const [notificaciones, setNotificaciones] = useState(true);
  const [idioma, setIdioma] = useState("es");

  const handleNotificaciones = (e) => {
    setNotificaciones(e.target.checked);
    // Podés guardar en localStorage o enviar al backend
  };

  const handleIdioma = (e) => {
    setIdioma(e.target.value);
    // También podrías guardar esta preferencia
  };

  return (
    <div className="Configuracion_Container">
      <h2>Configuración</h2>

      <div className="Config_Section">
        <h4>Preferencias generales</h4>
        <label className="Config_Item">
          <span>Idioma</span>
          <select value={idioma} onChange={handleIdioma}>
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </label>

        <label className="Config_Item">
          <span>Notificaciones por correo</span>
          <Switch
            checked={notificaciones}
            onChange={handleNotificaciones}
            color="success"
          />
        </label>
      </div>

      <div className="Config_Section">
        <h4>Seguridad</h4>
        <button className="btn-config">Cambiar contraseña</button>
        <button className="btn-config">Cerrar sesión</button>
      </div>
    </div>
  );
}

export default Configuracion;
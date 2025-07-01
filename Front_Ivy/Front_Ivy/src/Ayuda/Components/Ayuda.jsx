import React from "react";
import "../Styles/Ayuda_styles.css"

function Ayuda() {
  return (
    <div className="Ayuda_Container">
      <div className="ayuda-layout">
        {/* Contenido principal */}
        <div className="faq-section">
          <h2>Centro de ayuda IVY</h2>
          <p className="intro-text">
            ¿Tenés preguntas? Acá te dejamos respuestas y sugerencias para aprovechar IVY al máximo.
          </p>

          <h4 id="agregar-servicio">¿Cómo agrego un servicio?</h4>
          <p>
            Desde tu panel de trabajador, hacé clic en <strong>"Agregar Servicio"</strong>, completá el formulario con los datos e imagen y guardalo. Aparecerá automáticamente en tu lista.
          </p>

          <h4 id="ver-solicitudes">¿Dónde veo las solicitudes que recibo?</h4>
          <p>
            En la sección “<strong>Solicitudes</strong>” podés aceptar, rechazar o monitorear cada pedido de los clientes. Todo queda registrado para tu comodidad.
          </p>

          <h4 id="editar-perfil">¿Cómo cambio mi imagen o datos personales?</h4>
          <p>
            Entrá a “<strong>Perfil</strong>”, donde vas a poder ver tu información actual y subir una nueva imagen si lo deseás.
          </p>

          <h4 id="cerrar-sesion">¿Cómo cierro sesión?</h4>
          <p>
            Usá el botón “<strong>Cerrar sesión</strong>” en la parte superior derecha. Vas a recibir una confirmación antes de salir de tu cuenta.
          </p>

          <h4>¿Qué hago si olvidé mi contraseña?</h4>
          <p>
            Próximamente se habilitará el módulo de recuperación automática. Por ahora, podés contactarnos vía <strong>soporte@ivy.cr</strong> y te ayudamos en minutos.
          </p>
        </div>

        {/* Columna lateral derecha */}
        <div className="ayuda-sidebar">
          <div className="ayuda-side-card">
            <h5>Ayuda rápida</h5>
            <ul>
              <li><a href="#agregar-servicio">Agregar un servicio</a></li>
              <li><a href="#ver-solicitudes">Ver solicitudes</a></li>
              <li><a href="#editar-perfil">Editar perfil</a></li>
              <li><a href="#cerrar-sesion">Cerrar sesión</a></li>
            </ul>
          </div>

          <div className="ayuda-side-card">
            <h5>¿Aún tenés dudas?</h5>
            <p>Escribinos a <strong>soporte@ivy.cr</strong> o hacé clic en el siguiente botón para enviar tu consulta.</p>
            <button className="btn btn-ayuda-formulario">Enviar mensaje</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ayuda;
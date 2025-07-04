import React from 'react';
import '../Styles/Comentarios.css';



function Comentarios_U() {

    const comentarios = [
  {
    nombre: "Lucía",
    texto: "La plataforma es súper intuitiva. Encontré servicios que ni sabía que necesitaba.",
    avatar: "🧑‍💼"
  },
  {
    nombre: "Carlos",
    texto: "Me encanta cómo se conectan los trabajadores con los usuarios, es transparente y eficaz.",
    avatar: "👨‍🔧"
  },
  {
    nombre: "Elena",
    texto: "El diseño está impecable, cada vez se siente más personalizado.",
    avatar: "👩‍🎨"
  }
];




  return (
    <section className="comentarios-section">
      <h3>Opiniones de la comunidad</h3>
      <div className="comentarios-grid">
        {comentarios.map((c, index) => (
          <div key={index} className="comentario-card">
            <div className="comentario-avatar">{c.avatar}</div>
            <div className="comentario-content">
              <h4>{c.nombre}</h4>
              <p>{c.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Comentarios_U;
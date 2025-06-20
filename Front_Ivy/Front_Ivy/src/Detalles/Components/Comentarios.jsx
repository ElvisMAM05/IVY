import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Fetch from '../../Services/Fetch';

function Comentarios() {
  const { servicioId } = useParams(); // Obtiene el ID del servicio desde la URL
  const [comentarioTexto, setComentarioTexto] = useState("");
  const [comentarios, setComentarios] = useState([]);
  const [loading, setLoading] = useState(false);

  async function SendComentario() {
    if (!comentarioTexto.trim()) {
      console.warn("El comentario está vacío");
      return;
    }

    setLoading(true);

    const objcomentario = {
      comentario: comentarioTexto,
    };
    const peticion = await Fetch.postData(objcomentario, `api/Comentarios/${servicioId}/`); 
  }

  return (
    <div>
      <h3>Comentarios</h3>
      <form onSubmit={(e) => { e.preventDefault(); SendComentario(); }}>
        <textarea
          value={comentarioTexto}
          onChange={(e) => setComentarioTexto(e.target.value)}
          placeholder="Escribe tu comentario aquí..."
          rows="4"
          cols="50"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar Comentario"}
        </button>
      </form>

      <div className="comentarios-lista">
        {comentarios.length > 0 ? (
          comentarios.map((comentario, index) => (
            <div key={index} className="comentario-item">
              <p>{comentario.comentario}</p>
            </div>
          ))
        ) : (
          <p>No hay comentarios aún.</p>
        )}
      </div>
    
    </div>
  );
}

export default Comentarios;

  import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Fetch from '../../Services/Fetch';
import "../Styles/Comentarios.css"; 
import Opciones from "../../Multi_Images/Opciones.svg"; // Asegúrate de que esta ruta sea correcta
function Comentarios() {
  const { servicioId } = useParams();
  console.log("Servicio ID:", servicioId);
  const [comentarioTexto, setComentarioTexto] = useState('');
  const [comentarios, setComentarios] = useState([]);
  const [loading, setLoading] = useState(false);


  // Obtener comentarios existentes al montar el componente
  useEffect(() => {
    async function cargarComentarios() {
      const data = await Fetch.getData(`api/Comentarios/${servicioId}/`);
      if (data && Array.isArray(data)) {
        setComentarios(data);
      }
    }
    cargarComentarios();
  }, [servicioId]);

  // Enviar nuevo comentario
  async function SendComentario() {
    if (!comentarioTexto.trim()) return;

    setLoading(true);

    const objcomentario = { 
      usuario:localStorage.getItem("id"),
      comentario: comentarioTexto,

    };
    const respuesta = await Fetch.postData(objcomentario, `api/Comentarios/${servicioId}/`);
    console.log(respuesta);
    

    if (respuesta?.id) {
      setComentarios([...comentarios, respuesta]); // Agrega el nuevo comentario a la lista
      setComentarioTexto('');
    }

    setLoading(false);
  }

  return (
    <div className="Comentarios_Container">
      <h3>Comentarios</h3>

      <form onSubmit={(e) => { e.preventDefault(); SendComentario(); }}>
        <textarea
          value={comentarioTexto}
          onChange={(e) => setComentarioTexto(e.target.value)}
          placeholder="Escribe tu comentario aquí..."
          rows="4"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Enviando...' : 'Enviar Comentario'}
        </button>
      </form>

      <div className="comentarios-lista">
     
        {comentarios.length > 0 ? (
          comentarios.map((comentario, index) => (
            <div key={index} className="comentario-item">
              <p><strong>{comentario.usuario_nombre || 'Anónimo'}:</strong> {comentario.comentario}</p>
              {comentario.fecha && (
                <span className="fecha">
                  {new Date(comentario.fecha).toLocaleString()}
                </span>
              )}
              <img className='t' src={Opciones} alt="" /> 

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
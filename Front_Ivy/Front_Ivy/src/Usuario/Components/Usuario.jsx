import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Categories from '../../User/Components/Categories';
import Trabajador from '../../Trabajador/Components/Trabajador';
import "../Styles/Usuarios.css";

function Usuario() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/Log");
    }
  }, [navigate]);

  return (
    <div className="usuario-page">
      <header className="seccion-ivy">
        <div className="seccion-texto">
          <h2 className="seccion-titulo">Explora lo que IVY tiene para ti</h2>
          <p className="seccion-subtitulo">
            Conecta con los servicios ideales para ti y descubre nuevas oportunidades a través de nuestras categorías.
          </p>
        </div>
      </header>

      <section className="usuario-categorias">
        <h3 id='Categorías'>Categorías</h3>
        <Categories modoUsuario={true} />
      </section>

      <section className="usuario-servicios">
        <h3 id='Servicios'>Servicios disponibles</h3>
        <Trabajador modoUsuario={true} />
      </section>
    </div>
  );
}

export default Usuario;
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Categories from '../../User/Components/Categories';
import Trabajador from '../../Trabajador/Components/Trabajador';
import "../Styles/Usuarios.css";
import Rol_Cambio from '../../Multi_Components/Rol_Cambio';

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
<br />
      <div className="Cambio-rol">
      <h2>¿Quieres formar parte de nuestra familia?</h2>
      <p className='Parrafo' >Unete a nuestro equipo de trabajadores y ofrece tus servicios laborales a todos nuestros usuarios</p>
        <Rol_Cambio/>
      </div>
    </div>

    
  );
}

export default Usuario;
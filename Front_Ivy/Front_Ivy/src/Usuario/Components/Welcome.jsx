import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Logo/Logo.png';
import '../Styles/Welcome.css'; // Estilos suaves IVY

function Welcome() {
  return (
    <div className="welcome-container">
      <img src={Logo} alt="IVY logo" className="welcome-logo" />
      <h1>¡Bienvenido a IVY!</h1>
      <p className="welcome-message">
        Tu cuenta ha sido creada con éxito. Estamos encantados de tenerte aquí 🌿
      </p>
      <Link to="/" className="btn-empezar">
        Empezar ahora
      </Link>
    </div>
  );
}

export default Welcome;
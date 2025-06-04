import "../Styles/Home.css"
import Logo from "../../Logo/Logo.png"
function Header() {
  return (
    <header className="headera">
        <img src={Logo} alt="" className="Logo" />
        <nav className="nav">
           <p className="Texto1">Inicio</p>
           <p className="Texto1">Contactos </p>
            <p className="Texto1">Inicia sesión/Registrate </p>
        </nav>
    </header>
    )
}

export default Header
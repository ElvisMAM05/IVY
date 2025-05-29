import "./Home.css"
import Logo from "../Logo/Logo.png"
function Header() {
  return (
    <header className="headera">
        <img src={Logo} alt="" className="Logo" />
    </header>
  )
}

export default Header
import "../Log-in/S_Log_in.css"
import IVY_2_1 from "./Images/IVY_2_1.png"
import Logo from "../Logo/Logo.png"

function Log_in() {

  function Send(){}

  return (
    <>
    <div className="Principal_Login">

       
       <img src={Logo} alt="Decoración" className="Logo" />
       <br />
      <h2>
        ¡Bienvenido de nuevo!
      </h2>
      <form action="">
       
        <input type="" placeholder="Username" className="input-field"/>
        <img src={IVY_2_1} alt="Decoración" className="IMG-HOJA1" />
        <input type="password" placeholder="Password" className="input-field"/>
         <img src={IVY_2_1} alt="Decoración" className="IMG-HOJA2" />
        <p>¿Olvidaste la contraseña?</p>
        <button onClick={Send} className="btn">Ingresar</button>

      </form>
    </div>
    </>
  )
}

export default Log_in
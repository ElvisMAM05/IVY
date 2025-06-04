import Fetch from "../../Services/Fetch";
import "../../Log-in/styles/S_Log_in.css"
import IVY_2_1 from "../../Log-in/Images/IVY_2_1.png"
import Logo from "../../Logo/Logo.png"
import { useState } from 'react'
import Swal from 'sweetalert2';
import{Link} from 'react-router-dom'
import React from 'react'
function Log_in() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  async function Send(e) {
    e.preventDefault();
    const objUsuario = {
          "username": Username,
          "password": Password
    }
       const peticion = await Fetch.postData(objUsuario,"api/Log-in/")
  
    console.log(peticion);
    if (peticion.exito) {
Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Inicio de sesión exitoso",
  text: "¡Bienvenido de nuevo!",
  showConfirmButton: false,
  timer: 1500
}).then(() => {
  // Aquí puedes redirigir al usuario a otra página o realizar otras acciones
  window.location.href = "/"; // Redirige a la página de inicio
});
      // Aquí puedes redirigir al usuario a otra página o realizar otras acciones
    } else if (peticion.Error) {
    alert(peticion.Error);
    }
    else{
      alert(
        "Error en el servidor"
      )
    }
   if (Username === "" || Password === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }
  }
 
  

  return (
    <>
    <div className="Principal_Login">
      <div className="logo-container">
    <img src={Logo} alt="IVY Logo" className="logo" />
</div>
   
      <h2>
        ¡Bienvenido de nuevo!
      </h2>
      <form action="">
       
        <input type="" onChange={(e)=>setUsername(e.target.value)}  value={Username} placeholder="Username" className="input-field"/>
       
        <input type="password" onChange={(e)=>setPassword(e.target.value)} value={Password} placeholder="Password" className="input-field"/>
        
        <p>¿Olvidaste la contraseña?</p>
        <button onClick={Send} className="btn">Ingresar</button>

      </form>
    </div>
    </>
  )
}

export default Log_in
import Fetch from "../../Services/Fetch";
import "../../Log-in/styles/S_Log_in.css"
import IVY_2_1 from "../../Log-in/Images/IVY_2_1.png"
import Logo from "../../Logo/Logo.png"
import { useState,} from 'react'
import Swal from 'sweetalert2';
import{Link,useNavigate} from 'react-router-dom'
import React from 'react'
function Log_in() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const navigate=useNavigate("")

async function Send(e) {
  e.preventDefault();

  if (Username === "" || Password === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  const objUsuario = {
    username: Username,
    password: Password
  };

  const peticion = await Fetch.postData(objUsuario, "api/Log-in/");
  console.log(peticion);

  if (peticion.exito) {
    localStorage.setItem("token", peticion.token);
    localStorage.setItem("id", peticion.id);
    localStorage.setItem("grupo", peticion.grupo); 

  
      

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Inicio de sesión exitoso",
      text: "¡Bienvenido de nuevo!",
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
        if (peticion.grupo === "Administrador") {
            navigate("/admin"); 
          } else if (peticion.grupo === "Cliente") {  
            navigate("/usuario"); 
          }
             else if (peticion.grupo === "Trabajador") {
            navigate("/Trabajador"); 
          }
        else{
          console.log("eeee")
        }
    });
  } else if (peticion.Error) {
    alert(peticion.Error);
  } else {
    alert("Error en el servidor");
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
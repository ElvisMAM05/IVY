import { useState, useEffect } from "react";
import Fetch from "../Services/Fetch";
import "../Register/S_Register.css"
import IVY3 from "./Images/IVY3.png";
import IVY_2_1 from "../Register/Images/IVY_2_1.png"
import IVY_IZQ from "./Images/IVI_IZQ.png"


function Register() {
  const [User_name, setUser_name] = useState("");
  const [User_email, setUser_email] = useState("");
  const [User_age, setUser_age] = useState();
  const [User_password, setUser_password] = useState("");
  const [User_ID, setUser_ID] = useState();

  async function Send(e) {
    e.preventDefault()
    const objUsuario = {
        "username": User_name,
        "correo": User_email,
        "edad": User_age,
        "password": User_password,
        "identificacion": User_ID
    }
    const peticion = await Fetch.postData(objUsuario,"api/usuario/")

    console.log(peticion);
    if (peticion.exito) {
      alert("Registro exitoso!");
      // Aquí puedes redirigir al usuario a otra página o realizar otras acciones
    } else {
      alert("Error en el registro. Por favor, verifica tus datos.");
    }
    
  }

  return (
    <>
      <div className="Principal_Register">
<div className="form-group">
      <img src={IVY3} alt="Decoración" className="header-image" />
        <img src={IVY_IZQ} alt="Decoración" className="header-image_izq" />
  
</div>
        
        <h1>Registrate</h1>
        <form action="">
          
          <input placeholder="Username" className="input-field"  onChange={(e)=>setUser_name(e.target.value)} value={User_name} type=""/>
          <img src={IVY_2_1} alt="Decoración" className="input-icon" />
          <input placeholder="Email" className="input-field" value={User_email} onChange={(e)=>setUser_email(e.target.value)} type="email"/>
          <img src={IVY_2_1} alt="Decoración" className="input-icon" />
          <input placeholder="Age" className="input-field" value={User_age} onChange={(e)=>setUser_age(e.target.value)} type="number" />
          <img src={IVY_2_1} alt="Decoración" className="input-icon" />
          <input placeholder="Identification" className="input-field" maxLength={9} max={9} value={User_ID} onChange={(e)=>setUser_ID(e.target.value)} type="number"/>
          <img src={IVY_2_1} alt="Decoración" className="input-icon" />
          <input placeholder="Password" className="input-field" value={User_password} onChange={(e)=>setUser_password(e.target.value)} type="password"/>
          <img src={IVY_2_1} alt="Decoración" className="input-icon" />
          <p>¿Ya tienes cuenta?</p>
          
          

          <button className="btn" onClick={Send}>Registrarse</button>
       
        </form>
      </div>
    </>
  );
}

export default Register;

import { useState, useEffect } from "react";
import Fetch from "../Services/Fetch";
import "../Register/S_Register.css"
function Register() {
  const [User_name, setUser_name] = useState("");
  const [User_email, setUser_email] = useState("");
  const [User_age, setUser_age] = useState(0);
  const [User_password, setUser_password] = useState("");
  const [User_ID, setUser_ID] = useState(0);

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
    
  }

  return (
    <>
      <div className="Principal_Register">
        <h1>Registrate</h1>
        <form action="">
          <label  htmlFor="">Username:</label>
          <input className="input-field"  onChange={(e)=>setUser_name(e.target.value)} value={User_name} type="" />
          <label htmlFor="">Correo:</label>
          <input className="input-field" value={User_email} onChange={(e)=>setUser_email(e.target.value)} type="email" />
          <label htmlFor="">Edad:</label>
          <input className="input-field" value={User_age} onChange={(e)=>setUser_age(e.target.value)} type="number" />
          <label htmlFor="">Contraseña:</label>
          <input className="input-field" value={User_password} onChange={(e)=>setUser_password(e.target.value)} type="password" />
          <label htmlFor="">Identificación:</label>
          <input className="input-field" value={User_ID} onChange={(e)=>setUser_ID(e.target.value)} type="number" />

          <button className="btn" onClick={Send}>Enviar</button>
       
        </form>
      </div>
    </>
  );
}

export default Register;

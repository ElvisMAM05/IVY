import { useState } from "react";
import Fetch from "../Services/Fetch";
import "../Register/S_Register.css";
import IVY3 from "./Images/IVY3.png";
import IVY_2_1 from "../Register/Images/IVY_2_1.png";
import IVY_IZQ from "./Images/IVI_IZQ.png";
import Swal from "sweetalert2";
import IMGS from "../Multi_Components/IMGS.jsx";
import { Typography } from "@mui/material";

function Register() {
  const [User_name, setUser_name] = useState("");
  const [User_email, setUser_email] = useState("");
  const [User_age, setUser_age] = useState("");
  const [User_password, setUser_password] = useState("");
  const [User_ID, setUser_ID] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function Send(e) {
    e.preventDefault();

    if (
      User_name === "" ||
      User_email === "" ||
      User_age === "" ||
      User_password === "" ||
      User_ID === ""
    ) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const objUsuario = {
      username: User_name,
      correo: User_email, // ← corregido aquí
      edad: User_age,
      password: User_password,
      identificacion: User_ID,
      Imagen_U: imageUrl,
    };

    const peticion = await Fetch.postData(objUsuario, "api/usuario/");

    if (peticion.exito) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registro exitoso",
        text: "¡Bienvenido a IVY!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        window.location.href = "/Log"; // ← bien estructurado
      });
    } else {
      alert("Error en el registro. Por favor, verifica tus datos.");
    }
  }

  const handleImageUpload = (url) => {
    setImageUrl(url);
  };

  return (
    <>
      <div className="Principal_Register">
   

        <h1>Registrate</h1>
        <form onSubmit={Send}>
          <input
            placeholder="Username"
            className="input-field"
            onChange={(e) => setUser_name(e.target.value)}
            value={User_name}
            type="text"
          />
          <img src={IVY_2_1} alt="Decoración" className="input-icon" />

          <input
            placeholder="Email"
            className="input-field"
            value={User_email}
            onChange={(e) => setUser_email(e.target.value)}
            type="email"
          />
          <img src={IVY_2_1} alt="Decoración" className="input-icon" />

          <input
            placeholder="Age"
            className="input-field"
            value={User_age}
            onChange={(e) => setUser_age(e.target.value)}
            type="number"
          />
          <img src={IVY_2_1} alt="Decoración" className="input-icon" />

          <input
            placeholder="Identification"
            className="input-field"
            maxLength={9}
            value={User_ID}
            onChange={(e) => setUser_ID(e.target.value)}
            type="text"
          />
          <img src={IVY_2_1} alt="Decoración" className="input-icon" />

          <input
            placeholder="Password"
            className="input-field"
            value={User_password}
            onChange={(e) => setUser_password(e.target.value)}
            type="password"
          />
          <img src={IVY_2_1} alt="Decoración" className="input-icon" />

          <div className="upload-section">
            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
              Imagen representativa:
            </Typography>
            <IMGS onUploadComplete={handleImageUpload} />
            {imageUrl && (
              <div className="image-preview" style={{ marginTop: "10px" }}>
                <Typography variant="caption">Vista previa:</Typography>
                <img
                  src={imageUrl}
                  alt="Preview categoría"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "150px",
                    display: "block",
                    margin: "10px auto",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                />
              </div>
            )}
          </div>

          <br />
          <a href="/Log">¿Ya tienes cuenta?</a>
          <br />
          <br />
          <button className="btn" type="submit">
            Registrarse
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
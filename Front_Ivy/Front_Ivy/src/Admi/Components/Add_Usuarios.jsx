import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import Fetch from '../../Services/Fetch.jsx'; 
import '../Styles/Add_Usuarios.css'; 

function Add_Usuarios() {
  const [User_name, setUser_name] = useState("");
  const [User_email, setUser_email] = useState("");
  const [User_age, setUser_age] = useState("");
  const [User_password, setUser_password] = useState("");
  const [User_ID, setUser_ID] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      correo: User_email,
      edad: User_age,
      password: User_password,
      identificacion: User_ID
    };

    const peticion = await Fetch.postData(objUsuario, "api/usuario/");

    if (peticion?.exito) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registro exitoso",
        text: "¡Bienvenido a IVY!",
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      alert("Error en el registro. Por favor, verifica tus datos.");
    }
  }

  return (
    <>
      <Button variant="primary" className='Btn-Agregar' onClick={handleShow}>
        Agregar Usuario
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Registro de Usuario
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={Send}>
            <input
              type="text"
              placeholder="Nombre de usuario"
              value={User_name}
              onChange={(e) => setUser_name(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={User_email}
              onChange={(e) => setUser_email(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Edad"
              value={User_age}
              onChange={(e) => setUser_age(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={User_password}
              onChange={(e) => setUser_password(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Identificación (9 dígitos)"
              value={User_ID}
              onChange={(e) => setUser_ID(e.target.value)}
              required
            />
            <br />
            <Button variant="success" type="submit">
              Enviar registro
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Add_Usuarios;
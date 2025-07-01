import React from 'react'
import Swal from 'sweetalert2';

function Log_out() {
  Swal.fire({
    title: "¿Seguro que quieres cerrar sesión?",
    text: "Esta acción te desconectará de tu cuenta.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#21a179",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, cerrar sesión",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      localStorage.removeItem("grupo");

      Swal.fire({
        icon: "success",
        title: "Sesión cerrada",
        text: "Has salido correctamente.",
        timer: 1200,
        showConfirmButton: false,
      }).then(() => {
        window.location.href = "/"; 
      });
    }
  });
}

export default Log_out
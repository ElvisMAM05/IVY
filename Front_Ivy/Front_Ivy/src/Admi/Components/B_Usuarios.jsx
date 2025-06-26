import React from 'react'
import Fetch from "../../Services/Fetch";
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';



function B_Usuarios() {
    const [Usuarios, setUsuarios] = useState([]);

 useEffect(() => {
        Traer_Usuarios();
    }, []);


async function Traer_Usuarios() {
    const data = await Fetch.getData("api/Usuarios/");
    
    setUsuarios(data);
  }

async function Borrar_Usuarios(id) {
    console.log("Usuarios obtenidos:", id);

    const confirm = window.confirm("¿Seguro que deseas eliminar este servicio?");
    if (!confirm) return;

    try {
      const resultado = await Fetch.deleteData(id+"/","api/Usuarios");
      Swal.fire({
        icon: "success",
        title: "Usuario eliminado",
        text: resultado.message,
        timer: 1500,
        showConfirmButton: false,
      });
      await Traer_Usuarios(); 
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al eliminar",
        text: "No se pudo eliminar el servicio. Verifica si está vinculado a categorías.",
      });
    }
    
}
   
    




  return (
    <div>

        <div className="Borrar_Categorias_Container">
      <h2>Usuarios Registrados</h2>
      {Usuarios.map((Usuario) => (
        <div key={Usuario.id} className="Categoria_Item">
          <span>{Usuario.username}</span>
          <button onClick={() => Borrar_Usuarios(Usuario.id)}>Eliminar</button>
        </div>
      ))}
    </div>

    </div>
  )
}

export default B_Usuarios
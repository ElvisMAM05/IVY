import React from 'react'
import Fetch from "../../Services/Fetch";
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';



function B_Servicios() {
    const [servicios, setServicios] = useState([]);

 useEffect(() => {
        Traer_Servicios();
    }, []);


async function Traer_Servicios() {
    const data = await Fetch.getData("api/Servicios/");
    
    setServicios(data);
  }

async function Borrar_Servicios(id) {
    console.log("Servicios obtenidos:", id);

    const confirm = window.confirm("¿Seguro que deseas eliminar este servicio?");
    if (!confirm) return;

    try {
      const resultado = await Fetch.deleteData(id+"/","api/ServiciosE");
      Swal.fire({
        icon: "success",
        title: "Servicio eliminado",
        text: resultado.message,
        timer: 1500,
        showConfirmButton: false,
      });
      await Traer_Servicios(); // Actualiza la lista después de borrar
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
      <h2>Servicios disponibles</h2>
      {servicios.map((service) => (
        <div key={service.id} className="Categoria_Item">
          <span>{service.nombre_servicio}</span>
          <button onClick={() => Borrar_Servicios(service.id)}>Eliminar</button>
        </div>
      ))}
    </div>

    </div>
  )
}

export default B_Servicios
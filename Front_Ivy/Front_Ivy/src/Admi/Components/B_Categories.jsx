import React, { useEffect, useState } from 'react';
import Fetch from "../../Services/Fetch";
import Swal from 'sweetalert2';
import "../Styles/B_Categories.css";

function B_Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    traerCategorias();
  }, []);

  async function traerCategorias() {
    const data = await Fetch.getData("api/Categories/");
    setCategories(data);
  }

  async function borrarCategoria(id) {
    console.log("ID a eliminar:", id);
    const confirm = window.confirm("¿Seguro que deseas eliminar esta categoría?");
    if (!confirm) return;

    try {
      const resultado = await Fetch.deleteData(id+"/","api/Categories");

      Swal.fire({
        icon: "success",
        title: "Categoría eliminada",
        text: resultado.message,
        timer: 1500,
        showConfirmButton: false,
      });

      await traerCategorias(); // Actualiza la lista después de borrar
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al eliminar",
        text: "No se pudo eliminar la categoría. Verifica si está vinculada a servicios.",
      });
    }
  }

  return (
    <div className="Borrar_Categorias_Container">
      <h2>Categorías disponibles</h2>
      {categories.map((cat) => (
        <div key={cat.id} className="Categoria_Item">
          <span>{cat.nombre_c}</span>
          <button onClick={() => borrarCategoria(cat.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default B_Categories;
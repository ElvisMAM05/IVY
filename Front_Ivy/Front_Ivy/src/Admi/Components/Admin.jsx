import { useState } from 'react';
import '../Styles/Admin_cs.css'; 

function Admin() {

    const [categorias, setCategorias] = useState(["Salud", "Educación", "Negocios"]);
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "Usuario 1", tipo: "Cliente" },
    { id: 2, nombre: "Usuario 2", tipo: "Profesional" }
  ]);
  
  const agregarCategoria = () => {
    const nuevaCategoria = prompt("Ingresa nueva categoría:");
    if (nuevaCategoria) {
      setCategorias([...categorias, nuevaCategoria]);
    }
  };

  const eliminarUsuario = (id) => {
    setUsuarios(usuarios.filter(usuario => usuario.id !== id));
  };


  return (
    <div className='Admin_Pages'>
    <h1 className="Admin_Title">Panel de Administración</h1>
    <div className="Admin_Categorias">
        <h2>Categorías</h2>
        <ul>
          {categorias.map((categoria, index) => (
            <li key={index}>{categoria}</li>
          ))}
        </ul>
        <button onClick={agregarCategoria}>Agregar Categoría</button>
      </div>
       <div className="Admin_Usuarios">
        <h2>Usuarios</h2>
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>
              {usuario.nombre} - {usuario.tipo}
              <button onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    <div className="Admin_Statistics">
        <h2>Estadísticas</h2>
        <p>Total de categorías: {categorias.length}</p>
        <p>Total de usuarios: {usuarios.length}</p>
    </div>

       
    </div>
  )
}

export default Admin
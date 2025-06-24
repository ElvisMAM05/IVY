import { useState, useEffect } from 'react';
import '../Styles/Admin_cs.css'; 
import Fetch from "../../Services/Fetch"; 
import Swal from 'sweetalert2';
import Add_Categories from './Add_Categories'; // Importa el componente de agregar categorías
import Add_Servicios from '../Components/add_Servicios.jsx'

function Admin() {
    const [categorias, setCategorias] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [mostrarUsuarios, setMostrarUsuarios] = useState(false);
    const [cargando, setCargando] = useState(false);
    const [servicios,setServicios]=useState([])

    useEffect(() => { 
        obtenerCategorias();
        ObtenerServicios();
    }, []);

    async function obtenerCategorias() {
        const response = await Fetch.getData("api/Categories/");
        setCategorias(response);
    }

    async function ObtenerServicios() {
        const response=await Fetch.getData("api/Servicios/")
        setServicios(response)
        
    }

    async function Esconder_Usuarios() {
        if(!mostrarUsuarios) {
            setCargando(true);
            const response = await Fetch.getData("api/Usuarios/");
            setUsuarios(response);
            setCargando(false);
        }
        setMostrarUsuarios(!mostrarUsuarios);
    }

    return (
        <div className="admin-container">
            <div className="admin-buttons">
                <button onClick={Esconder_Usuarios} className="admin-button"disabled={cargando} >
                    {cargando ? 'Cargando...' : 
                    mostrarUsuarios ? 'Ocultar Usuarios' : 'Mostrar Usuarios'}
                </button>
            </div>

            {mostrarUsuarios && (
                <div className='admin-data'>
                    <h2>Usuarios</h2>
                    {usuarios.length > 0 ? (
                        usuarios.map((usuario) => (
                            <div key={usuario.id}>{usuario.username}</div>
                        ))
                    ) : (
                        <p>No hay usuarios disponibles</p>
                    )}
                </div>
            )}
                <br />

            <div className="admin-data">
                <h2>Categorías</h2>
                {categorias.length > 0 ? (
                    <div>
                        {categorias.map((categoria) => (
                            <div className='Letters' key={categoria.id}>{categoria.nombre_c}</div>
                        ))}
                    </div>
                ) : (
                    <p>No hay categorías disponibles.</p>
                )}
                <Add_Categories />
                
            </div>

            
           
        </div>
    )
}

export default Admin;
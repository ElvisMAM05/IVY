import React from 'react'
import '../Styles/add_cat_cs.css';
import Fetch from "../../Services/Fetch";
import { useState } from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';
import Swal from 'sweetalert2';

function Add_Categories() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [nombreCategoria, setNombreCategoria] = useState('');

    async function Add_Categorias(e) {
        e.preventDefault();
        const nuevaCategoria = {
            "nombre_c": nombreCategoria
        };
        
        try {
            const response = await Fetch.postData(nuevaCategoria, "api/Categories/");
            
            if (response) {
                setNombreCategoria(''); // Limpiar el campo de entrada
                handleClose(); // Cerrar el modal después de agregar
                Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Categoría agregada exitosamente",
                text: "¡Ahora puedes organizar tus servicios!",
                showConfirmButton: false,
                timer: 1500
                });
            } else {
                alert("Error al agregar la categoría: " + response.Error);
            }
        } catch (error) {
            alert("Error al conectar con el servidor");
            console.error(error);
        }
    }

    return (
        <>
            <div className='container_Add_Cat'>
                <button className='Btn_add' onClick={handleOpen}>Agregar categorías</button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Agregar una nueva Categoría
                        </Typography>
                        <div className="input-container">
                        <input value={nombreCategoria} onChange={(e) => setNombreCategoria(e.target.value)} 
                        placeholder="Nombre de la categoría" className="input-field" />

                            <button  className='Btn_add' onClick={Add_Categorias}>Agregar</button>
                        </div>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Agrega una nueva categoría para organizar tus servicios.
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default Add_Categories

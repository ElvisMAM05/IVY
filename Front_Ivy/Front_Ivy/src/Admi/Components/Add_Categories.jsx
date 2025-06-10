import React, { useState } from 'react';
import '../Styles/add_cat_cs.css';
import Fetch from "../../Services/Fetch";
import { Button, Modal, Box, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import IMGS from '../../Multi_Components/IMGS';

function Add_Categories() {
    const [open, setOpen] = useState(false);
    const [nombreCategoria, setNombreCategoria] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500, 
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setNombreCategoria('');
        setImageUrl('');
    };

    const handleImageUpload = (url) => {
        setImageUrl(url);
    };

    async function Add_Categorias(e) {
        e.preventDefault();
        
        if (!nombreCategoria.trim()) {
            Swal.fire('Error', 'El nombre de la categoría es obligatorio', 'error');
            return;
        }

        setLoading(true);
        const nuevaCategoria = {
            "nombre_c": nombreCategoria,
            "imagen_c": imageUrl // Agregamos la URL de la imagen
        };
        
        
        try {
            const response = await Fetch.postData(nuevaCategoria, "api/Categories/");
            
            if (response) {
                handleClose();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Categoría agregada exitosamente",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                throw new Error(response.Error || "Error desconocido");
            }
        } catch (error) {
            Swal.fire('Error', `Error al agregar la categoría: ${error.message}`, 'error');
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='container_Add_Cat'>
            <Button 
                variant="contained" 
                color="primary"
                onClick={handleOpen}
                className='Btn_add'
                sx={{ 
                    mb: 2,
                    fontWeight: 'bold',
                    fontSize: '1rem'
                }}
            >
                + Agregar categoría
            </Button>
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h5" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 3 }}>
                        Nueva Categoría
                    </Typography>
                    
                    <div className="form-container">
                        <div className="input-group">
                            <label htmlFor="nombre-categoria">Nombre de la categoría*</label>
                            <input 
                                id="nombre-categoria"
                                value={nombreCategoria} 
                                onChange={(e) => setNombreCategoria(e.target.value)} 
                                placeholder="Ej: Electrónica, Ropa, Hogar" 
                                className="input-field" 
                                required
                                disabled={loading}
                            />
                        </div>
                        
                        <div className="upload-section">
                            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
                                Imagen representativa:
                            </Typography>
                            <IMGS onUploadComplete={handleImageUpload} />
                            {imageUrl && (
                                <div className="image-preview" style={{ marginTop: '10px' }}>
                                    <Typography variant="caption">Vista previa:</Typography>
                                    <img 
                                        src={imageUrl} 
                                        alt="Preview categoría" 
                                        style={{ 
                                            maxWidth: '100%', 
                                            maxHeight: '150px',
                                            display: 'block',
                                            margin: '10px auto',
                                            border: '1px solid #ddd',
                                            borderRadius: '4px'
                                        }} 
                                    />
                                </div>
                            )}
                        </div>
                        
                        <Button 
                            variant="contained" 
                            color="primary"
                            onClick={Add_Categorias}
                            disabled={loading || !nombreCategoria.trim()}
                            sx={{ 
                                mt: 3,
                                width: '100%',
                                py: 1.5,
                                fontSize: '1rem'
                            }}
                            size="large"
                        >
                            {loading ? (
                                <span>Guardando...</span>
                            ) : (
                                <span>Guardar Categoría</span>
                            )}
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default Add_Categories;
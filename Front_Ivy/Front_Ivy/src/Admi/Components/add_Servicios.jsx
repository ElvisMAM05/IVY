import React, { useState, useEffect } from "react";
import "../Styles/add_cat_cs.css";
import Fetch from "../../Services/Fetch";
import { Button, Modal, Box, Typography } from "@mui/material";
import Swal from "sweetalert2";
import IMGS from "../../Multi_Components/IMGS";

function Add_Servicios() {
  const [open, setOpen] = useState(false);
  const [nombreServicio, setNombreServicio] = useState("");
  const [descripcionServicio, setDescripcionServicio] = useState("");
  const [loading, setLoading] = useState(false);
  const [Imagen_Servicio, setImagenServicio] = useState("");
  const [Categoria_Servicio, setCategoriaServicio] = useState("");
  const [descripcion_larga, setDescripcion_larga] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [Usuarios, setUsuariosSeleccionado] = useState("");


  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  async function obtenerCategorias() {
    const response = await Fetch.getData("api/Categories/");
    setCategorias(response);
  }

  useEffect(() => {
    async function obtenerUsuarios() {
      try {
        const response = await Fetch.getData("api/Usuarios/");
        setUsuarios(response);
      } catch (error) {
        console.error("Error al cargar usuarios:", error);
      }
    }
    obtenerCategorias();
    obtenerUsuarios();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNombreServicio("");
  };

  const handleImageUpload = (url) => {
    setImagenServicio(url);
  };

  async function Add_Services(e) {
    e.preventDefault();

    if (!nombreServicio.trim()) {
      Swal.fire("Error", "El nombre de la categoría es obligatorio", "error");
      return;
    }

    setLoading(true);
    const nuevoServicio = {
      nombre_servicio: nombreServicio,
      descripcion_Servicio: descripcionServicio,
      descripcion_larga: descripcion_larga,
      imagen_servicio: Imagen_Servicio,
      Categoria_Servicio: Categoria_Servicio,
      usuario_trabajador: Usuarios,
    };

    try {
      const response = await Fetch.postData(nuevoServicio, "api/Servicios/");

      if (response) {
        handleClose();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Categoría agregada exitosamente",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        throw new Error(response.Error || "Error desconocido");
      }
    } catch (error) {
      Swal.fire(
        "Error",
        `Error al agregar la categoría: ${error.message}`,
        "error"
      );
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container_Add_Cat">
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        className="Btn_add"
        sx={{
          mb: 2,
          fontWeight: "bold",
          fontSize: "1rem",
        }}
      >
        + Agregar Servicio
      </Button>

      <Modal
        open={open}   
        onClose={handleClose}
        style={{height: "100vh", overflowY: "auto"}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ textAlign: "center", mb: 3 }}
          >
            Nuevo Servicio
          </Typography>

          <div className="form-container">
            <div className="input-group">
              <label htmlFor="nombre-categoria">Nombre del Servicio*</label>
              <input
                id="nombre-categoria"
                value={nombreServicio}
                onChange={(e) => setNombreServicio(e.target.value)}
                placeholder="Ej: Fontanero, Diseñador, etc."
                className="input-field"
                required
                disabled={loading}
              />
            </div>
            <div className="input-group">
              <label htmlFor="descripcion-categoria">
                Descripción corta del Servicio
              </label>
              <input
                value={descripcionServicio}
                onChange={(e) => setDescripcionServicio(e.target.value)}
                id="descripcion-categoria"
                placeholder="Descripción del servicio"
                className="input-field"
                rows="4"
                disabled={loading}
              />
            </div>
            <div className="input-group">
              <label htmlFor="descripcion-larga">Descripción Larga</label>
              <textarea
                id="descripcion-larga"
                value={descripcion_larga}
                onChange={(e) => setDescripcion_larga(e.target.value)}
                placeholder="Descripción larga del servicio"
                className="input-field"
                rows="4"
                disabled={loading}
              />
            </div>
            <div className="upload-section">
              <Typography
                variant="subtitle1"
                sx={{ mb: 1, fontWeight: "bold" }}
              >
                Imagen representativa:
              </Typography>

              <IMGS onUploadComplete={handleImageUpload} />
              {Imagen_Servicio && (
                <div className="image-preview" style={{ marginTop: "10px" }}>
                  <Typography variant="caption">Vista previa:</Typography>
                  <img
                    src={Imagen_Servicio}
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

            <div className="input-group">
              <label htmlFor="categoria-servicio">Categoría del Servicio</label>
              <select
                id="categoria-servicio"
                value={Categoria_Servicio}
                onChange={(e) => setCategoriaServicio(e.target.value)}
                className="input-field"
                disabled={loading}
              >
                <option value="">Selecciona una categoría</option>
                {categorias.map((categoria) => (
                  <option key={categoria.id} value={categoria.id}>
                    {categoria.nombre_c}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="usuario-servicio">Seleccionar Usuario</label>
              <select
                id="usuario-servicio"
                value={Usuarios} // Guarda el ID seleccionado
                onChange={(e) => setUsuariosSeleccionado(e.target.value)} // Asigna el ID
                className="input-field"
                disabled={loading}
              >
                <option value="">Selecciona un usuario</option>
                {usuarios.map((usuario) => (
                 <option key={usuario.id} value={usuario.id}>
                 {usuario.username}
</option>

                ))}
              </select>
            </div>

            <Button
              variant="contained"
              color="primary"
              onClick={Add_Services}
              disabled={loading || !nombreServicio.trim()}
              sx={{
                mt: 3,
                width: "100%",
                py: 1.5,
                fontSize: "1rem",
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

export default Add_Servicios;

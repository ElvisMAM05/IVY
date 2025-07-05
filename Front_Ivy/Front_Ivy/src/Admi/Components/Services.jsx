import React, { useState, useEffect } from "react";
import "../Styles/add_cat_cs.css";
import Fetch from "../../Services/Fetch";
import { Button, Modal, Box, Typography } from "@mui/material";
import Swal from "sweetalert2";
import IMGS from "../../Multi_Components/IMGS";

function Add_MiServicio() {
  const [open, setOpen] = useState(false);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [descripcionLarga, setDescripcionLarga] = useState("");
  const [imagen, setImagen] = useState("");
  const [categoria, setCategoria] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(false);

  const usuarioId = localStorage.getItem("id");

  useEffect(() => {
    async function obtenerCategorias() {
      const res = await Fetch.getData("api/Categories/");
      if (res) setCategorias(res);
    }
    obtenerCategorias();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNombre("");
    setDescripcion("");
    setDescripcionLarga("");
    setImagen("");
    setCategoria("");
  };

  const handleImageUpload = (url) => setImagen(url);

  async function guardarServicio(e) {
    e.preventDefault();
    if (!nombre.trim()) {
      Swal.fire("Error", "El nombre es obligatorio", "error");
      return;
    }

    setLoading(true);
    const nuevoServicio = {
      nombre_servicio: nombre,
      descripcion_Servicio: descripcion,
      descripcion_larga: descripcionLarga,
      imagen_servicio: imagen,
      Categoria_Servicio: categoria,
      usuario_trabajador: usuarioId,
    };

    try {
      const res = await Fetch.postData(nuevoServicio, "api/Servicios/");
      if (res) {
        handleClose();
        Swal.fire("Éxito", "Servicio agregado correctamente", "success");
      } else {
        throw new Error("Error inesperado");
      }
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    } finally {
      setLoading(false);
    }
  }

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    borderRadius: "12px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="container_Add_Cat">
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        sx={{ mb: 2, fontWeight: "bold", fontSize: "1rem" }}
      >
        + Publicar Servicio
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        style={{ height: "100vh", overflowY: "auto" }}
      >
        <Box sx={modalStyle}>
          <Typography variant="h5" sx={{ mb: 3, textAlign: "center" }}>
            Nuevo Servicio
          </Typography>

          <form onSubmit={guardarServicio} className="form-container">
            <div className="input-group">
              <label>Nombre del Servicio*</label>
              <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ej: Técnico de computadoras"
                className="input-field"
                required
                disabled={loading}
              />
            </div>

            <div className="input-group">
              <label>Descripción corta</label>
              <input
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Ej: Reparaciones a domicilio"
                className="input-field"
                disabled={loading}
              />
            </div>

            <div className="input-group">
              <label>Descripción larga</label>
              <textarea
                value={descripcionLarga}
                onChange={(e) => setDescripcionLarga(e.target.value)}
                placeholder="Detalles y condiciones del servicio"
                className="input-field"
                rows="4"
                disabled={loading}
              />
            </div>

            <div className="input-group">
              <label>Categoría</label>
              <select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                className="input-field"
                disabled={loading}
              >
                <option value="">Selecciona una categoría</option>
                {categorias.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.nombre_c}
                  </option>
                ))}
              </select>
            </div>

            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
              Imagen del servicio
            </Typography>
            <IMGS onUploadComplete={handleImageUpload} />
            {imagen && (
              <div className="image-preview">
                <img
                  src={imagen}
                  alt="Vista previa"
                  style={{
                    maxHeight: "150px",
                    borderRadius: "8px",
                    marginTop: "10px",
                  }}
                />
              </div>
            )}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              sx={{ mt: 3, width: "100%", py: 1.5, fontSize: "1rem" }}
            >
              {loading ? "Guardando..." : "Publicar Servicio"}
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default Add_MiServicio;
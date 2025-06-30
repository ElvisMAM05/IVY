import React, { useEffect, useState } from "react";
import Fetch from "../../Services/Fetch";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../Styles/Full_Categories.css";

function Categories_Full() {
  const [categories, setCategories] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevaDescripcion, setNuevaDescripcion] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    obtenerCategorias();
  }, []);

  async function obtenerCategorias() {
    const data = await Fetch.getData("api/Categories/");
    setCategories(data);
  }

  const abrirModalEdicion = (cat) => {
    setEditandoId(cat.id);
    setNuevoNombre(cat.nombre_c);
    setNuevaDescripcion(cat.descripcion_c || "");
    setShow(true);
  };

  async function guardarCambios() {
    const categoriaObjEditar = {
      nombre_c: nuevoNombre,
      descripcion_c: nuevaDescripcion || "No se agregó una descripción",
    };

    try {
      await Fetch.patchData(categoriaObjEditar, "api/Categories", `${editandoId}/`);
      Swal.fire("Actualizado", "La categoría fue modificada", "success");
      setShow(false);
      setEditandoId(null);
      setNuevoNombre("");
      setNuevaDescripcion("");
      obtenerCategorias();
    } catch (error) {
      Swal.fire("Error", "No se pudo actualizar la categoría", "error");
    }
  }

  async function borrarCategoria(id) {
    const confirm = window.confirm("¿Seguro que deseas eliminar esta categoría?");
    if (!confirm) return;

    try {
      const resultado = await Fetch.deleteData(`${id}/`, "api/Categories");

      Swal.fire({
        icon: "success",
        title: "Categoría eliminada",
        text: resultado.message,
        timer: 1500,
        showConfirmButton: false,
      });

      obtenerCategorias();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al eliminar",
        text: "No se pudo eliminar la categoría. Verifica si está vinculada a servicios.",
      });
    }
  }

  return (
    <div className="Editar_Categorias_Container">
      <h2>Administrar Categorías</h2>

      {categories.map((cat) => (
        <div key={cat.id} className="Categoria_Item d-flex justify-content-between align-items-center">
          <div>
            <strong>{cat.nombre_c}</strong>
            <div className="text-muted small">
              {cat.descripcion_c || "Sin descripción"}
            </div>
          </div>
          <div className="d-flex gap-2">
            <Button className="btn-editar" size="sm" onClick={() => abrirModalEdicion(cat)}>
              Editar
            </Button>
            <Button variant="outline-danger" size="sm" onClick={() => borrarCategoria(cat.id)}>
              Eliminar
            </Button>
          </div>
        </div>
      ))}

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Categoría</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="nombreCategoria">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre de la categoría"
                value={nuevoNombre}
                onChange={(e) => setNuevoNombre(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="descripcionCategoria" className="mt-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Descripción de la categoría"
                value={nuevaDescripcion}
                onChange={(e) => setNuevaDescripcion(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={guardarCambios}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Categories_Full;
import React, { useEffect, useState } from "react";
import Fetch from "../../Services/Fetch";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../Styles/Full_Services.css"

function Servicios_CRUD() {
  const [servicios, setServicios] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevaDescripcion, setNuevaDescripcion] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    obtenerServicios();
  }, []);

  async function obtenerServicios() {
    const data = await Fetch.getData("api/Servicios/");
    setServicios(data);
  }

  const abrirModalEdicion = (servicio) => {
    setEditandoId(servicio.id);
    setNuevoNombre(servicio.nombre_servicio);
    setNuevaDescripcion(servicio.descripcion_s || "");
    setShow(true);
  };

  async function guardarCambios() {
    const servicioObjEditar = {
      nombre_servicio: nuevoNombre,
      descripcion_s: nuevaDescripcion || "No se agregó una descripción",
    };

    try {
      await Fetch.patchData(servicioObjEditar, "api/ServiciosE", `${editandoId}/`);
      Swal.fire("Actualizado", "El servicio fue modificado", "success");
      setShow(false);
      setEditandoId(null);
      setNuevoNombre("");
      setNuevaDescripcion("");
      obtenerServicios();
    } catch (error) {
      Swal.fire("Error", "No se pudo actualizar el servicio", "error");
    }
  }

  async function borrarServicio(id) {
    const confirm = window.confirm("¿Seguro que deseas eliminar este servicio?");
    if (!confirm) return;

    try {
      const resultado = await Fetch.deleteData(`${id}/`, "api/ServiciosE");
      Swal.fire({
        icon: "success",
        title: "Servicio eliminado",
        text: resultado.message,
        timer: 1500,
        showConfirmButton: false,
      });
      obtenerServicios();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al eliminar",
        text: "No se pudo eliminar el servicio. Verifica si está vinculado a categorías.",
      });
    }
  }

  return (
    <div className="Editar_Categorias_Container">
      <h2>Administrar Servicios</h2>

      {servicios.map((service) => (
        <div key={service.id} className="Categoria_Item d-flex justify-content-between align-items-center">
          <div>
            <strong>{service.nombre_servicio}</strong>
            <div className="text-muted small">
              {service.descripcion_s || "Sin descripción"}
            </div>
          </div>
          <div className="d-flex gap-2 ">
            <Button className="btn-editar" size="sm"  onClick={() => abrirModalEdicion(service)}>
              Editar
            </Button>
            <Button variant="outline-danger" size="sm" onClick={() => borrarServicio(service.id)}>
              Eliminar
            </Button>
          </div>
        </div>
      ))}

      {/* Modal de edición */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Servicio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="nombreServicio">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre del servicio"
                value={nuevoNombre}
                onChange={(e) => setNuevoNombre(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="descripcionServicio" className="mt-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Descripción del servicio"
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

export default Servicios_CRUD;
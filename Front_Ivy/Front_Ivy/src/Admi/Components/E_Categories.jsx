import React, { useEffect, useState } from 'react';
import Fetch from '../../Services/Fetch';
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
//import '../Styles/E_Categories.css';

function E_Categories() {
  const [categories, setCategories] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevaDescripcion, setNuevaDescripcion] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    obtenerCategorias();
  }, []);

  async function obtenerCategorias() {
    const data = await Fetch.getData('api/Categories/');
    setCategories(data);
  }

  async function guardarCambios() {
    const categoriaObjEditar = {
      nombre_c: nuevoNombre,
      descripcion_c: nuevaDescripcion || 'No se agregó una descripción',
    };

    try {
      await Fetch.patchData(categoriaObjEditar, 'api/Categories', `${editandoId}/`);
      Swal.fire('Actualizado', 'La categoría fue modificada', 'success');
      setShow(false);
      setEditandoId(null);
      setNuevoNombre('');
      setNuevaDescripcion('');
      obtenerCategorias();
    } catch (error) {
      Swal.fire('Error', 'No se pudo actualizar la categoría', 'error');
    }
  }

  const abrirModalEdicion = (cat) => {
    setEditandoId(cat.id);
    setNuevoNombre(cat.nombre_c);
    setNuevaDescripcion(cat.descripcion_c || '');
    setShow(true);
  };

  return (
    <div className="Editar_Categorias_Container">
      <h2>Editar categorías</h2>
      {categories.map((cat) => (
        <div key={cat.id} className="Categoria_Item">
          <span>{cat.nombre_c}</span>
          <button onClick={() => abrirModalEdicion(cat)}>Editar</button>
        </div>
      ))}

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar categoría</Modal.Title>
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

export default E_Categories;
import Fetch from "../../Services/Fetch";
import { useEffect, useState } from "react";
import Swal from "sweetalert2"; 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function E_Servicios() {
    const [servicios, setServicios] = useState([]);
    const [editandoId, setEditandoId] = useState(null);
    const [nuevoNombre, setNuevoNombre] = useState('');
    const [nuevaDescripcion, setNuevaDescripcion] = useState('');
    const [show, setShow] = useState(false);

    useEffect(() => {
        obtener_Servicios();    
    }, []);

    async function obtener_Servicios () {{
        const data = await Fetch.getData('api/Servicios/');
        setServicios(data);
    }
        
    }
    async function guardarCambios() {
        const servicioObjEditar = {
            nombre_servicio: nuevoNombre,
            descripcion_s: nuevaDescripcion || 'No se agregó una descripción',
        };

        try {
            await Fetch.patchData(servicioObjEditar, 'api/ServiciosE', `${editandoId}/`);
            Swal.fire('Actualizado', 'El servicio fue modificado', 'success');
            setShow(false);
            setEditandoId(null);
            setNuevoNombre('');
            setNuevaDescripcion('');
            obtener_Servicios();
        } catch (error) {
            Swal.fire('Error', 'No se pudo actualizar el servicio', 'error');
        }
    }


      const abrirModalEdicion = (service) => {
    setEditandoId(service.id);
    setNuevoNombre(service.nombre_servicio);
    setNuevaDescripcion(service.descripcion_s || '');
    setShow(true);
  };




  return (
       <div className="Editar_Categorias_Container">
      <h2>Editar Servicios</h2>
      {servicios.map((service) => (
        <div key={service.id} className="Categoria_Item">
          <span>{service.nombre_servicio}</span>
          <button onClick={() => abrirModalEdicion(service)}>Editar</button>
        </div>
      ))}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Servicios</Modal.Title>
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
  )
}

export default E_Servicios
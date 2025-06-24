import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "../Multi-Styles/Cards.css";
import Conectividad from "../Multi_Images/Conectividad.jpeg"
import Profesionales from "../Multi_Images/Profesionales.png"
import Asistencia_Personal from "../Multi_Images/Asistencia_Personal.jpeg"

function Cards() {
  return (
    <div className="cards-contenedor-ivy">
      <CardGroup className="ivy-card-group">
        <Card className="ivy-card">
          <Card.Img variant="top" src={Conectividad} />
          <Card.Body>
            <Card.Title>Conectividad</Card.Title>
            <Card.Text>
              Servicios que te ayudan a estar más cerca de los tuyos, sin importar la distancia.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Actualizado hace 3 minutos</small>
          </Card.Footer>
        </Card>

        <Card className="ivy-card">
          <Card.Img variant="top" src={Asistencia_Personal}  />
          <Card.Body>
            <Card.Title>Asistencia Personal</Card.Title>
            <Card.Text>
              Apoyo personalizado para tu día a día: desde cuidados hasta acompañamiento.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Actualizado hace 3 minutos</small>
          </Card.Footer>
        </Card>

        <Card className="ivy-card">
          <Card.Img variant="top"  src={Profesionales} />
          <Card.Body>
            <Card.Title>Futuros profesionales</Card.Title>
            <Card.Text>
              Encuentra profesionales que priorizan tu salud física y emocional.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Actualizado hace 3 minutos</small>
          </Card.Footer>
        </Card>

        <Card className="ivy-card">
          <Card.Img variant="top"  src={Profesionales} />
          <Card.Body>
            <Card.Title>Futuros profesionales</Card.Title>
            <Card.Text>
              Encuentra profesionales que priorizan tu salud física y emocional.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Actualizado hace 3 minutos</small>
          </Card.Footer>
        </Card>

        
      </CardGroup>
    </div>
  );
}

export default Cards;
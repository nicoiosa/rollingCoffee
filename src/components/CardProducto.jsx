import { Card, CardText } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProducto = ({ producto }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <Card className="h-100">
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title>{producto.nombreProducto}</Card.Title>
            <Card.Text>Descripcion: {producto.descripcionBreve}</Card.Text>
          </div>
          <CardText>
            <b>Precio: ${producto.precio}</b>
          </CardText>
        </Card.Body>
        <Card.Footer className="text-end">
          <Link
            className="btn btn-success"
            to={"/detailProducto/" + producto._id}
          >
            Ver Mas
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CardProducto;

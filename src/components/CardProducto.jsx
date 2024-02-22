import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProducto = ({ producto }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <Card className="h-100">
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.nombreProducto}</Card.Title>
          <Card.Text>
            Descripcion: {producto.descripcionBreve} <br />
            <b>Precio: ${producto.precio}</b>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
          <Link
            className="btn btn-success"
            to={"/detailProducto/" + producto.id}
          >
            Ver Mas
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CardProducto;

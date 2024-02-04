import { Card, Button } from "react-bootstrap";
import americanCoffee from "../assets/americanCoffee.jpg"
const CardProducto = () => {
  return (
    <div className="col-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={americanCoffee} />
        <Card.Body>
          <Card.Title>Cafe Americano</Card.Title>
          <Card.Text>
            Descripcion: una taza de cafe suave y aromatico. <br />
            <b>Precio: $250</b>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
          <Button variant="success">Ver Mas</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CardProducto;
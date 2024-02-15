import { Container } from "react-bootstrap";
import CardProducto from "./CardProducto";

const Grid = () => {
  return (
    <Container className="my-5">
      <h5 className="display-4">Nuestros Productos</h5>
      <hr />
      <div className="row justify-content-center">
        <CardProducto/>
        <CardProducto/>
        <CardProducto/>
        <CardProducto/>
      </div>
    </Container>
  );
};

export default Grid;

import { Container, Table } from "react-bootstrap";
import ItemProducto from "../ItemProducto";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <Container className="myMain">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="display-2">Productos Disponibles</h2>
        <div>
          <Link className="btn btn-primary" to="/admin/add"><i className="bi bi-file-earmark-plus"></i></Link>
        </div>
      </div>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <ItemProducto/>
          <ItemProducto/>
          <ItemProducto/>
          <ItemProducto/>
        </tbody>
      </Table>
    </Container>
  );
};

export default Admin;

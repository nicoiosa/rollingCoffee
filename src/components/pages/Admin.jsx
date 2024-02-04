import { Container, Button, Table } from "react-bootstrap";

const Admin = () => {
  return (
    <Container className="myMain">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="display-2">Productos Disponibles</h2>
        <div>
          <Button>Agregar</Button>
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
          <tr>
            <td>1</td>
            <td>Cafe Americano</td>
            <td>$250</td>
            <td>
              https://lovefoodfeed.com/wp-content/uploads/2023/06/How-to-make-an-americano-px-1200-01.jpg
            </td>
            <td>Bebida caliente</td>
            <td className="d-flex gap-2">
              <Button variant="warning">Editar</Button>
              <Button variant="danger">Borrar</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Cafe Americano</td>
            <td>$250</td>
            <td>
              https://lovefoodfeed.com/wp-content/uploads/2023/06/How-to-make-an-americano-px-1200-01.jpg
            </td>
            <td>Bebida caliente</td>
            <td className="d-flex gap-2">
              <Button variant="warning">Editar</Button>
              <Button variant="danger">Borrar</Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Cafe Americano</td>
            <td>$250</td>
            <td>
              https://lovefoodfeed.com/wp-content/uploads/2023/06/How-to-make-an-americano-px-1200-01.jpg
            </td>
            <td>Bebida caliente</td>
            <td className="d-flex gap-2">
              <Button variant="warning">Editar</Button>
              <Button variant="danger">Borrar</Button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Cafe Americano</td>
            <td>$250</td>
            <td>
              https://lovefoodfeed.com/wp-content/uploads/2023/06/How-to-make-an-americano-px-1200-01.jpg
            </td>
            <td>Bebida caliente</td>
            <td className="d-flex gap-2">
              <Button variant="warning">Editar</Button>
              <Button variant="danger">Borrar</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Admin;

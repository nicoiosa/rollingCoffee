import { Container, Table } from "react-bootstrap";
import ItemProducto from "../ItemProducto";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { leerProductosAPI } from "../helpers/queries";

const Admin = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    obtenerProductos();
  }, []);
  const obtenerProductos = async () => {
    const respuesta = await leerProductosAPI();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setProductos(datos);
    }
  };
  return (
    <Container className="myMain">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="display-2">Productos Disponibles</h2>
        <div>
          <Link className="btn btn-primary" to="/admin/add">
            <i className="bi bi-file-earmark-plus"></i>
          </Link>
        </div>
      </div>
      <hr />
      <Table responsive striped bordered hover>
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
          {productos.map((producto) => (
            <ItemProducto
              key={producto.id}
              producto={producto}
              setProductos={setProductos}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Admin;

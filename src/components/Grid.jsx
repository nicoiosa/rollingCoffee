import { Container } from "react-bootstrap";
import CardProducto from "./CardProducto";
import { useEffect, useState } from "react";
import { leerProductosAPI } from "./helpers/queries";

const Grid = () => {
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
    <Container className="my-5">
      <h5 className="display-4">Nuestros Productos</h5>
      <hr />
      <div className="row justify-content-center row-gap-4">
      {productos.map((producto) => <CardProducto key={producto.id} producto={producto}/>)}
      </div>
    </Container>
  );
};

export default Grid;

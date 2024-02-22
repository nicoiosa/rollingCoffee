import { Container, Card, Row, Col } from "react-bootstrap";
import { obtenerProductoAPI } from "../helpers/queries";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailProducto = () => {
  const [producto, setProducto] = useState([]);
  useEffect(() => {
    obtenerProductos();
  }, []);
  const { id } = useParams();
  const obtenerProductos = async () => {
    const respuesta = await obtenerProductoAPI(id);
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setProducto(datos);
    }
  };
  return (
    <Container className="myMain py-5">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img src={producto.imagen} className="img-fluid" />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{producto.nombreProducto}</Card.Title>
              <hr />
              <Card.Text>
                {producto.descripcionAmplia}
                <br />
                <br />
                <b>Categoria: </b> {producto.categoria}
                <br />
                <b>Precio: </b>${producto.precio}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetailProducto;

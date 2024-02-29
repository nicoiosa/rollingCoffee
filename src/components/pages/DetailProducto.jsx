import { Container, Card, Row, Col, CardText } from "react-bootstrap";
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
              <Card.Text>{producto.descripcionAmplia}</Card.Text>
              <CardText>
                <b>Categoria: </b> {producto.categoria}
              </CardText>
              <CardText>
                <b>Precio: </b>${producto.precio}
              </CardText>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetailProducto;

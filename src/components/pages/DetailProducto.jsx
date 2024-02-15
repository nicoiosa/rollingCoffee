import { Container, Card, Row, Col } from "react-bootstrap";

const DetailProducto = () => {
  return (
    <Container className="myMain py-5">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/6166701/pexels-photo-6166701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>Cafe Americano</Card.Title>
              <hr />
              <Card.Text>
                El café americano, refiriéndose al café típico que se bebe en
                los Estados Unidos, es la mezcla de agua caliente y café
                procesado en una cafetera con filtro de café, sistema para hacer
                café inventado por la empresaria alemana Melitta Bentz.
                <br />
                <br />
                <b>Categoria: </b>Bebida caliente
                <br />
                <b>Precio: $250</b>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetailProducto;

import { Button } from "react-bootstrap";
const ItemProducto = ({ producto }) => {
  return (
    <tr>
      <td>{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td className="text-end">${producto.precio}</td>
      <td className="text-center">
        <img
          src={producto.imagen}
          alt="Imagen representativa"
          className="img-thumbnail"
        />
      </td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <Button variant="warning me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;

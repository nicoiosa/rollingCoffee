import { Button } from "react-bootstrap";
const ItemProducto = () => {
  return (
    <tr>
      <td>1</td>
      <td>Cafe Americano</td>
      <td>$250</td>
      <td className="text-center">
        <img
          src="https://lovefoodfeed.com/wp-content/uploads/2023/06/How-to-make-an-americano-px-1200-01.jpg"
          alt="Imagen representativa"
          className="img-thumbnail"
        />
      </td>
      <td>Bebida caliente</td>
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

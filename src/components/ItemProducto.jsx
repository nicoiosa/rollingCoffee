import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarProductoAPI, leerProductosAPI } from "./helpers/queries";

const ItemProducto = ({ producto, setProductos }) => {
  const borrarProducto = () => {
    Swal.fire({
      title: "¿Estas seguro de eliminar el producto?",
      text: "No se puede revertir este cambio!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrarlo!",
      cancelButtonText: "Cancelar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const answer = await borrarProductoAPI(producto.id);
        if (answer.status === 200) {
          Swal.fire({
            title: "Eliminado!",
            text: `El producto ${producto.nombreProducto} fue eliminado.`,
            icon: "success",
          });
          const respuesta = await leerProductosAPI();
          if (respuesta.status === 200) {
            const datos = await respuesta.json();
            setProductos(datos);
          }
        } else {
          Swal.fire({
            title: "Ocurrio un error!",
            text: `El producto ${producto.nombreProducto} no fue eliminado correctamente, pruebe nuevamente en unos minutos`,
            icon: "error",
          });
        }
      }
    });
  };
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
        <Button variant="danger" onClick={borrarProducto}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;

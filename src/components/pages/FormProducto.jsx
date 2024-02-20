import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearProductoAPI } from "../helpers/queries";
import Swal from "sweetalert2";

const FormProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (producto) => {
    console.log(producto);
    const respuesta = await crearProductoAPI(producto);
    // agregar un msj si el codigo es 201 todo salio bien, caso contrario, de que ocurrio un error
    if (respuesta.status === 201) {
      Swal.fire({
        title: "Producto creado!",
        text: `El producto ${producto.nombreProducto} fue creado correctamente`,
        icon: "success",
      });
      reset();
    } else {
      Swal.fire({
        title: "Ocurrio un error!",
        text: `El producto ${producto.nombreProducto} no fue creado correctamente, pruebe nuevamente en unos minutos`,
        icon: "error",
      });
    }
    console.log(respuesta);
  };
  return (
    <Container className="myMain py-2">
      <h2 className="display-2">Nuevo producto</h2>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)} className="my-4">
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>
            <b>Producto</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {...register("nombreProducto", {
              required: "El nombre del producto es obligatorio",
              minLength: {
                value: 2,
                message: "Debe ingresar como minimo 2 caracteres",
              },
              maxLength: {
                value: 40,
                message: "Debe ingresar como maximo 40 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>
            <b>Precio</b>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 250"
            {...register("precio", {
              required: "El precio es obligatorio",
              min: {
                value: 100,
                message: "El menos numero posible es 100",
              },
              max: {
                value: 10000,
                message: "El mayor numero posible es 10000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>
            <b>Imagen URL</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "El URL de imagen es obligatorio",
              pattern: {
                value: /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i,
                message: "URL de imagen invalido (png|jpg|jpeg|gif|png|svg)",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>
            <b>Categoría</b>
          </Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Elige 1 opción",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Infusiones">Infusiones</option>
            <option value="Batidos">Batidos</option>
            <option value="Dulce">Dulce</option>
            <option value="Salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescBreve">
          <Form.Label>
            <b>Descripción breve</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Una taza de café suave y aromático."
            as="textarea"
            {...register("descripcionBreve", {
              required: "La descripcion es obligatoria",
              minLength: {
                value: 10,
                message: "Debe ingresar como minimo 10 caracteres",
              },
              maxLength: {
                value: 100,
                message: "Debe ingresar como maximo 100 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcionBreve?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescAmplia">
          <Form.Label>
            <b>Descripción Amplia</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: El café americano es una bebida caliente que consiste en un espresso diluido con agua caliente, lo que resulta en una taza de café suave y aromático. Es una opción popular para aquellos que prefieren un café menos intenso que el espresso tradicional. Perfecto para disfrutar en cualquier momento del día."
            as="textarea"
            {...register("descripcionAmplia", {
              required: "La descripcion es obligatoria",
              minLength: {
                value: 50,
                message: "Debe ingresar como minimo 50 caracteres",
              },
              maxLength: {
                value: 1000,
                message: "Debe ingresar como maximo 1000 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcionAmplia?.message}
          </Form.Text>
        </Form.Group>
        <Button type="submit" variant="success">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default FormProducto;

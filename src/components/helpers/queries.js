const URIProducto = import.meta.env.VITE_API_PRODUCTO;

export const crearProductoAPI = async (producto) => {
  try {
    const respuesta = await fetch(URIProducto, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const leerProductosAPI = async () => {
  try {
    const respuesta = await fetch(URIProducto);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarProductoAPI = async (id) => {
  try {
    const answer = await fetch(`${URIProducto}/${id}`, {
      method: "DELETE",
    });
    return answer
  } catch (error) {
    console.log(error);
  }
};

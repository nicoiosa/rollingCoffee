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
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
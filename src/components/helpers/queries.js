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
export const obtenerProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URIProducto}/${id}`);
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
    return answer;
  } catch (error) {
    console.log(error);
  }
};

export const editarProductoAPI = async (producto, id) => {
  try {
    const answer = await fetch(`${URIProducto}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    return answer;
  } catch (error) {
    console.log(error);
  }
};

const userAdmin = {
  email: "admin@rollingcoffee.com",
  password: "Totoro88",
};

export const signIn = (usuario) => {
  if (
    usuario.email === userAdmin.email &&
    usuario.password === userAdmin.password
  ) {
    sessionStorage.setItem(
      "signInRollingCoffee",
      JSON.stringify(userAdmin.email)
    );
    return true;
  } else {
    return false;
  }
};

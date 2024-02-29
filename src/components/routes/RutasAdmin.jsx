import { Routes, Route } from "react-router-dom";
import FormProducto from "../pages/FormProducto";
import Admin from "../pages/Admin";

const RutasAdmin = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Admin />} />
      <Route
        exact
        path="/add"
        element={<FormProducto edit={false} title="Nuevo producto" />}
      />
      <Route
        exact
        path="/edit/:id"
        element={<FormProducto edit={true} title="Editar producto" />}
      />
    </Routes>
  );
};

export default RutasAdmin;

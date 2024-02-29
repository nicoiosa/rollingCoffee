import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/common/Menu";
import Foot from "./components/common/Foot";
import Home from "./components/pages/Home";
import Error404 from "./components/pages/Error404";
import DetailProducto from "./components/pages/DetailProducto";
import Login from "./components/pages/Login";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
import { useState } from "react";
import { set } from "react-hook-form";

function App() {
  const usuario =
    JSON.parse(sessionStorage.getItem("signInRollingCoffee")) || "";
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);
  return (
    <BrowserRouter>
      <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/admin/*"
          element={
            <RutasProtegidas>
              <RutasAdmin></RutasAdmin>
            </RutasProtegidas>
          }
        />
        <Route exact path="/detailProducto/:id" element={<DetailProducto />} />
        <Route
          exact
          path="/login"
          element={<Login setUsuarioLogueado={setUsuarioLogueado} />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Foot />
    </BrowserRouter>
  );
}

export default App;

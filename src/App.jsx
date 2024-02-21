import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/common/Menu";
import Foot from "./components/common/Foot";
import Admin from "./components/pages/Admin";
import Home from "./components/pages/Home";
import Error404 from "./components/pages/Error404";
import DetailProducto from "./components/pages/DetailProducto";
import FormProducto from "./components/pages/FormProducto";
import Login from "./components/pages/login";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/detailProducto" element={<DetailProducto />} />
        <Route exact path="/admin/add" element={<FormProducto />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Foot />
    </BrowserRouter>
  );
}

export default App;

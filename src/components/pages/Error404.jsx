import { Link } from "react-router-dom";
import error from "../../assets/error404.png";

const Error404 = () => {
  return (
    <div className="myMain text text-center">
      <div>
        <img src={error} alt="Imagen del error 404" className="img-fluid" />
      </div>
      <Link className="btn btn-success" to="/">Volver a Inicio</Link>
    </div>
  );
};

export default Error404;

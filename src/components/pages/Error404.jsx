import error from "../../assets/error404.png";
import { Button } from "react-bootstrap";

const Error404 = () => {
  return (
    <div className="myMain text text-center">
      <div>
        <img src={error} alt="Imagen del error 404" className="img-fluid" />
      </div>
      <Button>Volver a Inicio</Button>
    </div>
  );
};

export default Error404;

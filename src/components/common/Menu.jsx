import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/Coffee_Logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();
  const logOut = () => {
    sessionStorage.removeItem("signInRollingCoffee");
    setUsuarioLogueado("");
    navegacion("/");
  };
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo Rolling Coffee"
            className="img-fluid"
            width={150}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end to="/" className="nav-link">
              Inicio
            </NavLink>
            {usuarioLogueado.length > 0 ? (
              <>
                <NavLink end to="/admin" className="nav-link">
                  Administrador
                </NavLink>
                <button onClick={logOut} className="nav-link">
                  Logout
                </button>
              </>
            ) : (
              <NavLink end to="/login" className="nav-link">
                Login
              </NavLink>
            )}
            <NavLink end to="/register" className="nav-link">
              Registro
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;

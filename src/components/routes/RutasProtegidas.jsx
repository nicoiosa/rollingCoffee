import { Navigate } from "react-router-dom";

const RutasProtegidas = ({ children }) => {
  const admin =
    JSON.parse(sessionStorage.getItem("signInRollingCoffee")) || null;
  if (!admin) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default RutasProtegidas;

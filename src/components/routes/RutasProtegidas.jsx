import { Navigate } from "react-router-dom";

const RutasProtegidas = ({ children }) => {
  const admin =
    JSON.parse(sessionStorage.getItem("signInRollingCofee")) || null;
    console.log((admin));
  if (!admin) {
    return <Navigate to="/login" />;
  } else {
    console.log("soy admin");
    return children;
  }
};

export default RutasProtegidas;

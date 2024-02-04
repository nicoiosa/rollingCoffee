import Menu from "./components/common/Menu"
import Admin from "./components/pages/Admin"
import Foot from "./components/common/Foot"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Menu/>
      <Admin/>
      <Foot/>
    </>
  );
}

export default App;

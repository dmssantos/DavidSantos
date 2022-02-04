import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/index";
import Perfil from "../pages/perfil/index";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  );
}

export default Routing;

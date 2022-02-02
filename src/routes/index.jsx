import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/index";

function Routing() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default Routing;

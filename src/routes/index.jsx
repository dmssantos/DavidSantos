import { Routes, Route } from "react-router-dom";
import * as Pages from "../pages/index";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Pages.Home />} />
      <Route path="/trabalhos" element={<Pages.Trabalhos />} />
      <Route path="/curriculo" element={<Pages.Curriculo />} />
      <Route path="/certificados" element={<Pages.Certificados />} />
    </Routes>
  );
}

export default Routing;

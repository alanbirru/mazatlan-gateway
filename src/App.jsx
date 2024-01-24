import Navbar from "./Inicio/Navbar";
import BotonWhats from "./boton/BotonWhats";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  Activities,
  EmergencyNumbers,
  Food,
  Health,
  PrincipalPage,
  Shopping,
  Directory,
} from "./Sections";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <BotonWhats />

      <Routes>
        <Route path="/mazatlan-gateway/" element={<PrincipalPage />} />
        <Route
          path="/mazatlan-gateway/emergency-numbers"
          element={<EmergencyNumbers />}
        />
        <Route path="mazatlan-gateway/food" element={<Food />} />
        <Route path="mazatlan-gateway/activities" element={<Activities />} />
        <Route path="mazatlan-gateway/health" element={<Health />} />
        <Route path="mazatlan-gateway/shopping" element={<Shopping />} />
        <Route path="maztlan-gateway/directory" element={<Directory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

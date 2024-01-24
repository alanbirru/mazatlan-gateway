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
        <Route path="/" element={<PrincipalPage />} />
        <Route path="/emergency-numbers" element={<EmergencyNumbers />} />
        <Route path="/food" element={<Food />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/health" element={<Health />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/directory" element={<Directory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

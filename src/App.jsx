import Navbar from "./Inicio/Navbar";
import BotonWhats from "./boton/BotonWhats";
import { useEffect } from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import {
  Activities,
  EmergencyNumbers,
  Food,
  Health,
  PrincipalPage,
  Shopping,
  Directory,
  NotFound,
} from "./Sections";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
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
        <Route path="mazatlan-gateway/directory" element={<Directory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

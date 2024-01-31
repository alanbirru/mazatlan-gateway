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
  Contact,
  Blog,
} from "./Sections";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Navbar />
      <BotonWhats />

      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
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
          <Route path="mazatlan-gateway/contact" element={<Contact />} />
          <Route path="mazatlan-gateway/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

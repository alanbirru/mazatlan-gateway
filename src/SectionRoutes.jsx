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

import {
  Ambulance,
  Chiropractors,
  Clinics,
  Dentists,
  Dertamologists,
  GeneralDoctors,
  Hospitals,
  MassageAndNailCare,
  Naturopath,
  Optometrists,
  Pharmacy,
  Physiotherapy,
  Pediatrician,
} from "./health-categories";

import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Opticians from "./health-categories/Opticians";

const SectionRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.location}>
        <Route path="/mazatlan-gateway/" element={<PrincipalPage />} />
        <Route
          path="/mazatlan-gateway/emergency-numbers"
          element={<EmergencyNumbers />}
        />
        <Route path="mazatlan-gateway/food">
          <Route index element={<Food />} />
          <Route path="restaurants" element={<h1>Restaurantes</h1>} />
          <Route path="cafes" element={<h1>cafeterias</h1>} />
          <Route path="bakeries" element={<h1>pastelerias</h1>} />
          <Route path="bistros" element={<h1>Bisto's</h1>} />
          <Route path="pubs" element={<h1>Pubs</h1>} />
          <Route path="taverns" element={<h1>tavernas</h1>} />
          <Route path="food-vendors" element={<h1>Vendedores de comida</h1>} />
        </Route>

        <Route path="mazatlan-gateway/activities" element={<Activities />} />

        <Route path="mazatlan-gateway/health">
          <Route index element={<Health />} />
          <Route path="ambulance" element={<Ambulance />} />
          <Route path="chiropractors" element={<Chiropractors />} />
          <Route path="clinics" element={<Clinics />} />
          <Route path="dentists" element={<Dentists />} />
          <Route path="dermatologists" element={<Dertamologists />} />
          <Route path="general-doctors" element={<GeneralDoctors />} />
          <Route path="hospitals" element={<Hospitals />} />
          <Route
            path="massage-and-nail-care"
            element={<MassageAndNailCare />}
          />
          <Route path="naturopath" element={<Naturopath />} />
          <Route path="physiotherapy" element={<Physiotherapy />} />
          <Route path="opticians" element={<Opticians />} />
          <Route path="optometrists" element={<Optometrists />} />
          <Route path="pharmacy" element={<Pharmacy />} />
          <Route path="pediatrician" element={<Pediatrician />} />
        </Route>

        <Route path="mazatlan-gateway/shopping" element={<Shopping />} />

        <Route path="mazatlan-gateway/directory" element={<Directory />} />

        <Route path="mazatlan-gateway/contact" element={<Contact />} />

        <Route path="mazatlan-gateway/blog" element={<Blog />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default SectionRoutes;

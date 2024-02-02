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

import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

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
          <Route path="ambulance" element={<h1>ambulance</h1>} />
          <Route path="chiropractors" element={<h1>chiropractors</h1>} />
          <Route path="clinics" element={<h1>clinics</h1>} />
          <Route path="dentists" element={<h1>dentists</h1>} />
          <Route path="dermatologists" element={<h1>dermatologists</h1>} />
          <Route path="general-doctors" element={<h1>General Doctors</h1>} />
          <Route path="hospitals" element={<h1>hospitals</h1>} />
          <Route
            path="massage-and-nail-care"
            element={<h1>massage-and-nail-care</h1>}
          />
          <Route path="naturopath" element={<h1>naturopath</h1>} />
          <Route path="pediatrician" element={<h1>pediatrician</h1>} />
          <Route path="physiotherapy" element={<h1>physiotherapy</h1>} />
          <Route path="opticians" element={<h1>opticians</h1>} />
          <Route path="optometrists" element={<h1>opticians</h1>} />
          <Route path="Pharmacy" element={<h1>opticians</h1>} />
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

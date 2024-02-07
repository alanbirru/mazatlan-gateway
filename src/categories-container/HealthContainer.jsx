import { Link } from "react-router-dom";

import ambulanceImage from "../assets/health-categories-images/ambulance-img.jpg";
import chiropractorsImage from "../assets/health-categories-images/chiropractors-img.jpg";
import clinicsImage from "../assets/health-categories-images/clinics-img.jpg";
import dentistsImage from "../assets/health-categories-images/dentists-img.jpg";
import GeneralDoctors from "../assets/health-categories-images/dentists-img.jpg";
import hostpitalsImg from "../assets/health-categories-images/hospitals-img.jpg";
import nailCareImg from "../assets/health-categories-images/nail-care-img.jpg";
import naturopathImg from "../assets/health-categories-images/naturopath-img.jpg";
import opticiansImg from "../assets/health-categories-images/opticians-img.jpg";
import optometristImg from "../assets/health-categories-images/opticians-img.jpg";
import pedatricianImg from "../assets/health-categories-images/pedatrician-img.jpg";
import pharmacyImg from "../assets/health-categories-images/pharmacy-img.jpg";
import physiotherapyImg from "../assets/health-categories-images/physiotherapy-img.jpg";

const HealthContainer = () => {
  const categoriesCards = [
    { title: "Ambulance", id: "ambulance", image: "" },
    { title: "Chiropractors", id: "chiropractors", image: "" },
    { title: "Clinics", id: "clinics", image: "" },
    { title: "Dentists", id: "dentists", image: "" },
    { title: "Dermatologists", id: "dermatologists", image: "" },
    { title: "General Doctors", id: "general-doctors", image: "" },
    { title: "Hospitals", id: "hospitals", image: "" },
    { title: "Massage And Nail Care", id: "hospitals", image: "" },
    { title: "Naturopath", id: "naturopath", image: "" },
    { title: "Opticans", id: "opticans", image: "" },
    { title: "Optometrists", id: "optometrists", image: "" },
    { title: "Pediatrician", id: "pediatrician", image: "" },
    { title: "Pharmacy", id: "pediatrician", image: "" },
    { title: "Physiotherapy", id: "physiotherapy", image: "" },
  ];

  return (
    <div>
      {categoriesCards.map((card) => {
        return (
          <Link to={card.id}>
            <div>
              <h2>{card.title}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default HealthContainer;

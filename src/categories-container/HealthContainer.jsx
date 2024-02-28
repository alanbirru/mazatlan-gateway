import { Link } from "react-router-dom";
import "../css/healthCategories.css";

import ambulanceImage from "../assets/health-categories-cards/ambulance-img.webp";
import chiropractorsImage from "../assets/health-categories-cards/chiropractors-img.webp";
import clinicsImage from "../assets/health-categories-cards/clinics-img.webp";
import dentistsImage from "../assets/health-categories-cards/dentists-img.webp";
import dermatologistsImage from "../assets/health-categories-cards/dermatologists-img.webp";
import GeneralDoctorsImage from "../assets/health-categories-cards/general-doctors.webp";
import hostpitalsImg from "../assets/health-categories-cards/hospitals-img.webp";
import nailCareImg from "../assets/health-categories-cards/nail-care-img.webp";
import naturopathImg from "../assets/health-categories-cards/naturopath-img.webp";
import opticiansImg from "../assets/health-categories-cards/opticians-img.webp";
import optometristImg from "../assets/health-categories-cards/optometrists.webp";
import pedatricianImg from "../assets/health-categories-cards/pedatrician-img.webp";
import pharmacyImg from "../assets/health-categories-cards/pharmacy-img.webp";
import physiotherapyImg from "../assets/health-categories-cards/physiotherapy-img.webp";

const HealthContainer = () => {
  const categoriesCards = [
    { title: "Ambulance", id: "ambulance", image: ambulanceImage },
    { title: "Chiropractors", id: "chiropractors", image: chiropractorsImage },
    { title: "Clinics", id: "clinics", image: clinicsImage },
    { title: "Dentists", id: "dentists", image: dentistsImage },
    {
      title: "Dermatologists",
      id: "dermatologists",
      image: dermatologistsImage,
    },
    {
      title: "General Doctors",
      id: "general-doctors",
      image: GeneralDoctorsImage,
    },
    { title: "Hospitals", id: "hospitals", image: hostpitalsImg },
    {
      title: "Massage And Nail Care",
      id: "massage-and-nail-care",
      image: nailCareImg,
    },
    { title: "Naturopath", id: "naturopath", image: naturopathImg },
    { title: "Opticians", id: "opticians", image: opticiansImg },
    { title: "Optometrists", id: "optometrists", image: optometristImg },
    { title: "Pediatrician", id: "pediatrician", image: pedatricianImg },
    { title: "Pharmacy", id: "pharmacy", image: pharmacyImg },
    { title: "Physiotherapy", id: "physiotherapy", image: physiotherapyImg },
  ];

  return (
    <div className="health-categorie-container">
      {categoriesCards.map((card) => {
        return (
          <Link to={card.id}>
            <div className="image-container">
              <div
                className="health-categorie"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${card.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div>
                  <h1>{card.title}</h1>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default HealthContainer;

import { Link } from "react-router-dom";
import "../css/healthCategories.css";

import ambulanceImage from "../assets/health-categories-images/ambulance-img.jpg";
import chiropractorsImage from "../assets/health-categories-images/chiropractors-img.jpg";
import clinicsImage from "../assets/health-categories-images/clinics-img.jpg";
import dentistsImage from "../assets/health-categories-images/dentists-img.jpg";
import dermatologistsImage from "../assets/health-categories-images/dermatologists-img.jpg";
import GeneralDoctorsImage from "../assets/health-categories-images/general-doctors.jpg";
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
    { title: "Opticans", id: "opticans", image: opticiansImg },
    { title: "Optometrists", id: "optometrists", image: optometristImg },
    { title: "Pediatrician", id: "pediatrician", image: pedatricianImg },
    { title: "Pharmacy", id: "pediatrician", image: pharmacyImg },
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

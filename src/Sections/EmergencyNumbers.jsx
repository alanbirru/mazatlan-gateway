import React, { useEffect } from "react";
import "../css/emergency-numbers.css";
import logo911 from "../assets/emergency-num-img/911.jpg";
import contactoCiudadano from "../assets/emergency-num-img/contacto-ciudadano.png";
import policiaEstatal from "../assets/emergency-num-img/policia-estatal.jpg";
import policiaFederal from "../assets/emergency-num-img/policia-federal.jpg";
import cruzRoja from "../assets/emergency-num-img/cruz-roja.jpg";
import angelesVerdes from "../assets/emergency-num-img/angeles-verdes.jpg";

const EmergencyNumbers = () => {
  const emergencyCards = [
    {
      img: logo911,
      information:
        "Mazatlán has your back! Our 9-1-1 Emergency Call Attention Service is here to handle all your medical, security, civil protection, and public services emergencies",
      number: "911",
      button: "More info",
    },
    {
      img: contactoCiudadano,
      information:
        "Contacting Citizen is the ultimate communication hub for all the superheroes of public safety and emergency response! Connect with Public Security, Civil Protection, Fire Station, Red Cross, and Federal Police all in one place. It's the power of unity when it comes to keeping our communities safe and protected.",
      number: "669 9868126",
      button: "More info",
    },
    {
      img: policiaEstatal,
      information: "Primero Escolar 10A, Urías, 82099 Mazatlán, Sin.",
      number: "+52 669 982-0020",
      button: "More info",
    },

    {
      img: policiaFederal,
      information:
        "If you are a victim or witness to a kidnapping or extortion in any of its modalities, you can make your complaint 24 hours a day, 365 days a year free of charge.",
      number: "669 985 1451",
      button: "More info",
    },

    {
      img: cruzRoja,
      information: "AV. Gral. Ignacio Zaragoza.",
      number: "Phone: 088 or 11036000",
      button: "More info",
    },

    {
      img: cruzRoja,
      information: "AV. Gral. Ignacio Zaragoza.",
      number: "Phone: 088 or 11036000",
      button: "More info",
    },
  ];

  return (
    <section id="emergency-numbers">
      <div className="card-emergency-container">
        {emergencyCards.map((card) => {
          return (
            <article className="card-emergency-numbers">
              <img src={card.img} alt="card" />
              <div className="text-emergency">
                <p>{card.information}</p>
                <span>{card.number}</span>
                <button>{card.button}</button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default EmergencyNumbers;
